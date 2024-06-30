import  { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number

  const validate = () => {
    let emailError = '';
    let passwordError = '';

    if (!emailRegex.test(email)) {
      emailError = 'Invalid email address';
    }

    if (!passwordRegex.test(password)) {
      passwordError = 'Password must be at least 8 characters long and contain both letters and numbers';
    }

    setErrors({ email: emailError, password: passwordError });

    return !emailError && !passwordError;
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with registration logic
      console.log('User registered:', { email, password });
    }
  };

  const handleGoogleLogin = () => {
    // Logic for handling Google login
    console.log('Google login clicked');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-700 sm:text-sm text-white outline-none"
            />
            {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-700 sm:text-sm text-white outline-none "
            />
            {errors.password && <p className="mt-2 text-sm text-red-400">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
