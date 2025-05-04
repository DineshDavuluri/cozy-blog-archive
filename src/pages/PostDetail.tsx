
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPostBySlug } from "@/data/blogData";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || "");

  useEffect(() => {
    if (!post) {
      navigate("/404");
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Estimated reading time (rough estimate)
  const readingTime = Math.max(1, Math.ceil(post.content.split(' ').length / 200));

  return (
    <Layout>
      <article className="mb-16">
        {/* Cover image */}
        <div className="w-full h-[400px] bg-gray-100">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-container py-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map(category => (
              <Link to={`/category/${category.slug}`} key={category.id}>
                <Badge variant="secondary" className="bg-blog-muted text-blog-accent-dark">
                  {category.name}
                </Badge>
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center justify-between border-y border-gray-200 py-4 mb-8">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <Link to={`/author/${post.author.id}`} className="font-medium hover:text-blog-accent transition-colors">
                  {post.author.name}
                </Link>
                <div className="text-sm text-gray-500">{post.author.bio.split('.')[0]}.</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CalendarIcon size={16} className="mr-1" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {readingTime} min read
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="blog-content">
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PostDetail;
