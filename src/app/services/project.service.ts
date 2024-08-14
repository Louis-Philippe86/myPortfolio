import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../models/card";
import {Project} from "../models/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:8080/api/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project> {
    return this.http.get<Project>(this.apiUrl, {responseType: "json"})
  }
  getProjectById(id : number) : Observable<Project>{
    return this.http.get<Project>(`${this.apiUrl}/${id}`,{responseType : "json"})
  }

}