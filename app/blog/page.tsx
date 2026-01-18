import { blogPosts } from "@/lib/blog-data";
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Blog - Instagram Reels & Video Downloading Tips | ReelsLoad",
    description:
        "Read our latest guides on how to download Instagram Reels, Videos, Photos, and Audio. Tips, tricks, and tutorials for using ReelsLoad instagram downloader.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog - Instagram Reels & Video Downloading Tips | ReelsLoad",
        description:
            "Read our latest guides on how to download Instagram Reels, Videos, Photos, and Audio. Tips, tricks, and tutorials for using ReelsLoad instagram downloader.",
        url: "https://reelsload.com/blog",
        type: "website",
    },
};

export default function BlogListingPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    ReelsLoad Blog
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Expert guides and tutorials on downloading and saving content from Instagram.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </CardTitle>
                                <div className="flex items-center text-sm text-muted-foreground gap-4 mt-2">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-base line-clamp-3">
                                    {post.excerpt}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="text-primary font-medium group-hover:underline">
                                Read More →
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
