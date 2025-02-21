import type { ButtonHTMLAttributes } from 'react'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="
        p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900
      "
      {...props}
    />
  )
}
