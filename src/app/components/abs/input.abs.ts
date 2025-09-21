import { AbstractControl, ValidationErrors } from '@angular/forms';

export abstract class InputAbs {
  formControl: AbstractControl | null = null;
  hasError: boolean = false;
  value: any;
  touched: boolean = false;
  invalid: boolean = false;
  errorMessage: string = '';

  writeValue(value: string) {
    this.value = value;
    this.hasError = false;
    this.updateErrorState();
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  onChange = (value: any) => {};
  onTouched = () => {};

  markAsTouched() {
    if (this.formControl) {
      this.formControl.markAsTouched();
      this.formControl.updateValueAndValidity();
    }
    this.touched = true;
    this.updateErrorState();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.formControl = control;
    this.updateErrorState();

    return this.invalid ? { invalid: true } : null;
  }

  updateErrorState() {
    if (this.formControl) {
      this.invalid = this.formControl.invalid && this.formControl.touched;
      this.hasError = this.invalid;
      this.errorMessage = this.getErrorMessage();
    }
  }

  getErrorMessage(): string {
    if (
      !this.formControl ||
      !this.formControl.touched ||
      !this.formControl.errors
    ) {
      this.hasError = false;
      return '';
    }
    this.hasError = true;
    if (this.formControl.errors['tamanhoInvalido']) {
      this.hasError = true;
      return 'Tamanho Invalido';
    }
    if (this.formControl.errors['cpfInvalido']) {
      return 'CPF Invalido';
    }
    if (this.formControl.errors['cnpjInvalido']) {
      return 'CNPJ Invalido';
    }
    if (this.formControl.errors['required'] && !this.value) {
      return 'Campo obrigatório';
    }
    if (this.formControl.errors['minlength']) {
      return `Mínimo de ${this.formControl.errors['minlength'].requiredLength} caracteres`;
    }
    if (this.formControl.errors['maxlength']) {
      return `Mínimo de ${this.formControl.errors['maxlength'].requiredLength} caracteres`;
    }
    if (this.formControl.errors['telefoneInvalido']) {
      return `Telefone Invalido`;
    }
    if (this.formControl.errors['cepInvalido']) {
      return `CEP Invalido`;
    }

    return 'Valor inválido';
  }

  showErros(data: Array<string>) {
    this.hasError = true;
    this.errorMessage = data.toString();
  }
}
