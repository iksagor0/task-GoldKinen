import PostCard from "./PostCard";

export default function Timeline() {
  return (
    <section className="w-[90vw] max-w-[600px] h-[95vh] mx-auto min-h-[80vh] rounded-2xl bg-[#f1f1f1] shadow-2xl overflow-auto flex flex-wrap justify-between gap-5 ">
      <PostCard key={1} />
      <PostCard key={2} />
      <PostCard key={3} />
      <PostCard key={4} />
      <PostCard key={6} />
      <PostCard key={7} />
      <PostCard key={9} />
    </section>
  );
}
