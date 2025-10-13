// "use client";

// import { usePosts } from "@/hooks/use-posts";
// import { Button } from "@/components/ui/button";

// export function PostsList() {
//     const { data: posts, isLoading, error, refetch } = usePosts();

//     if (isLoading) {
//         return (
//             <div className="p-4">
//                 <div className="animate-pulse space-y-4">
//                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                     <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                     <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="p-4">
//                 <div className="text-red-600 mb-4">
//                     Error loading posts: {error.message}
//                 </div>
//                 <Button onClick={() => refetch()}>Try Again</Button>
//             </div>
//         );
//     }

//     if (!posts || posts.length === 0) {
//         return (
//             <div className="p-4">
//                 <p className="text-gray-500">No posts found.</p>
//             </div>
//         );
//     }

//     return (
//         <div className="p-4">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold">Posts</h2>
//                 <Button onClick={() => refetch()}>Refresh</Button>
//             </div>

//             <div className="space-y-4">
//                 {posts.map((post) => (
//                     <div key={post.id} className="border rounded-lg p-4">
//                         <h3 className="text-lg font-semibold mb-2">
//                             {post.attributes.title}
//                         </h3>
//                         <p className="text-gray-600 mb-2">
//                             {post.attributes.content}
//                         </p>
//                         <p className="text-sm text-gray-400">
//                             Published:{" "}
//                             {new Date(
//                                 post.attributes.publishedAt
//                             ).toLocaleDateString()}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
