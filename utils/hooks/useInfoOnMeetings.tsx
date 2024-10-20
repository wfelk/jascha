import React, { useEffect, useState } from 'react';

const useInfoOnMeetings = () => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    const fetchInfoOnMeetings = async () => {
      let notionData = null;

      try {
        const response = await fetch('http://localhost:3000/api/notion', {
          method: 'POST',
        });

        notionData = await response.json();
        setRes(notionData.results);
        console.log('🟣 Meetings', notionData.results);
      } catch (error) {
        console.error(
          'An error has occurred while trying to fetch information on the meetings from Notion.',
          error
        );
      }
    };
    fetchInfoOnMeetings();
  }, []);
  return res;
};

export default useInfoOnMeetings;
