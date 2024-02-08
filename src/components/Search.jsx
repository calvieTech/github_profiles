import { Octokit } from 'octokit';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../styles/search.css';

function Search({ searchInput, setSearchInput, setUser }) {
  const submitUserHandler = async (e) => {
    e.preventDefault();
    const octokit = new Octokit({
      auth: `${import.meta.env.VITE_GITHUB_TOKEN}`,
    });

    const response = await octokit.request(`GET /users/${searchInput}`);
    console.log(response.data);
    setUser(response.data);
  };

  const usernameSearchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Form className='d-flex mw-100' onSubmit={submitUserHandler}>
      <Form.Control
        value={searchInput}
        type='search'
        placeholder='Search for a username'
        className='my-2'
        aria-label='Search'
        onChange={usernameSearchHandler}
      />
      <Button className='my-2 mx-1' variant='primary' type='Submit'>
        Search
      </Button>
    </Form>
  );
}

export default Search;
