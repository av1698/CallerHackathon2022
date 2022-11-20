import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { Student } from "src/app/models/Student";

@Injectable({
  providedIn: "root",
})
export class StudentCrudService {
  private url = "http://localhost:4200/";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient
  ) {}

  fetchAll(): Observable<Student[]> {
    return this.http
      .get<Student[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched groceries")),
      );
  }

  post(item: Partial<Student>): Observable<any> {
    return this.http
      .post<Partial<Student>>(this.url, item, this.httpOptions)
  }};