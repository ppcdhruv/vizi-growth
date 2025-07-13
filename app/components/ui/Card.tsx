'use client';
import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-lg',
        className
      )}
      {...rest}
    />
  )
);
Card.displayName = 'Card';
export default Card;
