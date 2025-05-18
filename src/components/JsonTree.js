import React, { useState } from 'react';

const JsonTree = ({ data, label = 'root' }) => {
  const [collapsed, setCollapsed] = useState(false);

  if (typeof data !== 'object' || data === null) {
    return (
      <div className="ms-3">
        <strong>{label}:</strong> <span className="text-info">{String(data)}</span>
      </div>
    );
  }

  const isArray = Array.isArray(data);
  const entries = Object.entries(data);

  return (
    <div className="ms-3">
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="cursor-pointer text-warning"
        style={{ cursor: 'pointer' }}
      >
        ▶ {label} {collapsed ? '[+]' : '[-]'}
      </div>
      {!collapsed && (
        <div className="ms-4">
          {entries.map(([key, value], index) => (
            <JsonTree key={index} data={value} label={isArray ? index : key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JsonTree;
