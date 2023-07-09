import { Component } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  name:string='John Doe';
  age:string='30';
  email:string='John@gmail.com';

  setName(name:any){
    this.name = name.target.value;
  }
  setAge(age:any){
    this.age = age.target.value;
  }
  setEmail(email:any){
    this.email = email.target.value;
  }
  onSubmit(){
    alert(' Form Submitted : \n'+ ' Name : '+this.name+ '\n' + ' Age: ' + this.age +'\n' + ' Email : '+ this.email );
  }
}
