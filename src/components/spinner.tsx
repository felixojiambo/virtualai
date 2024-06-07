// src/components/spinner.tsx
import React from 'react';

export interface SpinnerProps {
  noPadding?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ noPadding }) => {
  return (
    <div className={`spinner ${noPadding ? 'no-padding' : ''}`}>
      Loading...
    </div>
  );
};
