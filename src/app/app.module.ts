import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectService } from 'src/core/services/project.service';
import { UserService } from 'src/core/services/user.service';
import { CreateditprojectComponent } from './components/createditproject/createditproject.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateditprojectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProjectService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
