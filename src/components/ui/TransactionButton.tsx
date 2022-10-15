type Requirement = {
  requirement: boolean
  message?: string
}

interface TransactionButtonProps {
  method: any
  args?: any[]
  name?: string
  requirement?: Requirement
  children?: React.ReactNode
  className?: string
  color?: 'default' | 'blue' | 'green' | 'red' | 'yellow' | 'pink' | 'gray'
  size?: 'xs' | 'sm' | 'lg' | 'md' | 'full' | 'none'
  ref?: React.Ref<HTMLButtonElement>
}

const SIZE = {
  xs: 'p-1 text-xs  ',
  sm: 'p-2 text-sm  ',
  md: 'p-3 text-base ',
  lg: 'p-5 text-lg ',
  full: 'p-3 text-base ',
  none: '',
}

const COLORS = {
  default: '',
  blue: 'bg-blue-500 ',
  green: 'bg-green-500 ',
  red: 'bg-red-500 ',
  yellow: 'bg-yellow-500 ',
  pink: 'bg-pink-500',
  gray: 'bg-gray-500 ',
}
export default function TransactionButton({
  method,
  args = [],
  name,
  requirement,
  className = '',
  color = 'default',
  size = 'full',
  ...rest
}: TransactionButtonProps) {
  return (
    <button
      className={[
        COLORS[color],
        SIZE[size],
        'inline-flex w-full items-center justify-center gap-1 rounded text-white transition focus:outline-none enabled:drop-shadow-md hover:enabled:brightness-125 disabled:cursor-not-allowed disabled:bg-opacity-20 disabled:text-opacity-60  ',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
      disabled={
        (typeof requirement !== 'undefined' &&
          requirement.requirement === false) ||
        method.state.status !== 'None'
      }
      onClick={() => {
        method.send(...args).then(() => {
          method.state.status === 'None' && method.resetState()
        })
      }}
      {...rest}
    >
      {typeof requirement !== 'undefined' && requirement.requirement === false
        ? requirement.message ?? name
        : method.state.status === 'None'
        ? name
        : 'Loading...'}
    </button>
  )
}
