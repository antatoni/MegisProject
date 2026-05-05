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
  const getComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/comments?postId=${post.id}`,
      );

      const comments = await response.json();
      if (comments.length === 0) {
        return;
      } else {
        setComments(comments);
      }
    } catch (error) {
      console.error(`Failed to fetch comments`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostUser();
    getComments();
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

      <div className="mt-6">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Comments
        </div>
        {loading ? (
          <p className="mt-3 text-sm text-slate-500">Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">No comments yet.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                {comment.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};
export default Post;
