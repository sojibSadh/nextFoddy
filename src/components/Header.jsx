"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import NavLink from './NavLink';

function Header() {
    const pathname = usePathname();
    console.log(pathname);
    if(pathname.startsWith('/dashboard')) return <> emptry </>


    return (
        <div>
            <header className='px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center'>
                <Link href="/" className='text-lg font-semibold'> Dev - Story  </Link>

                <nav className='space-x-5'>
                    <NavLink href="/stories"> Stories </NavLink>
                    <NavLink href="/tutorials"> tutorials </NavLink>
                    <NavLink href="/login"> login </NavLink>
                    <NavLink href="/register"> register </NavLink>
                    <NavLink href="/about"> About </NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header
