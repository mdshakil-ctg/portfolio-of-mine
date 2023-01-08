import React, { useEffect, useState } from 'react';

const TimeoutExample = () => {
  const [view, setView] = useState(false);

   useEffect(() => {
    const timer = setTimeout(() => setView(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='text-2xl text-white my-6 text'>
      Count: {`${view}`}
    </div>
  );
};

export default TimeoutExample;