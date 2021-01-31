import { Component } from '@angular/core';
import { Project } from 'src/core/interface/project.interface';
import { ProjectService } from 'src/core/services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public projects: Project[];
  title = 'lorem-frontend';

  constructor(private readonly projectService: ProjectService) {}

  ngOnInit() {
    this.retriveProjects();
  }

  public async retriveProjects() {
    this.projects = await this.projectService.get();
    console.log(this.projects);
  }
}
