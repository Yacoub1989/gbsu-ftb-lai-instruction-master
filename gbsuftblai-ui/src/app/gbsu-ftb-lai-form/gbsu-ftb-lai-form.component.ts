import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-gbsu-ftb-lai-form',
  templateUrl: './gbsu-ftb-lai-form.component.html'
})
export class GbsuFtbLaiFormComponent implements OnInit {

@Input() item = ''; 
@Output() newItemEvent = new EventEmitter<string>();
@Output() submitNumberOutput = new EventEmitter<string>();

form = new FormGroup({
    inputnumber: new FormControl('', [Validators.required])
   
  });
  
  constructor() {
  }

  ngOnInit(): void {
  }

  submitNumber(value: string){
  this.submitNumberOutput.emit(value);
  }
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }
   
}
