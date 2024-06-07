// src/components/loading-spinner-wrapper.tsx
import React from 'react';
import { Spinner } from './spinner';

// Define the props type to match DynamicOptionsLoadingProps
type DynamicOptionsLoadingProps = {
  error?: Error;
  isLoading?: boolean;
  pastDelay?: boolean;
  retry?: () => void;
  timedOut?: boolean;
};

// This wrapper component will conform to the expected type for next/dynamic
const LoadingSpinnerWrapper = (props: DynamicOptionsLoadingProps) => {
  // You can add any logic based on the props here
  return <Spinner noPadding={true} />;
};

export default LoadingSpinnerWrapper;
