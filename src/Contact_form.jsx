import React from 'react';
import { useForm } from 'react-hook-form';

const Contactform = () => {
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Contact information submitted successfully!');
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={`mt-1 block w-full rounded-md border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>

         
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              className={`mt-1 block w-full rounded-md border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

         
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              className={`mt-1 block w-full rounded-md border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10,}$/,
                  message: 'Phone number must be at least 10 digits long',
                },
              })}
              className={`mt-1 block w-full rounded-md border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
          </div>

        
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              {...register('message', { required: 'Message is required' })}
              className={`mt-1 block w-full rounded-md border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

      
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-800 text-white font-bold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
