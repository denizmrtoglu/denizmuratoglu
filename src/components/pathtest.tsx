import React from 'react';

const steps = [
  // Adımlar ve her bir adımın grid'deki konumu
  { name: 'Step 1', gridRow: 1, gridColumn: 1 },
  { name: 'Step 2', gridRow: 1, gridColumn: 2 },
  { name: 'Step 3', gridRow: 2, gridColumn: 2 },
  { name: 'Step 4', gridRow: 2, gridColumn: 3 }
  // Diğer adımlar ...
];

const NPathTimeline = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: 'minmax(100px, auto)'
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              gridColumn: step.gridColumn,
              gridRow: step.gridRow,
              border: '1px solid black',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto'
            }}
          >
            {step.name}
          </div>
        ))}
        {/* Yolun çizileceği pseudo-elements */}
        <div
          className="path"
          style={{
            gridColumn: '1 / span 3',
            gridRow: '1 / span 2',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              width: '100%',
              height: '2px',
              backgroundColor: 'black',
              zIndex: '-1'
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              height: '100%',
              width: '2px',
              backgroundColor: 'black',
              zIndex: '-1'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NPathTimeline;
