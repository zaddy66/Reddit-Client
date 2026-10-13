import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, fetchPosts } from "./allPostsSlice";
import Card from "../../components/Card";

export function AllPosts() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  // const isLoading = useSelector((state: any) => state.posts.isLoadingPosts);
  // const hasError = useSelector((state: any) => state.posts.failedToLoadPosts);

  useEffect(() => {
    console.log("fetch posts");
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    // console.log(selectPosts);
    console.log(posts);
  }, [posts]);

  return (
    <>
      {posts.map((post: any) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
}
