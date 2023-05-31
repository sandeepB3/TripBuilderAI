import React from 'react';



function PointsList({points}) {
  return (
    <ul>
      {points.map(point => (
        <li key={point}>{`${point}`}</li>
      ))}
    </ul>
  );
}

export default PointsList;