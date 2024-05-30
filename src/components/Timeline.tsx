import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../app/store";
import { fetchComments } from "../features/comments/commentSlice";
import { fetchPosts } from "../features/posts/postSlice";
import { fetchUsers } from "../features/users/userSlice";
import PostCard from "./PostCard";

export default function Timeline() {
  const posts = useSelector((state: RootStateType) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts() as any);
    dispatch(fetchUsers() as any);
    dispatch(fetchComments() as any);
  }, [dispatch]);

  // handle loading state
  if (posts.isLoading) return <div>Loading...</div>;

  // handle error
  if (posts.errorMessage) return <div>An error is occurred! {posts.errorMessage}</div>;

  return (
    <section className="w-[90vw] max-w-[600px] h-[95vh] mx-auto min-h-[80vh] rounded-lg bg-[#f1f1f1] shadow-2xl overflow-auto flex flex-wrap justify-between gap-5 ">
      {posts?.posts?.map((post) => (
        <PostCard key={post?.id} post={post} />
      ))}
    </section>
  );
}
