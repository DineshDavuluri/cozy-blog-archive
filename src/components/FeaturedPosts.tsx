
import { getFeaturedPosts } from "@/data/blogData";
import PostCard from "./PostCard";

const FeaturedPosts = () => {
  const featuredPosts = getFeaturedPosts();
  
  if (featuredPosts.length === 0) return null;
  
  return (
    <section className="my-12">
      <div className="max-container">
        <h2 className="text-2xl font-serif font-bold mb-6">Featured Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} featured />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
