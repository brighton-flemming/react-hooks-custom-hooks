import { useEffect, useState } from "react";


function useQuery() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    fetch("http://localhost:4000/posts")
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoaded(true);
      });
  }, []);
 
return {
posts: posts,
isLoaded: isLoaded,
}
}

export default useQuery;
