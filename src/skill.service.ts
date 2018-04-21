import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Skill } from './skill';
import { MessageService } from './app/message.service';


@Injectable()
export class SkillService {

  private skillUrl = '/api/skills';  // URL to web api

  constructor(private http: Http) { }

  /** GET Skill from the server */
  getSkillAll () {
    return this.http.get('/api/skills')
    .map((res:Response) => res.json()).catch((error:any)=>Observable.throw(error.json().error || 'Bad response'));
    
  }

  /** GET Skill from the server */
  searchSkills (term: string): Observable<Skill[]> {
    return this.http.get('/api/skill/'+term)
    .map((res:Response) => res.json()).catch((error:any)=>Observable.throw(error.json().error || 'Bad response'));
    
  }

  /** GET Skill by id. Return `undefined` when id not found */
  getSkillNo404<Data>(id: number): Observable<Skill[]> {
    return this.http.get('/api/skill/'+id)
    .map((res:Response) => res.json()).catch((error:any)=>Observable.throw(error.json().error || 'Bad response'));
    
  }

  /** GET Skill by id. Will 404 if id not found */
  getSkill(id: number): Observable<Skill> {
    const url = `${this.skillUrl}/${id}`;
    return this.http.get('/api/skills')
    .map((res:Response) => res.json()).catch((error:any)=>Observable.throw(error.json().error || 'Bad response'));
    
  }

  

  //////// Save methods //////////

  /** POST: add a new Skill to the server */
  addSkill (skill: Skill){
    console.log('add skill' +skill);
    this.http.get('/api/skill/'+skill.name+'/'+skill.skill)
    .map((res:Response) => res.json()).catch((error:any)=>Observable.throw(error.json().error || 'Bad response'));
    
  }

  /** DELETE: delete the Skill from the server */
  deleteSkill (skill: Skill ){
    const id = typeof skill === 'number' ? skill : skill.id;
    const url = `${this.skillUrl}/${id}`;

    return this.http.delete(url);
  }

  

  /** PUT: update the Skill on the server */
  updateSkill (skill: Skill): Observable<any> {
    return this.http.put(this.skillUrl, skill);
  }


}
