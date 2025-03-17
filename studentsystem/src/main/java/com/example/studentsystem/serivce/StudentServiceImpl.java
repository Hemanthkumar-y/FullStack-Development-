package com.example.studentsystem.serivce;

import com.example.studentsystem.entity.Student;
import com.example.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository studentRepository;

    @Override
    public Student SaveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getListOfStudents() {
        return studentRepository.findAll();
    }
}
