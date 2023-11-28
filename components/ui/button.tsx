import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { ReactNode } from 'react';
import clsx from 'clsx';

const buttonVariants = cva(
  clsx(
    'text-small-normal flex h-12 w-fit min-w-fit items-center gap-4 whitespace-nowrap bg-purple md:text-regular-normal md:h-14',
    'transition-colors duration-200 md:hover:bg-purple-hover md:hover:text-white',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple',
  ),
  {
    variants: {
      variant: {
        primary: 'rounded-full py-3 pl-8 pr-6',
        secondary: 'rounded-sm px-8 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            className,
          }),
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
