const getInfoOnMeetings = async () => {
  'use server';
  const response = await fetch('https://jascha.vercel.app/api/meetings', {
    method: 'POST',
  });
  const infoOnMeetings = await response.json();
  return infoOnMeetings;
};

export default getInfoOnMeetings;
