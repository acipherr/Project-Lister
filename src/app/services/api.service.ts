import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.github.com/users/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(userId: string) {
    return this.httpClient.get(`${this.apiUrl}${userId}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  getUserRepos(userId: string, page: number = 1, perPage: number = 10): Observable<any[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    const apiUrl = `${this.apiUrl}${userId}/repos`;
    
    return this.httpClient.get<any[]>(apiUrl, { params });
  }

  getRepoCount(userId: string): Observable<number> {
    const apiUrl = `${this.apiUrl}${userId}/repos`;
    return this.httpClient.head(apiUrl, { observe: 'response' }).pipe(
      map((response: any) => {
        const totalCountHeader = response.headers.get('Link');
        if (totalCountHeader) {
          const match = totalCountHeader.match(/page=(\d+)&per_page=\d+>; rel="last"/);
          if (match) {
            return +match[1];
          }
        }
        return 1;
      })
    );
  }
}
