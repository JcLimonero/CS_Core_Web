import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// API
import { AppSettings } from 'src/app/settings';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = AppSettings.URIAccessManagement;

  private options;

  constructor(
    private httpClient: HttpClient    
    
  ) {}

  /**
   * Get a list of objects/data from the API
   * @param endpoint Object/data name
   * @param queryParams  GET parameters to be included in the query
   */
  public list(endpoint: string, queryParams?: any): Observable<any> {
    this.options = {
      headers: new HttpHeaders()
    };
    let queryParamsString = '';
    if (queryParams) {
      queryParamsString = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
    }

     return this.httpClient
      .get(`${this.url}/${endpoint}?${queryParamsString}`, this.options)
      .pipe(map((data: any) => {    
        return data;
      }), catchError(err => {
          console.error(err);
        return throwError(err.error);
      })); 
  }

  /**
   * Get single object/data from API
   * @param endpoint Object/data name
   * @param id Object/data identifier
   */
  public get(endpoint: string, id: string): Observable<any> {
    this.options = {
      headers: new HttpHeaders()
      // .set('Authorization', `Bearer ${this.session.getItem('token')}`)
    };
    return this.httpClient
      .get(`${this.url}/${endpoint}/${id}`, this.options)
      .pipe(map((data: any) => {
        return data;
      }), catchError(err => throwError(err.error)));
  }
  
  /**
   * Create an object/data using API
   * @param endpoint Object/data name
   * @param object Object/data as a JSON {key:value}
   */
  public create(endpoint: string, objectValue: any): Observable<any> {
    return this.httpClient
      .post(`${this.url}/${endpoint}`, objectValue)
      .pipe(map((data: any) => {
        return data;
      }), catchError(err => throwError(err.error)));
  }
  
  /**
   * Update an object/data using API
   * @param endpoint Object/data name
   * @param id Object/data identifier
   * @param object Object/data as a JSON {key:value}
   */
  public update(endpoint: string, id: string, objectValue: any): Observable<any> {
    return this.httpClient
      .put(`${this.url}/${endpoint}/${id}`, objectValue)
      .pipe(map((data: any) => {        
        return data;
      }), catchError(err => throwError(err.error)));
  }

  /**
   * Delete an object/data from API
   * @param endpoint Object/data name
   * @param id Object/data identifier
   */
  public delete(endpoint: string, id: string): Observable<any> {
    return this.httpClient
      .delete(`${this.url}/${endpoint}/${id}`)
      .pipe(map((data: any) => {        
        return data;
      }), catchError(err => throwError(err.error)));
  }

}
