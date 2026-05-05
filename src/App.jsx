import { useNavigate } from 'react-router';
import NavBar from './Components/NavBar';

function App() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-amber-50 to-sky-50">
      <NavBar></NavBar>
      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Share quick thoughts and discover what others are posting.
            </h1>
            <p className="text-lg text-slate-600">
              Megis is a lightweight space for short posts. You can browse, but
              to create posts or comment you will need to register or log in.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
              >
                Get started
              </button>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400"
              >
                I already have an account
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-8">
            <div className="space-y-4">
              <div className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
                What you can do
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-600">
                Read the latest posts from the community in one simple feed.
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-600">
                Register to publish your own posts and join the discussion.
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-600">
                Log in anytime to manage your posts and comment on your friends
                posts!.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
