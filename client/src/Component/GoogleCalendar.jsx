import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { GoogleCalendarApi } from '@react-oauth/google-calendar-api';

const GoogleCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clientId = '1047582222950-j7gh1psvto801e8ns851emvvpkna9eup.apps.googleusercontent.com';

  const onSuccess = (response) => {
    setIsLoggedIn(true);
    fetchEvents(response.access_token);
  };

  const onFailure = (error) => {
    console.error('Login Failed:', error);
  };

  const fetchEvents = async (accessToken) => {
    try {
      const calendarApi = new GoogleCalendarApi(accessToken);
      const result = await calendarApi.listEvents('vonsogwapo@gmail.com');
      setEvents(result.items);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Google Calendar Integration</h2>
        {!isLoggedIn ? (
          <GoogleLogin
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            scope="https://www.googleapis.com/auth/calendar.readonly"
          />
        ) : (
          <div>
            <h3>Upcoming Events:</h3>
            <ul>
              {events.map((event) => (
                <li key={event.id}>{event.summary} - {new Date(event.start.dateTime).toLocaleString()}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleCalendar;
