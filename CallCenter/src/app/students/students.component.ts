import { Component, OnInit } from '@angular/core';
import { Student } from "src/app/models/Student";

import { StudentCrudService } from "src/app/services/student-crud-service"
import { Observable } from 'rxjs';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students$ : Observable<Student[]>;


  constructor(private StudentCrudService: StudentCrudService) {
    this.students$ = this.fetchAll();

   }

   fetchAll(): Observable<Student[]>{
    return this.StudentCrudService.fetchAll();
   }

  ngOnInit(): void {
    this.students$ = this.fetchAll();
  }

}
