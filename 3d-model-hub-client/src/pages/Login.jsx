import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import toast from 'react-hot-toast';

const Login = () => {
  const { login, googleLogin } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();

  // Get the path the user was trying to access before being redirected to login
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Logging in...');
    try {
      await login(formData.email, formData.password);
      toast.success('Login successful!', { id: toastId });
      navigate(from, { replace: true }); // Redirect to the intended page
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading('Signing in with Google...');
    try {
      await googleLogin();
      toast.success('Login successful!', { id: toastId });
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="hero min-h-[70vh] bg-base-200 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:pl-10">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 text-lg">Access your 3D Model Hub account to manage your assets and downloads.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" onChange={handleChange} required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" onChange={handleChange} required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <div className="divider">OR</div>
            <button type="button" onClick={handleGoogleLogin} className="btn btn-outline">
              Continue with Google
            </button>
            <div className="text-center mt-4">
              <p>New to 3D Model Hub? <Link to="/register" className="link link-primary">Register here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;