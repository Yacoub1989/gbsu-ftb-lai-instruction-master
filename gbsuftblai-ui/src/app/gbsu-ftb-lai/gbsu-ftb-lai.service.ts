import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GbsuFtbLaiService {

  constructor(private http: HttpClient) { }
  
getInputNumber(inputNumber: number): Observable<ResultDto>{
  return this.http.get<ResultDto>('http://localhost:8080/gbsu-ftb-lai/'+inputNumber);
}

}
