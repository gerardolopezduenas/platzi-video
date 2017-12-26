import React from 'react';
import './spinner.css';

function Spinner(props) {
  if (!props.active) return null;
  return (
    <div className="Spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  );
}

export default Spinner;
