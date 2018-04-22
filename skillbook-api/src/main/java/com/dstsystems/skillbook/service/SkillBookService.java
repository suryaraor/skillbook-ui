package com.dstsystems.skillbook.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dstsystems.skillbook.model.SkillBook;
import com.dstsystems.skillbook.repository.SkillBookRepository;

/**
 * Created by SM on 4/12/18.
 */
@Service
public class SkillBookService {
    @Autowired
    SkillBookRepository skillBookRespository;
    @Transactional
    public List<SkillBook> searchSkill(String name) {
    	 Stream<SkillBook> findBySkill = skillBookRespository.findBySkill(name);
    	 List<SkillBook> targetLongList = new ArrayList<>();
    	 findBySkill.forEach(targetLongList::add);
        return targetLongList;

    }

    public List<SkillBook> getSkills() {
        return skillBookRespository.findAll();
    }
    
    public void addSkill(SkillBook skill) {
        skillBookRespository.save(skill);
        System.out.println("save successful");
    }
}
