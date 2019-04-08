import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() leyenda = 'Titulo Gráfico';
  @Input() labels = '';
  @Input() data = '';
  @Input() type = '';

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: SingleDataSet = [350, 450, 100];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
    // console.log(this.data);
  }

}
