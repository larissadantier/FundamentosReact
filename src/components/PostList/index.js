import React, { useContext } from "react";
import Post from "./Post";
import { ThemeContext } from "../../contexts/ThemeContext";

import { Container } from "./styles";

import posts from "./posts";

export default function PostsList() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} description={post.description} />
      ))}
    </Container>
  );
}
