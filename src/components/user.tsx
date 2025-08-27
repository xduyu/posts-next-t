"use client"
import { TUser } from "@/public/types/user.type";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Post } from "./user/post";

export const User = () => {
    const params = useParams();
    const u_id = params.id;
    const [user, setUser] = useState<TUser>({} as TUser);
    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${u_id}`);
                const data = await res.json();
                console.log(data);
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUser();
    }, [u_id])

  return <div className="flex flex-col gap-2">
    <Link href={'/'} className="text-white/80 hover:text-white mb-[15px] inline-block">Go back</Link>
    {/* <div className="w-[100%] h-[250px] bg-white/30 rounded-[15px]"> </div> */}
    <h1 className="text-2xl">{user.name}</h1>
    <h2 className="text-1xl">@{user.username}</h2>
    <div className="flex gap-10">
        <p className="text-[12px]">{user.email}</p>
        <p className="text-[12px]">{user.phone}</p>
    </div>
    <Post/>
  </div>;
};
