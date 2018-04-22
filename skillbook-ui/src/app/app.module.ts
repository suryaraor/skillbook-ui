import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { routing } from '../app.routing';

import { FormsModule }    from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SkillSearchComponent } from './skill-search/skill-search.component';
import { SkillComponent } from './skill/skill.component';

import { SkillService }          from '../skill.service';
import { MessageService }       from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SkillDetailComponent,
    SkillSearchComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ SkillService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
