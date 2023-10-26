'use client'

import React from 'react'
import { useForm } from "react-hook-form"
import { ContactValidation } from '@/lib/validations/ContactFormValidation'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from './ui/textarea'
import { useToast } from './ui/use-toast'

const ContactForm = () => {

    const { toast } = useToast()
    const form = useForm({
        resolver: zodResolver(ContactValidation)
    })

    function onSubmit(values) {

        console.log(values)
        toast({
            title: "Message Sent!",
            description: "You message has been sented successfully",
        })
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your name" {...field} />
                            </FormControl>
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
                                <Input placeholder="Enter you email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter you message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="gap-3 flex">

                    <Button variant="default" type="submit">Submit</Button>
                    {/* <Button variant="destructive" type="reset">Reset</Button> */}
                </div>
            </form>
        </Form>

    )
}

export default ContactForm