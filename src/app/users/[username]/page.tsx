import CardList from '@/components/CardList'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Candy, Shield, Truck } from 'lucide-react'
import React from 'react'
import { Badge } from '@/components/ui/badge';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'

export default function singleUsersPage() {
  return (
    <div>
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>Mwangi</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
            {/* container */}
        <div className='mt-4 flex flex-col xl:flex-row gap-8'>
            {/* LEFT */}
            <div className='w-full xl:w-1/3 space-y-6'>
            {/* userBadges Container */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                <h1 className='text-xl font-semibold'>User Badges</h1>
                <div className='flex gap-4 mt-4'>
                <HoverCard>
                <HoverCardTrigger><BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2' /></HoverCardTrigger>
                <HoverCardContent>
                    <h1 className='font-bold mb-2'>Verified User</h1>
                    <p className='text-sm text-muted-foreground'>This User has been verified by the admin</p>
                </HoverCardContent>
            </HoverCard>
                <HoverCard>
                <HoverCardTrigger><Truck size={36} className='rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2' /></HoverCardTrigger>
                <HoverCardContent>
                    <h1 className='font-bold mb-2'>Verified Driver</h1>
                    <p className='text-sm text-muted-foreground'>This Driver has been verified by the admin</p>
                </HoverCardContent>
            </HoverCard>
                <HoverCard>
                <HoverCardTrigger><Candy size={36} className='rounded-full bg-red-500/30 border-1 border-red-500/50 p-2' /></HoverCardTrigger>
                <HoverCardContent>
                    <h1 className='font-bold mb-2'>Verified Admin</h1>
                    <p className='text-sm text-muted-foreground'>This Admin has been verified by the admin</p>
                </HoverCardContent>
            </HoverCard>
                <HoverCard>
                <HoverCardTrigger><Shield size={36} className='rounded-full bg-purple-500/30 border-1 border-purple-500/50 p-2' /></HoverCardTrigger>
                <HoverCardContent>
                    <h1 className='font-bold mb-2'>Verified developer</h1>
                    <p className='text-sm text-muted-foreground'>This developer has been verified by the admin</p>
                </HoverCardContent>
            </HoverCard>
                </div>
            </div>
            {/* Information Container */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>User Indormation</h1>
                <Sheet>
                    <SheetTrigger asChild><Button>Edit Profile</Button></SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                </div>
                
                <div className='space-y-4 mt-4'>
                    <div className='flex flex-col gap-2 mb-8'>
                        <p className='text-sm text-muted-foreground'>Profile Completion</p>
                    </div>
                    <Progress value={66} />
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Username:</span>
                        <span>Joe.Mwangi</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>email:</span>
                        <span>mwangi123@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Location:</span>
                        <span>Nairobi, Ke</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Role:</span>
                        <Badge>Senior Software Engineer</Badge>
                    </div>
                    <p className='text-sm text-muted-foreground mt-4'>Joined on 25/06/25</p>
                </div>
            </div>
            {/* CardList Container */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                <CardList title="Recent Transactions"/>
            </div>
            </div>


            {/* Right */}
            <div className='w-full xl:w-2/3 space-y-6'>
            {/* User Card Container */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                Cardlist 2
            </div>
            {/* Chart Container */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                Chart
            </div>
            </div>
        </div>
    </div>
  )
}
