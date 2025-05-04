
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostsByAuthor, authors } from "@/data/blogData";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AuthorPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const author = authors.find(a => a.id === id);
  const posts = getPostsByAuthor(id || "");

  useEffect(() => {
    if (!author) {
      navigate("/404");
    }
  }, [author, navigate]);

  if (!author) {
    return null;
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="max-container">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-24 w-24">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div>
              <h1 className="text-3xl font-serif font-bold mb-2 text-center md:text-left">{author.name}</h1>
              <p className="text-gray-600 max-w-2xl text-center md:text-left">{author.bio}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-container my-12">
        <h2 className="text-2xl font-serif font-bold mb-6">Articles by {author.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              This author hasn't published any posts yet.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AuthorPage;
