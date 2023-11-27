import * as React from 'react';

import { cn } from 'lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          '!text-small-normal h-12 w-full rounded-sm bg-white px-3 text-eerieblack',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
