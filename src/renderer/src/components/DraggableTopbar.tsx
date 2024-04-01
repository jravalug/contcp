import { ComponentProps } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { twMerge } from 'tailwind-merge'

export const DraggableTopbar = ({ className, ...props }: ComponentProps<'header'>) => {
  return (
    <header className={twMerge('absolute inset-0 h-8', className)} {...props}>
      <div className="h-full flex items-center justify-between">
        <div className="pl-4">ConTCP</div>
        <div className="flex flex-row h h-full">
          <button className="px-3 hover:bg-red-500">
            <VscChromeClose />
          </button>
        </div>
      </div>
    </header>
  )
}
