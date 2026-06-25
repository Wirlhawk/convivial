"use client";

import { usePosts } from "@/hooks";
import { useState } from "react";
import ScrollableDialog from "./scrollabe-dialog";


const EventList = () => {
    const { data: posts } = usePosts();
    console.log(posts);
    const [selectedPost, setSelectedPost] = useState<any>(null);

    return (
        <section className="min-h-screen py-20 px-4 sm:px-10  mx-auto relative bg-[url('/assets/wth-bg/wth-event.jpg')] bg-[size:100%_auto] bg-repeat-y">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-16 ">
                {/* Left section */}
                <div className="sm:col-span-1 col-span-1 w-full order-2 sm:order-1 sticky top-24 h-fit pt-5">
                    <div className="relative inline-block">
                        <img
                            src="/assets/wth-bg/wth-3.png"
                            alt=""
                            className="w-full z-0"
                        />
                        <h1 className="text-5xl font-bowlby tracking-wide absolute inset-0 z-10 flex items-center justify-start pr-5 pb-28 text-primary  font-bold">
                            Projects
                        </h1>
                    </div>
                </div>

                {/* Right section — post titles */}
                <div className="sm:col-span-2 col-span-1 order-1 sm:order-2 h-[200vh] flex flex-col pt-20 gap-10">
                    {posts?.map((post) => (
                        <p
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="text-5xl font-bowlby truncate overflow-ellipsis whitespace-nowrap hover:underline cursor-pointer underline"
                        >
                            {post.title}
                        </p>
                    ))}
                </div>

                <ScrollableDialog
                    open={!!selectedPost}
                    onOpenChange={() => setSelectedPost(null)}
                    post={selectedPost}
                />

                {/* <PostDialog
                open={!!selectedPost}
                onOpenChange={() => setSelectedPost(null)}
                post={selectedPost}
            /> */}
            </div>
        </section>
    );
};

export default EventList;
