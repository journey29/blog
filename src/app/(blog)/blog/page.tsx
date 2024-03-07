"use client";

import Controls from "@/components/blog/Controls";
import Stories from "@/components/blog/Stories";
import { DataProvider } from "@/components/blog/DataContext";

const BlogPage = () => {
  return (
    <DataProvider>
      <div className="my-16">
        <Controls />
        <Stories />
      </div>
    </DataProvider>
  );
};

export default BlogPage;
