import React, { Component } from 'react';
import './NewsItemStyles.css'
export default class NewsItem extends Component {
  render() {
    let {
      title,
      descriptiveText,
      urrl,
      imageUrl,
      author,
      date,
      source,
    } = this.props;

    return (
      <div className="res justify-content-center mb-4" style={{ width: '18rem' }}>
        <div className="card h-100 md-2 shadow-sm mx-3">
          <div className="position-relative">
            <img
              src={
                imageUrl && imageUrl !== "#"
                  ? imageUrl
                  : "http://images5.fanpop.com/image/photos/28000000/randomised-random-28065165-1024-819.jpg"
              }
              className="card-img-top img-fluid"
              alt={title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <span
              className="badge bg-danger position-absolute"
              style={{ top: '10px', left: '10px' }}
            >
              {source}
            </span>
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-truncate" title={title}>
              {title}
            </h5>
            <p className="card-text text-truncate" title={descriptiveText}>
              {descriptiveText}
            </p>
            <p className="text-muted small mb-1">
              <strong>Written By:</strong> {!author ? 'Staff' : author}
            </p>
            <p className="text-muted small mb-3">
              <strong>Published At:</strong> {new Date(date).toGMTString()}
            </p>
            <a
              href={urrl}
              className="btn btn-dark mt-auto align-self-center"
              target="_blank"
              rel="noopener noreferrer"
            >Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
