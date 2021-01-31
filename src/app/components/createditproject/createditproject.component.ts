import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/core/interface/project.interface';
import { ProjectService } from 'src/core/services/project.service';

@Component({
  selector: 'app-createditproject',
  templateUrl: './createditproject.component.html',
  styleUrls: ['./createditproject.component.css'],
})
export class CreateditprojectComponent implements OnInit {
  public title = 'New Project';

  constructor(private readonly projectService: ProjectService) {}

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
      risc: Number(risc)
    };

    await this.projectService.create(project, participants.split(','));
    alert('Project Created!');
  }
}
