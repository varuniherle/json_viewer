import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Controls = ({ onExport, theme, toggleTheme }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <ButtonGroup>
        <Button variant="success" onClick={onExport}>Export as JSON</Button>
      </ButtonGroup>
      <Button variant="primary" onClick={toggleTheme}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
      </Button>
    </div>
  );
};

export default Controls;
