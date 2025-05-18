import React, { useState } from 'react';

const JsonTree = ({ data, label = 'root' }) => {
  const [collapsed, setCollapsed] = useState(false);

  if (typeof data !== 'object' || data === null) {
    return (
      <div className="ms-3 text-dark">
        <strong>{label}:</strong> <span >{String(data)}</span>
      </div>
    );
  }

  const isArray = Array.isArray(data);
  const entries = Object.entries(data);

  return (
    <div className="ms-3 rounded p-2">
      {label !== 'root' && (
        <div
          onClick={() => setCollapsed(!collapsed)}
          className="cursor-pointer text-dark fw-semibold mb-1"
          style={{ cursor: 'pointer' }}
        >
          ▶ {label} {collapsed ? '[+]' : '[-]'}
        </div>
      )}
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

export default function JsonTreeContainer({ data }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        borderRadius: 4,
        height: 'calc(1.5em * 20 + 16px)', // 20 rows * line height + padding
        overflowY: 'auto',
        whiteSpace: 'pre-wrap',
      }}
    >
      <JsonTree data={data} />
    </div>
  );
}
