"use client";

import { useState } from "react";
import PostDialog from "./post-dialog";
import { usePosts } from "@/hooks";

const EventList = () => {
    const { data: posts } = usePosts();
    
    const [selectedPost, setSelectedPost] = useState<any>(null);


    return (
        <section className="min-h-screen py-20 px-4 sm:px-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-16 relative">
            {/* Left section */}
            <div className="sm:col-span-1 col-span-1 w-full order-2 sm:order-1 sticky top-24 h-fit border-t-6 pt-5">
                <div className="relative">
                    <img
                        src="/assets/ninjas/2.png"
                        alt=""
                        className="absolute w-3/4 right-0 top-1/2 z-0"
                    />
                    <h1 className="text-6xl font-bowlby tracking-wide relative z-10 text-primary text-stroke">
                        What <br /> We've <br /> Done
                    </h1>
                </div>
            </div>

            {/* Right section — post titles */}
            <div className="sm:col-span-2 col-span-1 order-1 sm:order-2 h-[200vh] flex flex-col pt-5 gap-10">
                {posts?.map((post) => (
                    <p
                        key={post.id}
                        onClick={() => setSelectedPost(post)}
                        className="text-5xl font-bowlby truncate overflow-ellipsis whitespace-nowrap hover:underline cursor-pointer"
                    >
                        {post.title}
                    </p>
                ))}
            </div>

            <PostDialog
                open={!!selectedPost}
                onOpenChange={() => setSelectedPost(null)}
                post={selectedPost}
            />
        </section>
    );
};

export default EventList;
