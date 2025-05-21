import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css';
import './Register.css';
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', data);
      toast.success(res.data.message);
      reset();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-wrapper">
      <ToastContainer />
      <div className="auth-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input {...register('name')} placeholder="Enter your name" />
          <p className="error">{errors.name?.message}</p>

          <label>Email</label>
          <input {...register('email')} type="email" placeholder="Enter your email" />
          <p className="error">{errors.email?.message}</p>

          <label>Password</label>
          <div className="mb-3 position-relative">
            <input
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              className="form-control pe-5"
            />
            <span className="password-toggle-icon" onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <p className="error">{errors.password?.message}</p>

          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
