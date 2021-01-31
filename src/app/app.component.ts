import { Component } from '@angular/core';
import { Project } from 'src/core/interface/project.interface';
import { ProjectService } from 'src/core/services/project.service';

interface Pagination {
  total: number;
  current: number;
  each: number[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pagination: Pagination;
  public projects: Project[];
  public title = 'lorem-frontend';

  constructor(private readonly projectService: ProjectService) {
    this.pagination = {
      total: 0,
      current: 1,
      each: []
    };
  }

  ngOnInit() {
    this.retriveProjects();
  }

  public async retriveProjects(take: number = 5, skip: number = 0) {
    const { data, total } = await this.projectService.get(take, skip);

    const eachPage = Math.ceil(total/take);

    this.projects = data;
    this.pagination.total = total;
    this.pagination.each = Array.from({length: eachPage}, (_, i) => i + 1);
  }

  public async setPagination(page: number) {
    const take = 5;
    const skip = take * (page - 1);

    this.pagination.current = page;
    this.retriveProjects(take, skip);
  }
}
