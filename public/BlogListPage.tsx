"use client";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  image?: string;
}

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getBlogs() {
    try {
      const response = await fetch(
        "https://veeraj-admin.vercel.app/api/blogs?category=chemtech&limit=3",
      );
      const res = await response.json();
      const dataToSet = res.data || res || [];
      setBlogs(Array.isArray(dataToSet) ? dataToSet : []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (blogs?.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header — mirrors InsightsSection */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Our Blog
            </span>
            <h3 className="text-4xl md:text-5xl font-serif">Latest Articles</h3>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              window.location.href = "/blog";
            }}
            className="rounded-none bg-transparent border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
          >
            View All Articles
          </Button>
        </div>

        {/* Blog Grid — mirrors InsightsSection card layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <Card className="border border-foreground/10 shadow-none bg-transparent cursor-pointer rounded-none p-6 h-full flex flex-col justify-between">

                {/* Meta row */}
                <CardHeader className="p-0 mb-4 space-y-3">
                  <div className="flex items-center justify-between">
                    {post.category && (
                      <span className="text-xs font-bold bg-primary px-2 py-1 tracking-[0.2em] text-white uppercase">
                        {post.category}
                      </span>
                    )}
                    <div className="flex items-center text-xs text-muted-foreground ml-auto">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>

                  <CardTitle className="font-serif line-clamp-2 text-xl leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                {/* Excerpt + link */}
                <CardContent className="p-0 flex flex-col mt-4">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-foreground/10">
                    <span className="flex items-center text-sm text-foreground group-hover:text-primary transition-colors">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
