import React, { useState } from "react";
import { ThemeProvider } from "../../contexts/ThemeContext";
import Post from "../Post/index";
import Header from "../Header/index";
import Button from "../Button/index";
import { Title } from "./styles";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      likes: 20,
      title: "Titulo da noticia 1",
      subtitle: "Subtitulo da noticia 1",
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      likes: 30,
      title: "Titulo da noticia 2",
      subtitle: "Subtitulo da noticia 2",
      read: true,
      removed: true,
    },
    {
      id: Math.random(),
      likes: 55,
      title: "Titulo da noticia 3",
      subtitle: "Subtitulo da noticia 3",
      read: false,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        likes: 85,
        title: `Titulo da noticia ${prevState.length + 1}`,
        subtitle: `Subtitulo da noticia ${prevState.length + 1}`,
        read: false,
        removed: false,
      },
    ]);
  }
  
  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da semana
          <Button onClick={handleRefresh}>Atualizar</Button>
        </Title>
      </Header>
      <hr />

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemove} post={post} />
      ))}
    </ThemeProvider>
  );
}

export default App;
