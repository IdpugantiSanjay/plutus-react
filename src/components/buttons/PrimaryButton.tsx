import React, { ReactNode } from 'react'

export type PrimaryButtonProps = {
  type: React.ButtonHTMLAttributes<ReactNode>['type']
  children: React.ReactNode
}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={
        'font-bold py-2 px-6 rounded-lg flex justify-center hover:ring-2 hover:ring-offset-4 hover:ring-amber-300  focus:ring-offset-4 bg-amber-500 text-white focus:ring-2 focus:outline-none focus:ring-amber-500'
      }
      {...props}
    >
      {children}
    </button>
  )
}
