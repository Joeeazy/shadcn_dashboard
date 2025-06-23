"use client"

import { CirclePlus, LogOut, Settings, Moon, Sun, User2Icon} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {  } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className='p-4 flex justify-between items-center'>
      {/* left side */}
      collapsebutton
      {/* right side */}
      <div className='flex items-center gap-4'>
      <Link href="/">Dashboard</Link>
      {/* Theme Menu */}
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      {/*Use Profile Menu */}
      <DropdownMenu>
  <DropdownMenuTrigger><Avatar>
      <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar></DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><User2Icon className='h-[1.2rem] w-[1.2rem] mr-2' />Profile</DropdownMenuItem>
    <DropdownMenuItem> <CirclePlus className='h-[1.2rem] w-[1.2rem] mr-2' /> Add another account</DropdownMenuItem>
    <DropdownMenuItem><Settings className='h-[1.2rem] w-[1.2rem] mr-2' /> Settings</DropdownMenuItem>
    <DropdownMenuItem variant='destructive'><LogOut className='h-[1.2rem] w-[1.2rem] mr-2' /> Logout</DropdownMenuItem>
  </DropdownMenuContent>
      </DropdownMenu>
      </div>
      
    </nav>
  )
}
