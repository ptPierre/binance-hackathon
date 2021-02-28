import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NinjaButton from '../button/NinjaButton';

export default function Login() {
  const [authToken, setAuthToken] = useState();
  const { state, code, scope } = Object.fromEntries(new URLSearchParams(useLocation().search));
  console.log('QUERY code: ', code);
  console.log('QUERY token: ', authToken);

  useEffect(() => {
    const reqParams = {
      client_id: process.env.REACT_APP_STRAVA_CLIENT_ID,
      client_secret: process.env.REACT_APP_STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    };
    const fetchStrava = async () => {
      if (reqParams.code) {
        try {
          const response = await fetch(
            process.env.REACT_APP_STRAVA_API_TOKEN_URL,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost',
              },
              body: JSON.stringify(reqParams),
            },
          ).then((res) => res.json());
          setAuthToken({
            access_token: response.access_token,
            refresh_token: response.refresh_token
          });
        } catch(err) {
          console.error('ERR: ', err);
        }
      }
    }
    fetchStrava();
  },[code]);

  return (
    code ? (
      <p>state: {state}<br />code: {code}<br />scope: {scope}</p>
    ) : (
      <div>
        <NinjaButton text="Login with Strava" onClick={() => ''} />
        <Link
          to="/auth"
          style={{
            margin: '50px',
            padding: '16px 24px',
            backgroundColor: '#030086',
            borderRadius: '3px',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Sign in
        </Link>
      </div>
    )
  );
}
