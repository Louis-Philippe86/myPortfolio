package com.apiportefolio.hardSkills;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hardskills")
public class HardSkillController {
    @Autowired
    private HardSkillsRepository hardSkillsRepository;

    @GetMapping
    public List<HardSkill> getAllHardSkills() {
    	
        return hardSkillsRepository.findAll();
        
    }

    @PostMapping
    public ResponseEntity<HardSkill> createHardSkills(@RequestBody HardSkill hardSkills) {
    	HardSkill savedHardSkill = hardSkillsRepository.save(hardSkills);
        return new ResponseEntity<>(savedHardSkill, HttpStatus.CREATED);
    }
}
