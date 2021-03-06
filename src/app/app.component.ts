import { Component } from '@angular/core';
import { DEFAULT_RISC } from 'src/core/constants/risc.constants';
import { Participant } from 'src/core/interface/participant.interface';
import { Project } from 'src/core/interface/project.interface';
import { User } from 'src/core/interface/user.interface';
import { ProjectService } from 'src/core/services/project.service';

interface Pagination {
  total: number;
  current: number;
  each: number[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public pagination: Pagination;
  public projects: Project[];
  public modal_project: number;
  public title = 'lorem-frontend';

  constructor(private readonly projectService: ProjectService) {
    this.pagination = {
      total: 0,
      current: 1,
      each: [],
    };
    this.modal_project = 0;
  }

  ngOnInit() {
    this.retriveProjects();
  }

  public async retriveProjects(take: number = 5, skip: number = 0) {
    const { data, total } = await this.projectService.get(take, skip);

    const eachPage = Math.ceil(total / take);

    this.projects = data;
    this.pagination.total = total;
    this.pagination.each = Array.from({ length: eachPage }, (_, i) => i + 1);
  }

  public async setPagination(page: number) {
    const take = 5;
    const skip = take * (page - 1);

    this.pagination.current = page;
    this.retriveProjects(take, skip);
  }

  public getRisc(id_risc: number) {
    return DEFAULT_RISC.find((risc) => risc.id == id_risc)?.description;
  }

  public getUsers(participants: Participant[]) {
    let result = '';

    participants.map(
      (participant, index) =>
        (result += ` ${participant.user.name}${
          index < participants.length - 1 ? ',' : ''
        }`)
    );

    return result;
  }

  public nextPage() {
    this.setPagination(this.pagination.current + 1);
  }

  public previousPage() {
    this.setPagination(this.pagination.current - 1);
  }

  public async deleteProject(id_project: number) {
    const isToDelete = confirm('Are you sure to delete this project?');

    if(!isToDelete) return;

    await this.projectService.delete(id_project);
    alert('Project deleted!');
    this.setPagination(this.pagination.current);
  }

  public setModal(id_project: number) {
    this.modal_project = id_project;
  }

  public investiment(price: number, risc: number) {
    try {
      const investmentValue = Number(prompt('Insert investment value:'));

      if(!investmentValue) throw new Error();

      if(investmentValue < price) {
        alert('Investment value is lower then project price!');
        return;
      }

      const value = risc == 0 ? investmentValue * (5 / 100) : risc == 1 ? investmentValue * (10 / 100) : investmentValue * (20 / 100);

      alert(`Return value from investment is ${value}`);
    } catch (error) {
      alert('Investment value is incorrect. Try again!');
    }
  }
}
