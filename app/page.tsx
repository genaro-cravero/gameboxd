import AuthButton from "@/components/auth-button";
import PostCard from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { dummyPosts } from "@/dummy-post";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const isAdmin = true; // Replace with actual admin check logic
  const loading = false; // Replace with actual loading state
  const posts = dummyPosts; // Replace with actual posts fetching logic
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          MyApp
        </Link>
        <div className="flex items-center space-x-4">
          {isAdmin && (
            <Button asChild>
              <Link href="/admin/create">
                <PlusCircle className="h-6 w-6" />
              </Link>
            </Button>
          )}
          <AuthButton />
        </div>
      </div>
      </header>

      <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
              <p className="text-lg text-muted-foreground">
                Your gateway to amazing content.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="text-center">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="text-center text-muted-foreground">No posts available. {isAdmin && "You can create the first post."}</div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )
        }
      </main>
    </div>
  );
}
