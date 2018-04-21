import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkillService } from '../../skill.service';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {

  @Input() skill: Skill;

  constructor(
    private route: ActivatedRoute,
    private SkillService: SkillService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSkill(); 
  }

  getSkill(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.SkillService.getSkill(id)
      .subscribe(Skill => this.skill = Skill);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.SkillService.updateSkill(this.skill)
      .subscribe(() => this.goBack());
  }

}
