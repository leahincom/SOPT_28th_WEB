import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import getUserData from './lib/api';

function App() {
  const [userData, setUserData] = useState({
    status: "idle",
    data: null,
  });

  const getUser = async (id) => {
    setUserData({ ...userData, status: "pending" });
    try {
      const data = await getUserData(id);
      if (data === null) throw Error;
      setUserData({ status: "resolved", data: data});
    } catch (e) {
      setUserData({ status: "rejected", data: null});
    }
  }

  return (
    <>
      <SearchBar getUser={getUser} />
      <Result userData={userData} />
    </>
  );
}

export default App;
