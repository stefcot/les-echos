import { FC, HTMLProps } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx'

export type ButtonProps = {
  className?: string
  label?: string
  variant?: 'red' | 'yellow'
} & HTMLProps<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ className, label, variant = 'red' }) => (
  <button
    className={clsx(
      'rounded-full appearance-none inline-flex h-10 px-10 font-bold text-sm items-center justify-center',
      {
        'bg-[#B00005] text-white': variant === 'red',
        'bg-[#FAEC70] text-black': variant === 'yellow',
      },
      className
    )}
  >
    {label}
  </button>
)

export default Button
