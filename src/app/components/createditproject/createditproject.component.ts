import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/core/interface/project.interface';
import { ProjectService } from 'src/core/services/project.service';

@Component({
  selector: 'app-createditproject',
  templateUrl: './createditproject.component.html',
  styleUrls: ['./createditproject.component.css'],
})
export class CreateditprojectComponent implements OnInit, OnChanges {
  @Input() id_project: number = 0;
  public project: Project;
  public title: string;

  constructor(private readonly projectService: ProjectService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.title = this.id_project == 0 ? 'New Project' : 'Edit Project';
    if(this.id_project > 0) this.getProjectById(this.id_project);
  }

  ngOnInit(): void {}

  public async onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Form invalid!');
      return;
    }

    const { name, dt_begin, dt_end, price, risc, participants } = form.value;
    const project: Project = {
      name,
      dt_begin,
      dt_end,
      price,
      risc: Number(risc),
    };

    if(this.id_project == 0) await this.projectService.create(project, participants.split(','));
    else await this.projectService.update(project, participants.split(','));

    alert('Project Created!');
  }

  public async getProjectById(id_project: number) {
    this.project = await this.projectService.getProjectById(id_project);
  }
}
