"use client";

import { useState } from "react";
import PostDialog from "./post-dialog";
import { usePosts } from "@/hooks";
import { Post } from "@/lib/api";
import ScrollableDialog from "./scrollabe-dialog";

const posts: Post[] = [
    {
        id: 1,
        title: "Event 1 Lorem ipsum sit amet consectur adiscipcing",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis modi et molestias, debitis, vitae voluptates consequatur numquam reiciendis officiis fugiat iste doloribus ducimus omnis ut magni laudantium, amet deleniti Mollitia error quam dignissimos deserunt magnam quia quae rerum! Temporibus recusandae, tenetur consequatur eius eum ipsam quo assumenda velit explicabo autem itaque est beatae soluta consectetur, sapiente, placeat enim quiQuasi, eveniet quo. Soluta quam assumenda nobis quo voluptatum, ratione labore harum cumque incidunt inventore delectus in accusamus architecto minima vitae non molestiae corrupti. Enim architecto veritatis sapiente soluta repellendus, quam dignissimos deserunt magnam quia quae rerum! Temporibus recusandae, tenetur consequatur eius eum ipsam quo assumenda velit explicabo autem itaque est beatae soluta consectetur, sapiente, placeat enim quiQuasi, eveniet quo. Soluta quam assumenda nobis quo voluptatum, ratione labore harum cumque incidunt inventore delectus in accusamus architecto minima vitae non molestiae corrupti. Enim architecto veritatis sapiente soluta repellendus quam dignissimos deserunt magnam quia quae rerum! Temporibus recusandae, tenetur consequatur eius eum ipsam quo assumenda velit explicabo autem itaque est beatae soluta consectetur, sapiente, placeat enim quiQuasi, eveniet quo. Soluta quam assumenda nobis quo voluptatum, ratione labore harum cumque incidunt inventore delectus in accusamus architecto minima vitae non molestiae corrupti. Enim architecto veritatis sapiente soluta repellendus quam dignissimos deserunt magnam quia quae rerum! Temporibus recusandae, tenetur consequatur eius eum ipsam quo assumenda velit explicabo autem itaque est beatae soluta consectetur, sapiente, placeat enim quiQuasi, eveniet quo. Soluta quam assumenda nobis quo voluptatum, ratione labore harum cumque incidunt inventore delectus in accusamus architecto minima vitae non molestiae corrupti. Enim architecto veritatis sapiente soluta repellendus quam dignissimos deserunt magnam quia quae rerum! Temporibus recusandae, tenetur consequatur eius eum ipsam quo assumenda velit explicabo autem itaque est beatae soluta consectetur, sapiente, placeat enim quiQuasi, eveniet quo. Soluta quam assumenda nobis quo voluptatum, ratione labore harum cumque incidunt inventore delectus in accusamus architecto minima vitae non molestiae corrupti. Enim architecto veritatis sapiente soluta repellendus",
        image: { url: "/assets/ninjas/1.png" },
    },
];

const EventList = () => {
    const { data: posts } = usePosts();
    const [selectedPost, setSelectedPost] = useState<any>(null);

    return (
        <section className="min-h-screen py-20 px-4 sm:px-10  mx-auto relative bg-[url('/assets/wth-bg/3.svg')] bg-[size:100%_auto] bg-repeat-y">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-16 ">
                {/* Left section */}
                <div className="sm:col-span-1 col-span-1 w-full order-2 sm:order-1 sticky top-24 h-fit border-t-6 pt-5">
                    <div className="relative">
                        <img
                            src="/assets/ninjas/2.png"
                            alt=""
                            className="absolute w-3/4 right-0 top-1/2 z-0"
                        />
                        <h1 className="text-6xl font-bowlby tracking-wide relative z-10 text-primary text-stroke-2 text-stroke-red-400 font-bold tracking-wider ">
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
