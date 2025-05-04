
import React from "react";
import { Category } from "@/data/blogData";

interface CategoryBannerProps {
  category?: Category;
  title?: string;
  description?: string;
}

const CategoryBanner = ({ 
  category, 
  title, 
  description 
}: CategoryBannerProps) => {
  const bannerTitle = title || (category ? category.name : "Blog");
  const bannerDescription = description || (
    category 
      ? `Browse all articles in the ${category.name} category.` 
      : "Explore our latest articles and insights."
  );

  return (
    <div className="bg-gray-50 py-12 mb-8">
      <div className="max-container">
        <h1 className="text-4xl font-serif font-bold mb-4">{bannerTitle}</h1>
        <p className="text-gray-600 max-w-2xl text-lg">{bannerDescription}</p>
      </div>
    </div>
  );
};

export default CategoryBanner;
