/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { fetchPosts } from "../features/posts/postSlice";
import PostCard from "./PostCard";

export default function Timeline() {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts() as any);
  }, [dispatch]);

  if (posts.isLoading) return <div>Loading...</div>;

  if (posts.errorMessage) return <div>An error is occurred! {posts.errorMessage}</div>;

  console.log("🚀 ~ Timeline ~ posts:", posts);
  return (
    <section className="w-[90vw] max-w-[600px] h-[95vh] mx-auto min-h-[80vh] rounded-2xl bg-[#f1f1f1] shadow-2xl overflow-auto flex flex-wrap justify-between gap-5 ">
      {posts?.posts?.map((post) => (
        <PostCard key={post?.id} post={post} />
      ))}
    </section>
  );
}
