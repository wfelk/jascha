import React, { useState, useEffect, use } from 'react';

const useBelowBreakpointCheck = (breakpoint: number = 1024): Boolean => {
  const [isBelowThreshold, setIsBelowThreshold] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowThreshold(window.innerWidth < breakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isBelowThreshold ? true : false;
};

export default useBelowBreakpointCheck;
