import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import JsonInput from './components/JsonInput';
import JsonTree from './components/JsonTree';
import Controls from './components/Controls';

const App = () => {
  const [jsonText, setJsonText] = useState(`{
  "name": "Alice",
  "age": 28,
  "isStudent": false,
  "skills": ["JavaScript", "Python"],
  "address": {
    "city": "London",
    "zip": null
  }
}`);
  const [parsedJson, setParsedJson] = useState({});
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('dark');

  const handleJsonChange = (text) => {
    setJsonText(text);
    try {
      const parsed = JSON.parse(text);
      setParsedJson(parsed);
      setError('');
    } catch (e) {
      setError('Invalid JSON: ' + e.message);
    }
  };

  const handleExport = () => {
    try {
      const parsed = JSON.parse(jsonText);
      const blob = new Blob([JSON.stringify(parsed, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'data.json';
      link.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError('Export failed: Invalid JSON');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeClasses = theme === 'dark'
  ? 'bg-dark text-white'
  : 'bg-light text-dark';


const opacityStyle = {
  backgroundColor: theme === 'dark' ? 'rgba(33, 37, 41, 0.95)' : 'rgba(248, 249, 250, 0.95)',
};

  return (
    <Container fluid className={`min-vh-100 p-4 ${themeClasses}`} style={opacityStyle}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Controls onExport={handleExport} theme={theme} toggleTheme={toggleTheme} />
      <Row>
        <Col md={6}>
          <JsonInput value={jsonText} onChange={handleJsonChange} theme={theme} />
        </Col>
        <Col md={6}>
          <JsonTree data={parsedJson} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
