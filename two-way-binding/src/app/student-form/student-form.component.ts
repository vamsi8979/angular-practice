import { Component } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  name:string='John Doe';
  age:number=30;
  email:string='John@gmail.com';
  disableButton:boolean=false;
  errorMessage:string='';
  onAgeChange() {
    this.disableButton = this.age > 50;
    this.disableButton? this.errorMessage='age must not be greater than 50' : this.errorMessage='';
  }
  onSubmit(){
    alert(' Form Submitted : \n'+ ' Name : '+this.name+ '\n' + ' Age: ' + this.age +'\n' + ' Email : '+ this.email );
  }
}
