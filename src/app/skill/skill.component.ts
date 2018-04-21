import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../skill.service';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Skill[];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    
    this.skillService.getSkillAll()
    .subscribe(
      data=> this.skills = data, 
      error => console.log("error")
    );
    
  }

  add(name: string, skill:string): void {
    name = name.trim();
    skill = skill.trim();
    var points = 1;
    if (!name) { return; }
    this.skillService.addSkill({ name, skill, points } as Skill);

  //  this.skills.push(skill);
      
  }

  addPoint(Skill: Skill): void {
   var currentSkillCount = Skill.points;
   if(currentSkillCount == null)
   {
    currentSkillCount = 0;
   }else{
    Skill.points = +currentSkillCount+1;
    //this.skillService.updateSkill(Skill).subscribe();
   }
    
  }
  deletePoint(Skill: Skill): void {
    
    Skill.points = Skill.points-1;
    if( Skill.points <0)
    {
       Skill.points = 0;
    }
    this.skillService.updateSkill(Skill).subscribe();
  }

  searchSkill(term:string): void {
    console.log('searchSkill called with search term : '+term);
    this.skillService.searchSkills(term)
    .subscribe(Skill => this.skills = Skill,
      error => console.log("error"));
  }


}
