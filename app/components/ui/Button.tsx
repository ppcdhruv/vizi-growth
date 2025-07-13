'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

interface Shared {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps =
  | (Shared & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (Shared & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

const base =
  'inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold transition-transform active:scale-95';

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', className, href, children, ...rest }, ref) => {
    const style = clsx(
      base,
      variant === 'primary'
        ? 'bg-charcoal text-ivory hover:bg-black'
        : 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory',
      className
    );

    if (href) {
      return (
        <Link ref={ref as any} href={href} className={style} {...(rest as any)}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as any} className={style} {...(rest as any)}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
