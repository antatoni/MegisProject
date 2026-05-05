import { useNavigate } from 'react-router';
import { useSession } from './Context/SessionStorage';
import NavBar from './NavBar.jsx';
import { useState } from 'react';
const Register = () => {
  const { login } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email) {
      alert(`Email is needed!`);
    }
    if (!username) {
      alert(`Username/Fullname is neede!`);
      return;
    }
    if (!password) {
      alert(`Password is needed!`);
      return;
    } else if (password.length < 8) {
      alert(`Password length must be 8 and above!`);
      return;
    } else if (password !== secondPassword) {
      alert(`Password's must match!`);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, email, password }),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }
      const newUser = await response.json();

      login(newUser);

      navigate('/');
    } catch (error) {
      console.error(`Failed to register`);
      alert('Registration failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <form
        onSubmit={handleRegister}
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-slate-50 via-amber-50 to-sky-50"
      >
        <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter email please..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-center text-lg font-semibold text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="Enter fullname or nickname ..."
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-center text-lg font-semibold text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 placeholder:text-slate-400"
            />
            <input
              type="password"
              placeholder="Enter password please ..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-center text-lg font-semibold text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 placeholder:text-slate-400"
            />
            <input
              type="password"
              placeholder="Enter password again please ..."
              onChange={(e) => setSecondPassword(e.target.value)}
              value={secondPassword}
              className="w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-center text-lg font-semibold text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Register;
