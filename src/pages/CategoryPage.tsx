
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostsByCategory, categories } from "@/data/blogData";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import CategoryBanner from "@/components/CategoryBanner";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const category = categories.find(c => c.slug === slug);
  const posts = getPostsByCategory(slug || "");

  useEffect(() => {
    if (!category) {
      navigate("/404");
    }
  }, [category, navigate]);

  if (!category) {
    return null;
  }

  return (
    <Layout>
      <CategoryBanner category={category} />
      
      <div className="max-container my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-serif mb-2">No posts found</h2>
            <p className="text-gray-600">
              There are currently no posts in this category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
