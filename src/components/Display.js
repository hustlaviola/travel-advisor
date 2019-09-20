import React from 'react';

const Display = props => {
  const { country, isoCode, rating, advice, error } = props;
  const div = (
    <div>
      {country && isoCode && (
        <p>
          Location: {country}, {isoCode}
        </p>
      )}
      {(rating || rating === 0) && <p>Rating: {rating}</p>}
      {advice && <p>Advice: {advice}</p>}
      {error && <p>{error}</p>}
    </div>
  );
  return div;
};

export default Display;
