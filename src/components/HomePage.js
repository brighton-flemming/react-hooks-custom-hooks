import React, { useEffect } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function HomePage() {
  const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");

  useDocumentTitle("Our Final Encounter. | Home");

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((r) => r.json())
      .then((data) => {
        // Handle the data if needed, but 'isDataLoaded' is not necessary here.
      });
  }, []);

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
