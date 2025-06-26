"use client";

import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Calendar } from './ui/calendar'
import { Calendar1Icon } from 'lucide-react';
import { Button } from './ui/button';
import { format } from 'date-fns';

export default function TodoList() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)
  return (
    <div>
        <h1 className='text-lg font-medium mb-6'>To do List</h1>
        {/* Calender  */}
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button className='w-full'>
                <Calendar1Icon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0 w-auto'>
        <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
                setDate(date)
                setOpen(false)
            }}
        />
        </PopoverContent>
        </Popover>
        {/* Todolist */}
        <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
            <div className='flex flex-col gap-4'>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1"/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            <Card>
                <div className='flex items-center gap-4'>
                    <Checkbox id="item1" checked/>
                    <label htmlFor='item1' className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet consectetur adipisicinerspiciatis repudiandae, eaque necessitatibus!
                    </label>
                </div>
            </Card>
            </div>
        </ScrollArea>
    </div>
  )
}
