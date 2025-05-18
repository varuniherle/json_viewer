import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import JsonInput from './components/JsonInput';
import JsonTree from './components/JsonTree';
import Controls from './components/Controls';

const App = () => {
  const [jsonText, setJsonText] = useState();
  const [parsedJson, setParsedJson] = useState({});
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('dark');

  const handleJsonChange = (text) => {
    setJsonText(text);
    if (!text.trim()) {
      setParsedJson(null);
      setError('');
      return;
    }
  
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
  const themeStyles = {
    dark: {
      backgroundColor: 'rgba(0,0,0,0.95)',
      color: '#aad2ff',
    },
    light: {
      backgroundColor: 'rgba(240,240,240,0.9)',
      color: '#212529',
    }
  };
  
  
  const currentThemeStyle = themeStyles[theme];
  

  return (
    <Container fluid
    className="min-vh-100 p-4"
    style={{
      ...currentThemeStyle,
      fontFamily: '"Courier New", Courier, monospace',
      transition: 'all 0.3s ease-in-out'
    }} 
    >
      <h1>Json Viewer</h1>
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
      <p className="p-3">Note: This is a simple JSON viewer.  It is not a full JSON editor.It is not optimized for mobile devices.</p>
    </Container>
  );
};

export default App;
