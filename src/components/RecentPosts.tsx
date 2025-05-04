
import { getRecentPosts } from "@/data/blogData";
import PostCard from "./PostCard";

const RecentPosts = () => {
  const recentPosts = getRecentPosts(6);

  return (
    <section className="my-12">
      <div className="max-container">
        <h2 className="text-2xl font-serif font-bold mb-6">Recent Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
