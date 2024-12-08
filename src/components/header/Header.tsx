'use client'
import { FiSearch } from "react-icons/fi";
import { PiUser, PiTote } from "react-icons/pi";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Header = () => {
    const navItems = [
        {label: "Home", href: "/"},
        {label: "Menu", href: "/menu"},
        {label: "Blog", href: "/blog"},
        {label: "Pages", href: "/pages"},
        {label: "About", href: "/about"},
        {label: "Shop", href: "/shop"},
        {label: "Contact", href: "/contact"},
    ];
    const pathname = usePathname();

    return (
           <>
            {/* Main Header */}
            <div className="absolute top-0 left-0 text-white w-full flex flex-wrap justify-between items-center py-10 px-4 sm:px-8 lg:px-64 text-sm">
                {/* Logo */}
                <div className="font-bold text-xl sm:text-2xl">Food<span className="text-primary-yellow">tuck</span></div>
                
                {/* Navigation Links */}
                <div className="hidden md:flex gap-4 lg:gap-8">
                    {navItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-6">
                            <Link
                                href={item.href}
                                className={`relative ${
                                    pathname === item.href &&
                                    'text-primary-yellow'
                                }`}
                            >
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>
                
                {/* Icons and Search Bar */}
                <div className="flex flex-1 md:flex-initial justify-between md:justify-end items-center gap-4">
                    {/* Search Input */}
                    
                    {/* Icons */}
                    <div className="flex gap-4">
                        <FiSearch className="text-2xl font-bold cursor-pointer" />
                        <PiUser className="text-2xl font-bold cursor-pointer" />
                        <PiTote className="text-2xl font-bold cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col md:hidden gap-2 items-center mt-2">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={`relative ${
                            pathname === item.href &&
                            'after:absolute after:content-[""] after:-bottom-1 after:left-0 after:w-full after:h-[0.1rem] after:bg-textColor'
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            </>
    );
}

export default Header;
