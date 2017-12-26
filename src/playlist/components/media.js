import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

// Pure component
class Media extends PureComponent {
  handleClick = () => {
    this.props.openModal(this.props);
  }

  render() {
    const { cover, title, author } = this.props;
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={cover}
            alt=""
            width={240}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Media;
