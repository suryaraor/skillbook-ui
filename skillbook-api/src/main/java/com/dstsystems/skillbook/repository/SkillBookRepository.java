package com.dstsystems.skillbook.repository;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dstsystems.skillbook.model.SkillBook;

/**
 * Created by SM on 4/12/18.
 */
@Repository
public interface SkillBookRepository extends CrudRepository<SkillBook, Long>
{

        List<SkillBook> findByName(String name);


        List<SkillBook> findAll();
        
        @Query("select skill from SkillBook skill where skill.skill like %:skill%")
        Stream<SkillBook> findBySkill(@Param("skill") String skill);
        
}

