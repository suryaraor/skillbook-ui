package com.dstsystems.skillbook.model;

import javax.persistence.*;

/**
 * Created by SM on 4/12/18.
 */
@Entity
@Table(name = "skillbook")
public class SkillBook {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String name;

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getPoints() {
        return points;
    }

    public void setPoints(String points) {
        this.points = points;
    }

    private String skill;
    private String points;

    public SkillBook() {
        super();
    }
    public SkillBook(Long id, String name, String skill, String points) {
        super();
        this.id = id;
        this.name = name;
        this.skill = skill;
        this.points = points;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

}