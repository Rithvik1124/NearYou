import React, { useState } from 'react';
import EventCard from './EventCard';
import './FindEventsPage.css';

function FindEventsPage({ events, selectedLocation, setSelectedLocation, searchQuery, setSearchQuery }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const allLocations = Array.from(new Set(
    events.flatMap(event =>
      Array.isArray(event.location) ? event.location : [event.location]
    )
  ));

  const filteredEvents = events.filter(event => {
    const locations = Array.isArray(event.location) ? event.location : [event.location];
    const matchesLocation = selectedLocation === 'All' || locations.includes(selectedLocation);

    const title = event.title || '';
    const ngo = event.ngo || '';
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ngo.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag
      ? Array.isArray(event.tags) && event.tags.includes(selectedTag)
      : true;

    return matchesLocation && matchesSearch && matchesTag;
  });

  return (
    <div className="find-events-page">
      <h1>Find Events Near You</h1>

      <input
        type="text"
        placeholder="Search by event or NGO"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="location-select"
      >
        <option value="All">All Locations</option>
        {allLocations.map((loc, index) => (
          <option key={index} value={loc}>{loc}</option>
        ))}
      </select>

      {selectedTag && (
        <div className="tag-filter-info">
          <p>Filtering by tag: <strong>{selectedTag}</strong></p>
          <button onClick={() => setSelectedTag(null)}>Clear Tag Filter</button>
        </div>
      )}

      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard key={event.id} event={event} onTagClick={setSelectedTag} />
          ))
        ) : (
          <p>No matching events found.</p>
        )}
      </div>
    </div>
  );
}

export default FindEventsPage;
