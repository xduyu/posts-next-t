"use client"
import { TPost } from "@/public/types/post.type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Post = () => {
    const params = useParams();
    const id = params.id;
    const [posts, setPost] = useState<TPost[]>([]);
    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
                const data = await res.json();
                console.log(data);
                setPost(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPost();
    }, [id])
  return (
    <div className="flex flex-col gap-4 mt-[15px]">
        posts:
        {posts.map((post) => (
            <div className="border-white/80 border-[0.5px] p-[10px] rounded-[5px]" key={post.id}>
                <h2 className='text-white text-[25px]'>{post.title}</h2>
                <p className='text-white text-[15px]'>{post.body}</p>
            </div>
        ))}
    </div>
  )
}
