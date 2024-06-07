// src/components/loading-fallback.tsx
import React from 'react';
import { Spinner } from './spinner';

const LoadingFallback: React.FC = () => {
  return <Spinner noPadding={true} />;
};

export default LoadingFallback;
