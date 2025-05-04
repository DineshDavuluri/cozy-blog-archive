
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blog-muted to-white py-16 md:py-24">
      <div className="max-container grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <span className="inline-block bg-blog-soft-peach text-blog-accent-dark px-4 py-1 rounded-full text-sm font-medium">
            Welcome to CozyBlog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Discover insightful articles on technology, design, and productivity
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            A curated collection of articles written by experts in their fields, 
            designed to inspire, educate, and spark new ideas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-blog-accent hover:bg-blog-accent-dark">
              <Link to="/category/technology">
                Explore Articles
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">
                About Us
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="hidden md:block rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
            alt="Person writing in a journal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
