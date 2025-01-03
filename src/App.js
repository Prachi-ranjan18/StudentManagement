import './App.css';
import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import SearchBar from './components/SearchBar';
import axios from 'axios'

function App() {
  const [students, setStudents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students', error);
      }
    };
    fetchStudents();
  }, []);
  const searchStudent = async (name) => {
    try {
      const response = await axios.get(`/students/${name}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching student', error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management System</h1>
      </header>
      {/* Search Bar */}
      <SearchBar onSearch={searchStudent} />

      {/* Student List */}
      <h2>All Students</h2>
      <StudentList students={students} />
      {/* <StudentList students={searchResults.length > 0 ? searchResults : students} /> */}
      <StudentForm />
      {/* <StudentList /> */}
      <SearchBar />
    </div>
  );
}

export default App;
