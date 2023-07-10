



import React, { useState } from 'react';
import axios from 'axios';

const AddAdvocateForm = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8000/advocates/', { username, bio });
      alert('Advocate added successfully');
      // Optionally, perform additional actions or update the UI
    } catch (error) {
      console.error(error);
      alert('Error adding advocate');
      // Handle error and update the UI accordingly
    }

    // Reset the form fields
    setUsername('');
    setBio('');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor="username" style={labelStyle}>Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />

      <label htmlFor="bio" style={labelStyle}>Bio:</label>
      <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} style={textareaStyle} />

      <button type="submit" style={buttonStyle}>Add Advocate</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  padding:'50px',
};

const labelStyle = {
  fontWeight: 'bold',
  marginBottom: '5px',
};

const inputStyle = {
  width: '300px',
  padding: '5px',
  marginBottom: '10px',
};

const textareaStyle = {
  width: '300px',
  height: '100px',
  padding: '5px',
  marginBottom: '10px',
};

const buttonStyle = {
  padding: '5px 10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default AddAdvocateForm;
