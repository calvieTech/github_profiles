import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import Search from '../components/Search';
import '../styles/home.css';

function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [user, setUser] = useState();

  useEffect(() => {});

  return (
    <div className='home__container d-flex justify-content-center align-items-center flex-column'>
      {user ? (
        <>
          <Profile user={user} />
        </>
      ) : (
        <>
          <h1 className='h1 text-center'>Search for GitHub Profile</h1>
          <Search
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setUser={setUser}
          />
        </>
      )}
    </div>
  );
}

export default Home;
