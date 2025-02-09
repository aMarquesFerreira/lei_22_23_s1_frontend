import { createContext, useEffect, useState } from 'react';
import API_BASE_URL from '../Config/config';
import ROLES from '../Config/roles'
import { getMe } from '../Services/User'
import axios from 'axios';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLogin();
  }, []);

  const getLogin = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    setLoading(false);
  };

  const valUser = async () => {
    const valueToken = localStorage.getItem('token');
    const headers = {
      headers: {
        Authorization: 'Bearer ' + valueToken
      }
    };

    getMe()
      .then(() => {
        return true;
      })
      .catch((err) => {
        localStorage.removeItem('token');
        setAuthenticated(false);
        return false;
      });
  };

  function signIn(sit) {
    setAuthenticated(sit);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.clear();
    api.defaults.headers.Authorization = undefined;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Context.Provider value={{ authenticated, signIn, handleLogout, valUser }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
