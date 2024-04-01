import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Topbar = ({ children, className, ...props }: ComponentProps<'header'>) => {
  return (
    <header className={twMerge('h-8 w-screen fixed top-0', className)} {...props}>
      {children}
    </header>
  )
}

export const Sidebar = ({ children, className, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('w-12 overflow-auto', className)} {...props}>
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)
Content.displayName = 'Content'
