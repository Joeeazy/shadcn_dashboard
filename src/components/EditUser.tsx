"use client";

import {
   
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    
  } from "@/components/ui/sheet"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button";

const formSchema = z.object({
  username: z.string().min(2, {message: "Username must be at least 2 Characters!"}).max(50),
  email: z.string().email({message: "Invalid Email address!"}),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(["Admin", "User"]),
})

export default function EditUser() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        username: "Joe.Mwangi",
        email: "mwangi123@gmail.com",
        phone: "+254705045861",
        location: "Nairobi, Ke",
        role: "Admin"
        },
    })

  return (
    <SheetContent className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                        <SheetTitle className="mb-4">Edit User</SheetTitle>
                        <SheetDescription asChild>
                        <Form {...form}>
                            <form className="space-y-8">
                            <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription> */}
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display email.
                                </FormDescription> */}
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Only verified users can be admin
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display Location.
                                </FormDescription> */}
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Role</FormLabel>
                                <FormControl>
                                <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Role" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="user">User</SelectItem>
                              </SelectContent>
                            </Select>
            
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display Role.
                                </FormDescription> */}
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type='submit'>Submit</Button>
                            </form>
                        </Form>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
  )
}
