'use client';

import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = ({
  collections,
  selectedCollections,
  setSelectedCollections,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleCollection = (collection) => {
    setSelectedCollections((prevSelectedCollections) => {
      const isSelected = prevSelectedCollections.includes(collection.id);

      if (isSelected) {
        return prevSelectedCollections.filter((c) => c !== collection.id);
      } else {
        return [...prevSelectedCollections, collection.id];
      }
    });
  };

  return (
    <div className="text-midnight">
      <div className="flex">
        <span
          className="cursor-pointer pr-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FontAwesomeIcon
            icon={isExpanded ? faChevronUp : faChevronDown}
            className="h-4 w-4 mr-1"
          />
        </span>
				<span 
					className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
				>
					Filter by Collection:
				</span>
      </div>
      <div className={isExpanded ? 'pt-3 border-t-solid border-t border-midnight' : ''}>
        {isExpanded &&
          collections.map((collection) => (
            <label
              key={collection.id}
              className="inline-flex items-center text-sm font-medium pr-3"
            >
              <input
                type="checkbox"
                className="form-checkbox rounded text-indigo-600 focus:ring-indigo-500"
                checked={selectedCollections.includes(collection.id)}
                onChange={() => handleToggleCollection(collection)}
              />
              <span className="ml-2">{collection.title}</span>
            </label>
          ))}
      </div>
    </div>
  );
};

export default Filter;
