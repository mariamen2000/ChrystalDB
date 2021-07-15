import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { Soldprod } from 'src/app/models/soldprod';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private _dbService: DashboardService) { }

  soldprods: Soldprod[] = [
    { code: "7591818026366", description: "MIOVIT AMP 3 ML X 3 ", mark: "LABORATORIOS COFASA, S.A.", model: "COMPLEJO VIT B", num: 3, stock: 4, days: 40, cost: 16.41, tax: 0.00, sales: 24.63, utility: "50.09%" },
    { code: "7591585279460", description: "AZITROMICINA COMPDO 500MG X 5 GENVEN", mark: "LABORATORIOS LETI, S.A.V.    ", model: "AZITROMICINA", num: 6, stock: 6, days: 30, cost: 16.36, tax: 0.00, sales: 24.54, utility: "50.00%" },
    { code: "7707264579015", description: "CEFTRIAXONA  AMP 1GR VITALIS", mark: "", model: "CEFTRIAXONA", num: 9, stock: 0, days: 0, cost: 4.44, tax: 0.00, sales: 19.98, utility: "350.00%" },
    { code: "7591619518695", description: "PLIDAN COMPUESTO COMPDO X 10", mark: "MEGALABS VZL, C.A.       ", model: "PROPINOX - LISINA", num: 3, stock: 2, days: 20, cost: 8.74, tax: 0.00, sales: 19.65, utility: "124.83%" },
    { code: "8906121690002", description: "AMOXICILINA 500 MG X 10 CAP DAC", mark: "CASA DE REPRESENTACIONES DAC 55,C.A", model: "AMOXICILINA", num: 5, stock: 0, days: 0, cost: 11.52, tax: 0.00, sales: 17.30, utility: "50.17%" },
    { code: "7591585114280", description: "AXOKINE COMR 400GR X 5", mark: "LABORATORIOS LETI, S.A.V.    ", model: "MOXIFLOXACINO", num: 1, stock: 0, days: 0, cost: 11.27, tax: 0.00, sales: 16.94, utility: "50.04%" },
  ];

  ngOnInit(): void {
  }

}
