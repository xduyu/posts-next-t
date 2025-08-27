"use client"
import React, { useEffect, useState } from 'react'
import { TPost } from '@/public/types/post.type'
import Link from 'next/link'

export const Posts = () => {
    const [posts, setPosts] = useState<TPost[]>([])
    useEffect(() => {
        async function fetchPosts() {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await res.json()
                console.log(data)
                setPosts(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPosts()
    }, 
    [])
  return (
    <div>
        <h1>Posts</h1>
        <ul className='flex flex-col gap-4'>
            {posts.map((post) => (
                <li className='border-white/80 border-[0.5px] p-[10px] rounded-[5px]' key={post.id}>
                    <h2 className='text-white text-[25px]'>{post.title}</h2>
                    <p className='text-white text-[15px]'>{post.body}</p> 
                    <p className='text-gray-100/80 text-[15px] pr-[10px] hover:text-white'><Link href={`u/${post.userId}`}>{post.userId}</Link></p>
                </li>
            ))}
        </ul>
    </div>
  )
}
