import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiCustomResponse } from "../models/api-response.model";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseUrl = "http://localhost:8080/api/users";

  constructor(private http: HttpClient) {}

  createUser(data: User): Observable<ApiCustomResponse<User>> {
    return this.http.post<ApiCustomResponse<User>>(`${this.baseUrl}`, data);
  }

  getAllUsers(): Observable<ApiCustomResponse<User[]>> {
    return this.http.get<ApiCustomResponse<User[]>>(this.baseUrl);
  }

  getUserById(id: string): Observable<ApiCustomResponse<User>> {
    return this.http.get<ApiCustomResponse<User>>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: string, user: User): Observable<ApiCustomResponse<User>> {
    return this.http.put<ApiCustomResponse<User>>(
      `${this.baseUrl}/${id}`,
      user
    );
  }

  deleteUser(id: string): Observable<ApiCustomResponse<string>> {
    return this.http.delete<ApiCustomResponse<string>>(`${this.baseUrl}/${id}`);
  }
}
