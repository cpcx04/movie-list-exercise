import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailResponse } from '../models/account-detail.interface';
import { environment } from '../../enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailResponse>{
    return this.http.get<AccountDetailResponse>(`${environment.apiBaseUrl}/account?session_id=${localStorage.getItem('session_id')}`, {
       headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    })
  }

  
}