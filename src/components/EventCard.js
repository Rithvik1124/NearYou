import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onTagClick }) => {
  return (
    <div className="event-card">
      <h2 className="event-title">{event.title}</h2>

      <p className="event-info">
        <span className="event-label">NGO:</span>
        <span className="event-value">{event.ngo || 'N/A'}</span>
      </p>

      <p className="event-info">
        <span className="event-label">Location:</span>
        <span className="event-value">
          {Array.isArray(event.location) ? event.location.join(', ') : event.location}
        </span>
      </p>

      <p className="event-info">
        <span className="event-label">Tags:</span>
        <span className="event-tags">
          {Array.isArray(event.tags)
            ? event.tags.map((tag, index) => (
                <button key={index} className="event-tag" onClick={() => onTagClick(tag)}>
                  {tag}
                </button>
              ))
            : event.tags}
        </span>
      </p>

      <p className="event-description">
        {event.description || 'No description available.'}
      </p>
    </div>
  );
};

export default EventCard;
