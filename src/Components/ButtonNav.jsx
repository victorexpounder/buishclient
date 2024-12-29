'use client'
import * as React from 'react'
import { Home, Logout, MenuBook, Message, Person } from '@mui/icons-material'
import { logout } from '@/Redux/userSlice'
import { useDispatch } from 'react-redux';


export function BottomNav({admin}) {
  const [active, setActive] = React.useState('home');
  const dispatch = useDispatch()
  const navItems = [
    { icon: <Home />, label: 'HOME',  href: admin? '/' : '/admin'},
    { icon: <MenuBook />, label: 'MY COURSES', href: '#' },
    { icon: <Person />, label: 'PROFILE', href: '#' },
    { icon: <Logout />, label: 'LOGOUT', href: '#' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 sm:hidden ">
      <nav className="flex items-center justify-around h-16 px-4 max-w-md mx-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label.toLowerCase())}
            className="flex flex-col items-center justify-center"
          >
            <div
              className={`mb-1 ${
                active === item.label.toLowerCase()
                  ? 'text-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={item.label === 'LOGOUT'? () => dispatch(logout()) : ''}
            >
              {item.icon}
            </div>
            <span
              className={`text-xs ${
                active === item.label.toLowerCase()
                  ? 'text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  )
}

