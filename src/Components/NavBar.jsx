import { useNavigate } from 'react-router';
import { useSession } from './Context/SessionStorage';

const NavBar = () => {
  const { user, logout } = useSession();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate('/posts')}
            className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Posts
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Home
          </button>
        </div>

        <div className="flex items-center gap-2">
          {user ? (
            <button
              type="button"
              onClick={handleLogOut}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Register
              </button>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
