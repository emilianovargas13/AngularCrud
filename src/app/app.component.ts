import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'AngularCrud';


  employees = [
    { name: "John", position: "Manager" }
    , { name: "Emiliano", position: "Developer" }
    , { name: "Raul", position: "Tester" }
  ];

model:any={};


  addEmployee():void{
    this.employees.push(this.model);
    
  }

  deleteEmployee():void{
     }

  editEmployee():void{ 

  }

  updateEmployee():void{

  }


}
