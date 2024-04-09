import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { Bills, Client, Incomes, Payroll, Proration, Reports, Settings, Taxes } from './Icons'

export const NavList = ({ className, ...props }: ComponentProps<'nav'>) => {
  const navlinks = [
    {
      icon: <Client />,
      text: 'Cliente',
      linkPath: '/cliente'
    },
    {
      icon: <Incomes />,
      text: 'Ingresos',
      linkPath: '/ingresos'
    },
    {
      icon: <Bills />,
      text: 'Gastos',
      linkPath: '/gastos'
    },
    {
      icon: <Payroll />,
      text: 'Nómina',
      linkPath: '/nomina'
    },
    {
      icon: <Taxes />,
      text: 'Tributos',
      linkPath: '/tributos'
    },
    {
      icon: <Proration />,
      text: 'Prorrateo',
      linkPath: '/prorrateo'
    },
    {
      icon: <Reports />,
      text: 'Reportes',
      linkPath: '/reportes'
    }
  ]

  return (
    <nav className="h-full flex flex-col justify-between" {...props}>
      <div>
        {navlinks.map((navLink) => (
          <div
            key={navLink.linkPath}
            className="hover:bg-slate-700/50 text-center flex items-center justify-center"
          >
            <Link
              to={navLink.linkPath}
              className="text-center py-3 flex flex-col items-center gap-1 font-sans text-sm text-slate-300/50 hover:text-slate-200"
            >
              <span>{navLink.icon}</span> <span>{navLink.text}</span>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <div className="hover:bg-slate-700/50 text-center flex items-center justify-center">
          <Link
            to={`/configuracion`}
            className="text-center py-3 flex flex-col items-center gap-1 font-sans text-sm text-slate-300/50 hover:text-slate-200"
          >
            <span>
              <Settings />
            </span>{' '}
            <span>Config</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
