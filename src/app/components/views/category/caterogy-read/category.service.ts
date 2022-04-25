import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  // findAll():Observable<Category[]> {
    // const url = `${this.baseUrl}/category`
    // return this.http.get<Category[]>(url)
  // }
}
