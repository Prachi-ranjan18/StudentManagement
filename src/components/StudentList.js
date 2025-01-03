import React, {useState} from 'react';
import SearchBar from './SearchBar';

const StudentList = ({ students, onEdit, onDelete, input, setInput }) => {
  
  return (
    <>
    <SearchBar students = {students} input={input} setInput={setInput}/>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Class</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.studentClass}</td>
            <td>{student.phoneNumber}</td>
            <td>
              <button onClick={() => onEdit(student)}>Edit</button>
              <button onClick={() => onDelete(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default StudentList;
