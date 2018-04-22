import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './app/dashboard/dashboard.component'
import {SkillSearchComponent} from './app/skill-search/skill-search.component'
import {SkillDetailComponent} from './app/skill-detail/skill-detail.component'
import {SkillComponent} from './app/skill/skill.component'
const appRoutes: Routes = [{
    path: 'skills',
    component: SkillComponent
 }, {
     path: 'skills/detail',
     component: SkillDetailComponent
 }, {
     path:'skills/search',
     component: SkillSearchComponent

 }, {
    path: '',
    component: SkillComponent
 }];

 export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);