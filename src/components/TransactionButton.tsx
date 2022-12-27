import Button, { ButtonProps } from './ui/Button'

type Requirement = {
  requirement: boolean
  message?: string
}

interface TransactionButtonProps extends ButtonProps {
  method: any
  onMethodComplete?: () => void
  args?: any[]
  name?: string
  requirement?: Requirement
}

export default function TransactionButton({
  method,
  onMethodComplete,
  args = [],
  name,
  requirement,
  ...props
}: TransactionButtonProps) {
  return (
    <Button
      disabled={
        (typeof requirement !== 'undefined' &&
          requirement.requirement === false) ||
        method.state.status !== 'None'
      }
      onClick={() => {
        method.send(...args).then(() => {
          if (method.state.status === 'None') {
            method.resetState()
            onMethodComplete && onMethodComplete()
          }
        })
      }}
      {...props}
    >
      {typeof requirement !== 'undefined' && requirement.requirement === false
        ? requirement.message ?? name
        : method.state.status === 'None'
        ? name
        : 'Loading...'}
    </Button>
  )
}
