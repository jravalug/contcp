import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { Bills, Incomes, Reports, Taxes } from './Icons'

export const NavList = ({ className, ...props }: ComponentProps<'nav'>) => {
  const navlinks = [
    {
      icon: <Bills />,
      text: 'Gastos',
      linkPath: '/gastos'
    },
    {
      icon: <Incomes />,
      text: 'Ingresos',
      linkPath: '/ingresos'
    },
    {
      icon: <Taxes />,
      text: 'Tributos',
      linkPath: '/tributos'
    },
    {
      icon: <Reports />,
      text: 'Reportes',
      linkPath: '/reportes'
    }
  ]

  return (
    <nav className="" {...props}>
      {navlinks.map((navLink) => (
        <div
          key={navLink.linkPath}
          className="hover:bg-slate-700/50 text-center flex items-center justify-center"
        >
          <Link
            to={navLink.linkPath}
            className="text-center py-4 flex flex-col items-center gap-1 font-sans text-sm text-slate-300/50 hover:text-slate-200"
          >
            <span>{navLink.icon}</span> <span>{navLink.text}</span>
          </Link>
        </div>
      ))}
    </nav>
  )
}
