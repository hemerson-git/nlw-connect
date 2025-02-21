import type { ComponentProps, InputHTMLAttributes } from 'react'

type InputRootProps = ComponentProps<'div'> & {
  error?: boolean
}

export function InputRoot({ error, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="
      bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 text-gray-400
      group focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

type InputIconProps = ComponentProps<'span'> & {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="
        text-gray-400 group-focus-within:text-gray-100 
        group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger
      "
      {...props}
    />
  )
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {}

export function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}
