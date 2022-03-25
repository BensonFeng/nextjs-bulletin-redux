import Head from "next/head";
import Image from "next/image";
import AddPostForm from "../features/posts/AddPostForm";
import PostList from "../features/posts/PostList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}
