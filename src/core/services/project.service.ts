import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Project } from '../interface/project.interface';

interface ProjectResponse {
  data: Project[];
  total: number;
  take: number;
  skip: number;
}

@Injectable()
export class ProjectService {
  private readonly url = `${environment.baseUrl}/project`;

  constructor(private http: HttpClient) {}

  public async get(take: number = 5, skip: number = 0) {
    return await this.http
      .get<ProjectResponse>(`${this.url}/?take=${take}&skip=${skip}`)
      .toPromise();
  }
  public async getProjectById(id_project: number) {
    return await this.http
      .get<Project>(`${this.url}/${id_project}`)
      .toPromise();
  }
  public async create(project: Project, users: number[]) {
    return await this.http
      .post<Project>(`${this.url}/`, {
        ...project,
        users,
      })
      .toPromise();
  }
  public async update(project: Project, users: number[]) {
    return await this.http
      .put<Project>(`${this.url}/`, {
        ...project,
        users,
      })
      .toPromise();
  }
  public async delete(id_product: number) {
    return await this.http.delete(`${this.url}/${id_product}`).toPromise();
  }
}
