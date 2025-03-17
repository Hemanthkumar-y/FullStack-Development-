package com.example.studentsystem.controller;

import com.example.studentsystem.entity.Student;
import com.example.studentsystem.serivce.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin
public class Controller {

    @Autowired
    StudentService studentService;



    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Student student){
        studentService.SaveStudent(student);
        return new ResponseEntity<>("New Student is Add", HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Student>> getAllStudents(){
        List<Student> studentsList = studentService.getListOfStudents();
        if(studentsList.size()==0) {
            return new ResponseEntity<>(studentsList, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(studentsList,HttpStatus.OK);
    }

}
