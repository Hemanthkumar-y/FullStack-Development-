package com.example.studentsystem.serivce;


import com.example.studentsystem.entity.Student;

import java.util.List;

public interface StudentService  {

    public Student SaveStudent(Student student);
    public List<Student> getListOfStudents();
}
