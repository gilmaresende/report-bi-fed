import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutocompleteComponent } from '../../components/auto-complete/auto-complete.component';
import { InputDateComponent } from '../../components/input-date/input-date.component';
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { ReportToPlay } from '../../models/report-bi-to-play';
import { ReportApiService } from '../../services/api/report-api.service';
import { BuildService } from '../../services/infra/build.service';
import { downloadFile } from '../../utils/download.util';
import { getIdRote } from '../../utils/rote-itils';
import { InputRadioComponent } from '../../components/input-radio/input-radio.component';

@Component({
  selector: 'app-report-play',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputDateComponent,
    AutocompleteComponent,
    InputRadioComponent,
  ],
  templateUrl: './report-play.component.html',
  styleUrl: './report-play.component.scss',
})
export class ReportPlayComponent {
  public static TITLE: string = 'Play relatório';
  public static ROTE: string = 'report-play';
  ob!: ReportToPlay;
  form!: FormGroup;

  format: string = 'XLSX';

  constructor(
    private build: BuildService,
    private seriveReport: ReportApiService,
    private activatedRoutes: ActivatedRoute
  ) {
    const id = getIdRote(this.activatedRoutes);
    this.seriveReport.getByIdToPlay(id).subscribe((ret) => {
      this.ob = ret.body;
      this.populateForm(this.ob);
    });
  }

  populateForm = async (ob: ReportToPlay) => {
    this.form = this.build.getFormBuilder().group({});
    ob.parametros.forEach((p) => {
      this.form.addControl(
        p.chave,
        this.build.getFormBuilder().control(p.valorPadrao)
      );
    });
  };

  play() {
    this.seriveReport
      .playReport(this.form.value, this.ob.id, this.format)
      .subscribe((ret) => {
        downloadFile(ret.body);
      });
  }
}
