import { cn } from 'lib/utils';
import * as React from 'react';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          '!text-small-normal min-h-[196px] w-full rounded-sm bg-white px-3 py-3 text-eerieblack',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
