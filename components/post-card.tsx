import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { Heart, MessageCircle } from "lucide-react";

export default function PostCard({ post }: { post: any }) {
    const likeLoading = false;
    const liked = true;
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post.author.image || ""} />
            <AvatarFallback>
              {post.author.name?.charAt(0) || "?"}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium">{post.author.name}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
        <CardTitle className="mt-4">
          <Link href={`/posts/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{post.content}</CardDescription>
      </CardContent>

      <CardFooter className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <Heart
            className={`h-4 w-4 ${
                likeLoading ? 
                "animate-pulse text-red-500"
                : liked
                ? post._count.likes < 100 ? "fill-red-500 text-red-500" : "fill-orange-400 text-amber-400"
                : "" 
            }`}
            />
            <span>{post._count.likes}</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <MessageCircle className="h-4 w-4"/>
            <span>{post._count.comments}</span>
        </Button>
      </CardFooter>

    </Card>
  );
}
