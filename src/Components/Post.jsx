import { useEffect, useState } from 'react';

const Post = ({ post }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [postUser, setPostUser] = useState(null);
  const userName = postUser?.name || 'Unknown user';
  const getPostUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${post.userId}`,
      );
      if (!response.ok) {
        return;
      }
      const user = await response.json();
      setPostUser(user);
    } catch (error) {
      console.error(`Problem with fetching userdata!`);
    }
  };
  useEffect(() => {
    getPostUser();
  }, [post.id, post.userId]);
  return (
    <article className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg backdrop-blur">
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-2xl font-semibold text-slate-900">{post.title}</h3>
        <span className="text-sm font-semibold text-slate-500">
          by {userName}
        </span>
      </header>

      <p className="mt-3 text-slate-700">{post.content}</p>
    </article>
  );
};
export default Post;
