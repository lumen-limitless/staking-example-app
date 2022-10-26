import { Switch } from '@headlessui/react'
import React from 'react'

interface ToggleProps {
  id?: string
  isActive: boolean
  onToggle: () => void
  iconSet?: { on: JSX.Element; off: JSX.Element }
  className?: string
}

export default function Toggle({
  id,
  isActive,
  onToggle,
  iconSet,
  className,
}: ToggleProps) {
  return (
    <Switch
      checked={isActive}
      onChange={onToggle}
      className={[
        isActive ? 'bg-blue-500' : 'bg-gray-500',
        'inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="sr-only">Use setting</span>
      <span
        id={id}
        className={[
          isActive ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span
          className={[
            isActive
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden="true"
        >
          {iconSet?.on ?? (
            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 12 12">
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span
          className={[
            isActive
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden="true"
        >
          {iconSet?.off ?? (
            <svg
              className="h-3 w-3 fill-current text-white"
              viewBox="0 0 12 12"
            >
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          )}
        </span>
      </span>
    </Switch>
  )
}
