import React, { useEffect, useState } from 'react';
import './style.css';
import { Container, MainTitle, PostCard, Title, Body, Button } from './styles/styles';

type Post = {
  id: number;
  title: string;
  userId: number;
  body: string;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [toggle, setToggle] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        setPosts(data.posts.slice(0, 10));

        const userIds = data.posts.slice(0, 10).map((post: Post) => post.userId);

        const UsersData = await Promise.all(
          userIds.map((userId: number) =>
            fetch(`https://dummyjson.com/users/${userId}`).then((res) => res.json())
          )
        );

        setUsers(UsersData);
      } catch (error) {
        console.error('Error in fetching posts', error);
      }
    };

    fetchPosts();
  }, []);

  const handleToggle = (id: number) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [id]: !prevToggle[id],
    }));
  };

  return (
    <>
      <MainTitle>Top 10 Posts</MainTitle>
      <Container>
        {posts.map((post: Post, index: number) => (
          <PostCard key={post.id}>
            <Title>{post.title}</Title>
            <Body>
              {toggle[post.id] ? post.body : `${post.body.substring(0, 100)}...`}
              <Button onClick={() => handleToggle(post.id)}>
                {toggle[post.id] ? 'Less' : 'More'} Details
              </Button>
            </Body>
            <h4 className='gray'>
              {users[index]?.firstName} {users[index]?.lastName}
            </h4>
          </PostCard>
        ))}
      </Container>
    </>
  );
}

export default App;
