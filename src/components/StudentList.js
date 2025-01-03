import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <table border="1">
      <thead>
        <tr>
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
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.class}</td>
            <td>{student.phoneNumber}</td>
            <td>
              <button onClick={() => onEdit(student)}>Edit</button>
              <button onClick={() => onDelete(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
