
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 py-4">
      <div className="max-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold text-blog-accent">
          CozyBlog
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blog-accent transition-colors">
            Home
          </Link>
          <Link to="/category/technology" className="text-gray-700 hover:text-blog-accent transition-colors">
            Technology
          </Link>
          <Link to="/category/design" className="text-gray-700 hover:text-blog-accent transition-colors">
            Design
          </Link>
          <Link to="/category/lifestyle" className="text-gray-700 hover:text-blog-accent transition-colors">
            Lifestyle
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blog-accent transition-colors">
            About
          </Link>
          <Button variant="ghost" size="icon">
            <Search size={18} />
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full z-50 shadow-md animate-fadeIn">
          <nav className="flex flex-col p-4">
            <Link 
              to="/" 
              className="py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/category/technology" 
              className="py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link 
              to="/category/design" 
              className="py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Design
            </Link>
            <Link 
              to="/category/lifestyle" 
              className="py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Lifestyle
            </Link>
            <Link 
              to="/about" 
              className="py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="mt-2 px-4">
              <Button className="w-full justify-start" variant="ghost">
                <Search size={18} className="mr-2" />
                Search
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
