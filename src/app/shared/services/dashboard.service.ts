import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _salesUrl = "http://localhost:3000/api/sales"
  private _financeUrl = "http://localhost:3000/api/finance"
  private _customersUrl = "http://localhost:3000/api/customers"
  private _inventoryUrl = "http://localhost:3000/api/inventory"

  constructor(private http: HttpClient) { }

  getSales() {
    return this.http.get<any>(this._salesUrl)
  }

  getFinance() {
    return this.http.get<any>(this._financeUrl)
  }

  getCustomers() {
    return this.http.get<any>(this._customersUrl)
  }

  getInventory() {
    return this.http.get<any>(this._inventoryUrl)
  }

}
