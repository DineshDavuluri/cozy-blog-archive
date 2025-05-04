
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif font-bold text-blog-accent">
              CozyBlog
            </Link>
            <p className="text-gray-600 max-w-xs">
              A thoughtfully designed blog for sharing ideas, inspiration, and knowledge.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blog-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blog-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blog-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blog-accent transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blog-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/technology" className="text-gray-600 hover:text-blog-accent transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/design" className="text-gray-600 hover:text-blog-accent transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/category/lifestyle" className="text-gray-600 hover:text-blog-accent transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blog-accent transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blog-accent focus:border-transparent"
              />
              <button 
                type="submit"
                className="w-full bg-blog-accent hover:bg-blog-accent-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} CozyBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
