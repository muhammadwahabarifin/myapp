/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu'
import { BookOpen, Briefcase, Home, Image, User } from 'lucide-react'
import ModeToggle from './toggle-dark'

const Navbar = () => {
    return (
        <nav className='fixed w-full top-0 z-50 px-4 py-3'>
            <div className='max-w-7xl flex mx-auto items-center justify-center'>
                <div className='flex items-center gap-4'>
                    <NavigationMenu className='hidden md:block'>
                        <NavigationMenuList className='bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10'>
                            <NavigationMenuItem className='px-4'>
                                <NavigationMenuLink
                                    href='#top'
                                    className='text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors'>
                                    <Home className='w-4 h-4' /> <span>Home</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className='px-4'>
                                <NavigationMenuLink
                                    href='#top'
                                    className='text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors'>
                                    <User className='w-4 h-4' /> <span>Benefit</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className='px-4'>
                                <NavigationMenuLink
                                    href='#top'
                                    className='text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors'>
                                    <Briefcase className='w-4 h-4' /> <span>Investors</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className='px-4'>
                                <NavigationMenuLink
                                    href='#top'
                                    className='text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors'>
                                    <BookOpen className='w-4 h-4' /> <span>Testimonials</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className='px-4'>
                                <NavigationMenuLink
                                    href='#top'
                                    className='text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors'>
                                    <Image className='w-4 h-4' /> <span>Faq</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* dark mode */}
                            <ModeToggle />
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;

// export default dynamic(() => Promise.resolve(Navbar), { ssr: false })