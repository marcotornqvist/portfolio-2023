import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { ReactNode } from 'react';
import clsx from 'clsx';

const buttonVariants = cva(
  clsx(
    'flex items-center gap-4 bg-purple w-fit py-3 pr-6 pl-8 h-12 md:h-14 rounded-full text-small-normal md:text-regular-normal whitespace-nowrap min-w-fit',
    'hover:bg-purple-hover hover:text-white transition-colors duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple',
  ),
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
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
