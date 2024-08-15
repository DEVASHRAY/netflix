import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva(
  [
    'rounded',
    'justify-center',
    'items-center',
    'overflow-hidden',
    'w-fit',
    'inline-flex',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-fill-button'],
      },
      size: {
        small: ['px-4'],
      },
    },

    defaultVariants: {
      intent: 'primary',
      size: 'small',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  showShadow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  children,
  size,
  onClick,
  ...props
}) => {
  const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    } else {
      alert(
        'This functionality is a Work-In-Progress. Please wait for some more time while we make this active'
      );
    }
  };

  return (
    <button
      onClick={buttonOnClick}
      className={twMerge(button({ intent, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
