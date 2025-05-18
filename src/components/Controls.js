import React from 'react';
import { ButtonGroup, Form } from 'react-bootstrap';
import { BsSun, BsMoon, BsDownload } from 'react-icons/bs';

const Controls = ({ onExport, theme, toggleTheme }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 px-2">
      <ButtonGroup>
        <button className="btn btn-success d-flex align-items-center gap-2" onClick={onExport}>
          <BsDownload /> Export JSON
        </button>
      </ButtonGroup>

      <Form.Switch 
        id="custom-switch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        label={theme === 'dark' ? <><BsMoon /> Dark</> : <><BsSun /> Light</>}
        className="fs-5 text-info"
      />
    </div>
  );
};

export default Controls;
