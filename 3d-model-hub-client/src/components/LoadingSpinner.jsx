import React from 'react';

const LoadingSpinner = ({ message = 'Loading...' }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <span className="loading loading-spinner loading-lg text-primary"></span>
    <p className="mt-4 text-lg font-semibold">{message}</p>
  </div>
);

export default LoadingSpinner;