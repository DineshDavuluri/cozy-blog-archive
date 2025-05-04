
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <Layout>
      <div className="max-container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About CozyBlog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A thoughtfully designed platform for sharing ideas, inspiration, and knowledge.
          </p>
        </div>
        
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Our mission"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At CozyBlog, we believe in the power of sharing knowledge and ideas. Our mission is to create a welcoming space where readers can discover insightful articles on a variety of topics, from technology and design to lifestyle and productivity.
            </p>
            <p className="text-gray-600 mb-6">
              We curate content from experts in their fields who are passionate about breaking down complex concepts into accessible, engaging articles that inspire and educate.
            </p>
            <Button asChild className="bg-blog-accent hover:bg-blog-accent-dark">
              <Link to="/">
                Explore Our Articles
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-blog-muted h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blog-accent"><path d="M18 16.236V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10"/><path d="m16 8-2 8 8-2a4 4 0 0 0-6-6"/><path d="m16 16-2-2"/></svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Quality Content</h3>
              <p className="text-gray-600">
                We prioritize depth, accuracy, and thoughtfulness in every article we publish.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-blog-muted h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blog-accent"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                We foster a welcoming environment for readers and writers to connect and share ideas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="bg-blog-muted h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blog-accent"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We believe knowledge should be accessible to everyone, presented in a clear, engaging way.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team - Optional section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Doe",
                role: "Founder & Editor",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                bio: "Jane has over 10 years of experience in digital publishing and content strategy."
              },
              {
                name: "John Smith",
                role: "Senior Writer",
                avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                bio: "John specializes in technology and design topics with a focus on user experience."
              },
              {
                name: "Emily Chen",
                role: "Content Curator",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                bio: "Emily has a passion for discovering emerging trends and talented new voices."
              }
            ].map(member => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                <p className="text-blog-accent font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-blog-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Subscribe to our newsletter to receive the latest articles, updates, and insights directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <Button type="submit" className="bg-blog-accent hover:bg-blog-accent-dark">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
