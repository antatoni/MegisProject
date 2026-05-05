import { useEffect, useState } from 'react';
import NavBar from './NavBar.jsx';
import Post from './Post.jsx';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/posts`);
      const posts = await response.json();
      setPosts(posts);
    } catch (error) {
      console.error('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-amber-50 to-sky-50">
      <NavBar></NavBar>
      <main className="mx-auto w-full max-w-4xl px-4 py-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Community feed
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Latest posts
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
          </p>
        </div>

        {loading ? (
          <p className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-8 text-center text-sm text-slate-500">
            Loading posts...
          </p>
        ) : posts.length === 0 ? (
          <p className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-8 text-center text-sm text-slate-500">
            No posts yet. Be the first to share something.
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
export default Posts;
