import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { InputAbs } from '../abs/input.abs';

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  imports: [FormsModule, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AutocompleteComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: AutocompleteComponent,
    },
  ],
})
export class AutocompleteComponent
  extends InputAbs
  implements ControlValueAccessor, OnInit
{
  @Input() id!: string;
  @Input() labelView!: string;
  @Input() attributeValue!: string;
  @Input() placeholder!: string;
  @Input() label?: string;
  @Input() listData: any[] = [];
  @Output() valueChanged = new EventEmitter<any>();
  query: string = '';
  itemSelecionado: any;
  filteredSuggestions: any[] = [];
  isDropdownOpen: boolean = false;
  selectedIndex: number = -1;

  constructor(private elementRef: ElementRef) {
    super();
  }
  ngOnInit(): void {
    this.filteredSuggestions = [...this.listData];
  }
  setDisabledState?(isDisabled: boolean): void {}

  /**
   * Filtra as sugestões com base no texto digitado
   */
  filterSuggestions(): void {
    if (!this.query) {
      return;
    }
    const queryLower = this.query.trim().toLowerCase();
    if (!queryLower) {
      this.filteredSuggestions = [];
      this.isDropdownOpen = false;
      return;
    }

    this.filteredSuggestions = this.listData.filter((item) =>
      item[this.labelView].toLowerCase().includes(queryLower)
    );
    this.isDropdownOpen = this.filteredSuggestions.length > 0;
    this.resetSelection();
  }

  /**
   * Seleciona uma sugestão clicada ou navegada
   */
  selectSuggestion(suggestion: any): void {
    this.itemSelecionado = suggestion;
    this.query = suggestion[this.labelView];
    this.closeDropdown();
    this.onChange(this.itemSelecionado[this.attributeValue]);
    this.valueChanged.emit(this.itemSelecionado[this.attributeValue]);
  }

  /**
   * Abre a lista de sugestões, exibindo todas ou filtradas
   */
  openSuggestions(): void {
    if (this.query && !this.query.trim()) {
      this.filteredSuggestions = this.listData;
    } else {
      this.filterSuggestions();
    }
    this.isDropdownOpen = this.filteredSuggestions.length > 0;
  }

  /**
   * Fecha o dropdown ao clicar fora do componente
   */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    const isInside = target.closest(`#${this.id}`);
    if (!isInside) {
      this.closeDropdown();
    }
  }
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.isDropdownOpen || this.filteredSuggestions.length === 0) return;

    switch (event.key) {
      case 'ArrowDown':
        this.moveSelection(1);
        this.scrollToSelected();
        break;
      case 'ArrowUp':
        this.moveSelection(-1);
        this.scrollToSelected();
        break;
      case 'Enter':
        if (this.selectedIndex >= 0) {
          this.selectSuggestion(this.filteredSuggestions[this.selectedIndex]);
        }
        break;
      case 'Escape':
        this.closeDropdown();
        break;
      default:
        return; // Ignora outras teclas
    }
    event.preventDefault();
  }

  /**
   * Move a seleção com base nas setas do teclado
   */
  private moveSelection(step: number): void {
    const length = this.filteredSuggestions.length;
    this.selectedIndex = (this.selectedIndex + step + length) % length;

    // Scroll para o item selecionado
    this.scrollToSelectedItem();
  }

  private scrollToSelected(): void {
    const activeItem = document.querySelector(
      '.autocomplete-item.active'
    ) as HTMLElement;
    if (activeItem) {
      const dropdownList = document.querySelector(
        '.autocomplete-list'
      ) as HTMLElement;
      const listHeight = dropdownList.offsetHeight;
      const itemTop = activeItem.offsetTop;
      const itemHeight = activeItem.offsetHeight;

      // Verifica se o item está visível, se não, rola a lista para exibi-lo
      if (itemTop < dropdownList.scrollTop) {
        dropdownList.scrollTop = itemTop; // Rola para o topo do item
      } else if (itemTop + itemHeight > dropdownList.scrollTop + listHeight) {
        dropdownList.scrollTop = itemTop + itemHeight - listHeight; // Rola para a parte inferior do item
      }
    }
  }

  /**
   * Rola o dropdown até o item selecionado
   */
  private scrollToSelectedItem(): void {
    const selectedItem = this.elementRef.nativeElement.querySelector(
      '.autocomplete-item.selected'
    );
    if (selectedItem) {
      selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  /**
   * Fecha o dropdown
   */
  private closeDropdown(): void {
    this.isDropdownOpen = false;
    this.resetSelection();
  }

  /**
   * Reseta a seleção do índice
   */
  private resetSelection(): void {
    this.selectedIndex = -1;
  }

  /**
   * Limpa o conteúdo do campo de entrada e fecha o dropdown
   */
  clearQuery(): void {
    this.query = '';
    this.filteredSuggestions = [...this.listData];
    this.isDropdownOpen = false;
    this.onChange(undefined);
    this.valueChanged.emit(undefined);
    this.resetSelection();
  }

  override writeValue(value: string): void {
    if (value) {
      const itemSelecionado = this.listData.find(
        (i) => i[this.attributeValue] === value
      );
      this.query = itemSelecionado[this.labelView];
    }
    this.itemSelecionado = value;
  }
}
