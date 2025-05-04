
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import RecentPosts from "@/components/RecentPosts";
import NewsletterCTA from "@/components/NewsletterCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedPosts />
      <RecentPosts />
      <NewsletterCTA />
    </Layout>
  );
};

export default Index;
