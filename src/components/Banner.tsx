import { ReactNode } from 'react'

export default function Banner({ children }: { children?: ReactNode }) {
  return (
    <div id="banner" className="w-full bg-blue-500 text-center">
      {children || ''}
    </div>
  )
}
