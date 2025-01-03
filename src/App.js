import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import SearchBar from './components/SearchBar';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState('');
  const [initialData, setInitialdata] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
          var url = 'http://localhost:8080/api/students';
        if(input !== ""){
          url = "" //url add krdena
        }
        console.log(input)
        const response = await axios.get(url);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students', error);
      }
    };
    fetchStudents();
  }, [input]);

  const onEdit = (student)=> {
      navigate('/edit-student')
      console.log(student)
      setInitialdata(student);
  }
  const onDelete = async (id) => {
    var answer = window.confirm('Are you sure you want to delete this student?');
    if (answer) {
      try {
        const response = await axios.delete('http://localhost:8080/api/students/{id}');
        if (response.status === 200) {
          console.log('Student deleted successfully');
          // Update the student list after deletion
          setStudents(students.filter(student => student.id !== id));
        } else {
          console.error('Failed to delete student');
        }
      } catch (error) {
        console.error('Error deleting student', error);
      }
    } else {
      console.log('Deletion cancelled');
    }
  };
  return (
  
      <div className="App">
        <header className="App-header">
          <h1>Student Management System</h1>
        </header>
         
        <Routes>
          <Route path="/" element={<StudentList students={students}  input={input} setInput={setInput} onEdit = {onEdit} onDelete={onDelete}/>} />
          <Route path="/edit-student" element={<StudentForm initialData={initialData}/>} />
          <Route path="/add-student" element={<StudentForm />} />
        </Routes>
      </div>
  
  );
}

export default App;