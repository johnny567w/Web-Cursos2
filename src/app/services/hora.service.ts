import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraService {
  private apiUrl = 'http://worldtimeapi.org/api/timezone/Etc/UTC'; // API para hora UTC

  constructor(private http: HttpClient) { }

  obtenerHoraActual(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
