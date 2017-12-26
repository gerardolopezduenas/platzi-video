import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';

function Volume(props) {
  return (
    <button className="Volume">
      <div onClick={props.handleMuteVolume}>
        <VolumeIcon
          color="white"
          size={20}
        />
      </div>
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          onChange={props.handleVolumeChange}
          value={props.value}
        />
      </div>
    </button>
  );
}

export default Volume;
