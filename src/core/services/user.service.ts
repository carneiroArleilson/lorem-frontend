import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { User } from '../interface/user.interface';

@Injectable()
export class UserService {
  private readonly url = `${environment.baseUrl}/user`;

  constructor(private http: HttpClient) {}

  public async get(take: number = 5, skip: number = 0) {
    return await this.http
      .get<User[]>(`${this.url}/?take=${take}&skip=${skip}`)
      .toPromise();
  }
  public async create(user: User) {
    return await this.http.post<User>(`${this.url}/`, user).toPromise();
  }
}
