package com.dstsystems.skillbook.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dstsystems.skillbook.model.SkillBook;
import com.dstsystems.skillbook.service.SkillBookService;

/**
 * Created by SM on 4/12/18.
 */
@RestController
public class SkillBookController {

    @Autowired
    SkillBookService skillBookService;

    @RequestMapping(value = "api/skill/{name}", method = RequestMethod.GET)
    Collection<SkillBook> getSkill(@PathVariable String name) {
    	return skillBookService.searchSkill(name);
    }
    
    @RequestMapping(value = "api/skill/{name}/{skill}", method = RequestMethod.GET)
    Collection<SkillBook> addNewSkill(@PathVariable String name, @PathVariable String skill) {
    	SkillBook newSkill = new SkillBook();
    	newSkill.setName(name);
    	newSkill.setSkill(skill);
    	newSkill.setPoints("1");
    	skillBookService.addSkill(newSkill);
    	return skillBookService.getSkills();
    }

    @RequestMapping(value = "api/skills", method = RequestMethod.GET)
    Collection<SkillBook> getSkills() {
        return skillBookService.getSkills();
    }
   
}
