import React from 'react';
import { Form } from 'react-bootstrap';

const JsonInput = ({ value, onChange, theme }) => (
  <Form.Group controlId="jsonInput">
    <Form.Control
      as="textarea"
      rows={20}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}
    />
  </Form.Group>
);

export default JsonInput;
