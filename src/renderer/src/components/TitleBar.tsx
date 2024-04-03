import { ComponentProps } from 'react'
import { SlLayers } from 'react-icons/sl'
import { VscMenu } from 'react-icons/vsc'
import { twMerge } from 'tailwind-merge'

export const TitleBar = ({ className, ...props }: ComponentProps<'header'>) => {
  return (
    <header className={twMerge('absolute top-0 h-8 w-full', className)} {...props}>
      <div className="h-8 flex flex-row text-sky-200/70 text-sm overflow-hidden">
        <div className="flex items-center flex-grow flex-shrink w-full h-full overflow-hidden select-none justify-start">
          <div id="titlebar-draggable"></div>
          <div className="flex items-center h-full grow-[2] justify-start -order-none w-[20%]">
            <span className="px-2">
              <VscMenu />
            </span>{' '}
            Bussines Accounting
          </div>
          <div className="flex items-center h-full justify-center mx-2 max-w-fit min-w-0 order-1 w-[60%]">
            {/*  */}
            <div>Center Content</div>
          </div>
          <div className="flex items-center h-full grow-[2] justify-end min-w-min order-2 w-[20%]">
            <div className="flex justify-end flex-grow-0 flex-shrink-0 relative text-center z-[2500] h-full ml-auto min-w-7">
              <button className="hover:bg-slate-600/50 px-4" title="Settings">
                <span>
                  {/* <VscGear /> */} <SlLayers />
                </span>
              </button>
            </div>
            <div className="flex flex-grow-0 flex-shrink-0 text-center z-[3000] h-full w-[138px]"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
