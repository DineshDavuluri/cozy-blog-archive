
import { Post } from "@/data/blogData";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CalendarIcon } from "lucide-react";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard = ({ post, featured = false }: PostCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Card className={`overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow ${featured ? 'border-blog-accent' : ''}`}>
      <Link to={`/post/${post.slug}`} className="block overflow-hidden relative">
        <div className={`aspect-[16/9] bg-gray-100 overflow-hidden w-full rounded-t-lg`}>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <CardContent className="p-4 flex-grow">
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {post.categories.slice(0, 2).map(category => (
              <Link to={`/category/${category.slug}`} key={category.id}>
                <Badge variant="secondary" className="bg-blog-muted hover:bg-blog-soft-blue text-blog-accent-dark hover:text-blog-accent-dark cursor-pointer transition-colors">
                  {category.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
        
        <Link to={`/post/${post.slug}`}>
          <h3 className={`font-serif ${featured ? 'text-xl md:text-2xl' : 'text-lg'} font-bold mb-2 line-clamp-2 hover:text-blog-accent transition-colors`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 line-clamp-2 text-sm">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="px-4 py-3 border-t border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <Link to={`/author/${post.author.id}`} className="text-xs text-gray-700 hover:text-blog-accent transition-colors">
            {post.author.name}
          </Link>
        </div>
        <div className="flex items-center text-gray-500 text-xs">
          <CalendarIcon size={14} className="mr-1" />
          {formattedDate}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
