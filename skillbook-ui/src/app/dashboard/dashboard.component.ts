import { Component, OnInit } from '@angular/core';
import { Skill } from '../../skill';
import { SkillService } from '../../skill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  skills: Skill[] = [];

  constructor(private skillService: SkillService ) { }

  ngOnInit() {
    this.getskills();
  }

  getskills(): void {
    this.skillService.getSkillAll()
    .subscribe(
      data=> this.skills = data, 
      error => console.log("error")
    );
  }

}
