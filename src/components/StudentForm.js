import React, { useState, useEffect } from 'react';

const StudentForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    console.log(initialData)
    if (initialData) {
      setName(initialData.name || '');
      setAge(initialData.age || '');
      setStudentClass(initialData.studentClass || '');
      setPhoneNumber(initialData.phoneNumber || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age, studentClass: studentClass, phoneNumber });
    setName('');
    setAge('');
    setStudentClass('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <label>Class:</label>
        <input type="text" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} required />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
