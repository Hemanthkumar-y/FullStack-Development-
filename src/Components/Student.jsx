import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { useState,useEffect } from "react";



export default function Student() {
    const PaperStyle={Padding:'50px 20px', width:600 , margin:"20px auto"};
    const[name,setName]=useState('');
    const[address,setAddress]=useState('');
    const[students,setStudents]= useState([]);

    const handleClick=(e)=>{
        e.preventDefault();
        const student = {name,address}
        console.log(student);
        fetch("http://localhost:8030/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
        }).then(()=>{
          console.log("New Student is add");
        })
    }

  useEffect(()=> {
    fetch("http://localhost:8030/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
  },[])
        

  return (
    <Container>
        <Paper elevation={3} style={PaperStyle}>
            <h1 style={{color:"blue"}}>
                <u>Add Student</u>
            </h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" width
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Studnet Adddress" variant="outlined" width
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
      />
        <br></br>
      <Button variant="contained" disableElevation onClick={handleClick}>
            Submit
      </Button>
    </Box>
     </Paper>

     <Paper elevation={3} style={PaperStyle}>

        {students.map(student =>(
          <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
              Id:{student.id}<br/>
              Name:{student.name}<br/>
              Address:{student.address}
            </Paper>


        ))
        }
     </Paper>
    </Container>
  );
}
