import dotenv from 'dotenv';
import { Octokit } from 'octokit';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/profile.css';

function Profile({ user }) {
  const [topRepositories, setTopRepositories] = useState(null);

  useEffect(() => {
    const fetchTopRepos = async () => {
      const octokit = new Octokit({
        auth: `${import.meta.env.VITE_GITHUB_TOKEN}`,
      });
      let response = null,
        data = null;

      try {
        response = await octokit.request(`GET /users/${user.login}/repos`);
        data = response.data;
      } catch (error) {
        console.error(error);
        throw new error();
      }
      const topRepos = data.slice(0, 5);
      console.log(topRepos);
      return topRepos;
    };

    fetchTopRepos().then((topRepos) => setTopRepositories(topRepos));
  }, []);

  const mapTopRepos = topRepositories
    ? topRepositories.map((repo) => (
        <a href={`${repo.html_url}`} key={repo.id} className='d-flex'>
          {repo.full_name}{' '}
        </a>
      ))
    : null;

  return (
    <Card className='profile__container m-4'>
      <Card.Img className='m-auto w-auto' variant='top' src={user.avatar_url} />
      <Card.Body className='profile__body'>
        <Card.Title className='my-2 display-5 text-center profile__subtitle'>
          {user.login}
        </Card.Title>
        <Card.Subtitle className='my-2'>{user.bio}</Card.Subtitle>
        <Card.Text className='d-flex flex-column my-2'>
          <i className='bi bi-emoji-smile-fill profile__icon mx-2'>
            &ensp;{user.followers} followers
          </i>
          <i className='bi bi-box-seam-fill profile__icon mx-2'>
            &ensp;{user.public_repos} repos
          </i>
        </Card.Text>
        <Card.Text>Repositories: {mapTopRepos}</Card.Text>
        <Button variant='primary' disabled>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
