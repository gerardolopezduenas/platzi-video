import React from 'react';
import Media from './media';
import './playlist.css';

// Functional component
function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          return (
            <Media
              {...item}
              key={item.id}
              openModal={props.handleOpenModal}
            />
          );
        })
      }
    </div>
  );
}

export default Playlist;
