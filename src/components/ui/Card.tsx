function cn(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export default function Card({
  header = undefined,
  footer = undefined,
  children,
  className = '',
}: CardProps) {
  return (
    <div className={cn(className, 'relative flex flex-1 flex-col')}>
      {header && (
        <>
          <div className="w-full bg-gray-800">{header}</div>
        </>
      )}

      <div className="h-full w-full bg-gray-600 px-2 py-4 sm:p-8">
        {children}
      </div>

      {footer && <div className="w-full bg-gray-800">{footer}</div>}
    </div>
  )
}
