import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({href, children}) {
    const pathname = usePathname();
    console.log(pathname.startsWith(href));

  return <Link className={`${pathname.startsWith(href) && "bg-sky-600 py-1 px-3 rounded" }`} href={href}> {children} </Link>
}

export default NavLink
