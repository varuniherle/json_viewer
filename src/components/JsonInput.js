import React from 'react';
import { Form } from 'react-bootstrap';
import './JsonInput.css'; // 👈 Import the CSS file

const JsonInput = ({ value, onChange, theme }) => {
  const inputStyles = {
    // backgroundColor: theme === 'dark' ? '#000000' : '#6f777c',
    // color: theme === 'dark' ? '#11809f' : '#212529',
    // borderColor: theme === 'dark' ? '#444' : '#ccc',
    fontFamily: '"Courier New", Courier, monospace',
  };

  const placeholderClass = theme === 'dark' ? 'placeholder-dark' : 'placeholder-light';

  return (
    <Form.Group controlId="jsonInput">
      <Form.Control
        as="textarea"
        rows={20}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste JSON Here"
        style={inputStyles}
        className={placeholderClass}
      />
    </Form.Group>
  );
};

export default JsonInput;
