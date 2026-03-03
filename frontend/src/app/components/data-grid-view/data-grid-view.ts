import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid-view',
  imports: [],
  templateUrl: './data-grid-view.html',
  styleUrl: './data-grid-view.css',
})
export class DataGridView {
  loadedData: Record<string, any>[] = [];
  //Nome dos headers da tabela
  @Input() columnOneName: string = '';
  @Input() columnTwoName: string = '';
  @Input() columnThreeName: string = '';
  //Valores da tabela
  @Input() columnOneDataName: string = '';
  @Input() columnTwoDataName: string = '';
  @Input() columnThreeDataName: string = '';

  private _dataResponse: Record<string, any>[] = [];
  @Input() set dataResponse(value: Record<string, any>[] | null) {
    this._dataResponse = value ?? [];
    this.loadedData = this._dataResponse;
  }

  refreshData() {
    console.log('Clicou!');
    this.loadedData = this._dataResponse ?? [];
    console.log(this.loadedData);
  }

  ngOnInit() {
    this.refreshData();
  }

  ngOnChanges() {
    this.refreshData();
  }
}
