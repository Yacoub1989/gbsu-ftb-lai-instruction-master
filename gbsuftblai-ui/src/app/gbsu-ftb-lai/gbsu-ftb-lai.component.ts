import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GbsuFtbLaiService } from '../gbsu-ftb-lai.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gbsu-ftb-lai',
  templateUrl: './gbsu-ftb-lai.component.html'
})
export class GbsuFtbLaiComponent implements OnInit {

  itemresult: Array<NumberConverted> = [];
  
  constructor(private http: HttpClient, public gbsuservice: GbsuFtbLaiService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  convertNumber(newItem: number){
  this.getResult(newItem);
  }
  
  getInputNumber(inputNumber: number): Observable<ResultDto>{
  return this.http.get<ResultDto>('http://localhost:8080/gbsu-ftb-lai/'+inputNumber);
}


public getResult(inputnumber: number) {
    this.getInputNumber(inputnumber)
      .subscribe({
        next: (data) => {
	var numberConverted: NumberConverted = { numberToConvert: inputnumber, result: data.result };
          this.itemresult.push(numberConverted);
	  console.log(numberConverted);
        },
        error: (e) => console.error(e)
      });
  }

}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}

export class ResultDto {
  result: string;
}