'use client'

import Image from 'next/image'
import React from 'react'
import logo from "@/public/Images/logo.png"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Separator } from './ui/separator'
import { ArrowRightCircle, Facebook, Menu, Twitter, X } from 'lucide-react'
import { ThemeToggle } from './Theme-toggle'
import { ScrollArea } from './ui/scroll-area'

const Navber = () => {
    return (
        <>
            <NavigationMenu className='hidden md:flex items-center justify-around list-none text-lg min-w-full'>

                {/* Logo */}
                <Link href={"/"}>
                    <div className='flex items-center gap-3'>
                        <Image src={logo} width={'60'} height={"60"} />
                        <p className='text-2xl font-semibold'>MKDBS</p>
                    </div>
                </Link>

                {/* Navigation items */}
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>WHAT WE ARE</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[800px] md:grid-cols-[.75fr_1fr_1fr]">
                                <li className='row-span-3'>
                                    <NavigationMenuLink asChild>
                                        <Link href={"/"} className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"'>
                                            <div className="relative h-16 w-16">
                                                <Image src={logo} fill className='object-contain' />
                                            </div>
                                            <div className="mb-2 mt-4 text-lg font-medium">MKDBS</div>
                                            <div className="text-sm leading-tight text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae itaque quos consequuntur quis eum.</div>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                {["Women development", "Child Education", "Child something", "Women development", "Child Education", "Child something"]
                                    .map((e) => {
                                        return (

                                            <ListItem href="/" title={e}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolore.
                                            </ListItem>
                                        )
                                    })
                                }

                            </ul>


                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>OUR WORKS</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="flex gap-3 p-3 md:flex-row flex-col ">

                                {[1, 2, 3].map((e) => {
                                    return (<>

                                        <div className="flex flex-col h-full w-fit md:min-w-[240px] lg:min-w-[290px] ">
                                            <Link href={"/"}>

                                                <h1 className='text-lg p-3 font-semibold hover:underline'>VGD pro {e}</h1>
                                            </Link>
                                            <ListItem title="Agenda" href="/" >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, et?
                                            </ListItem>
                                            <ListItem title="Events" href="/" >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro
                                            </ListItem>
                                            <ListItem title="Showcase" href="/" className="flex justify-between w-full items-center" >
                                                <ArrowRightCircle></ArrowRightCircle>
                                            </ListItem>
                                        </div>
                                        {/* <Separator orientation="v"/> */}
                                    </>)
                                })}

                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>UPDATES</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="flex gap-3 p-3 md:flex-row flex-col ">

                                {[1, 2, 3].map((e) => {
                                    return (<>

                                        <div className="flex flex-col w-fit md:min-w-[240px] lg:min-w-[290px] ">
                                            <Link href={"/"}>
                                                <h1 className='text-lg p-3 font-semibold hover:underline '>Update on VGD {e}</h1>
                                            </Link>
                                            <ListItem title="Progress" href="/" >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, et?
                                            </ListItem>
                                            <ListItem title="Events" href="/" >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro
                                            </ListItem>
                                            <ListItem title="Notice" href="/" className="flex w-full justify-between items-center" >
                                                <ArrowRightCircle></ArrowRightCircle>
                                            </ListItem>
                                        </div>
                                    </>)
                                })}

                            </div>

                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/"} legacyBehavior>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                CONTACT US
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/"} legacyBehavior>
                            <NavigationMenuLink className={`bg-primary/80 hover:bg-primary mx-2 text-background hover:text-background cursor-pointer  ${navigationMenuTriggerStyle()}`}>
                                DONATE
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                {/* Mode toggel */}
                <ThemeToggle />
                {/*  */}
            </NavigationMenu>
            {/* sm screen navber */}
            <nav className='w-full flex justify-between items-center md:hidden'>
                <Link href={"/"}>
                    <div className='flex items-center gap-3'>
                        <Image src={logo} width={'60'} height={"60"} />
                        <p className='font-semibold text-2xl'>MKDBS</p>
                    </div>
                </Link>
                <div className="flex gap-3 mx-2">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger>
                            <Menu className='h-9 w-9' />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>

                                    <div className='flex items-center gap-3 my-4'>
                                        <Image src={logo} width={'50'} height={"50"} />
                                        <div className="w-full text-left leading-tight">
                                            <Link href={"/"}>
                                                <p className="font-semibold text-lg leading-tight">MKDBS</p>
                                                <p className='text-muted-foreground leading-tight font-normal text-sm'>Mohila kormo songtha o darridro bimocon songthan</p>
                                            </Link>
                                        </div>
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <ScrollArea className='h-[71vh]'>

                                <Accordion type='single' collapsible className='w-full'>
                                    <AccordionItem className="border-none" value="item1">
                                        <AccordionTrigger className="text-lg hover:no-underline">WHAT WE ARE</AccordionTrigger>
                                        <AccordionContent>
                                            {['MKDBS', 'Woman development', 'Childrend Education'].map((e, index, _) => {
                                                return (
                                                    <>
                                                        <AccordionList href={'/'} title={e} className="my-3">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur praesentium quos? In.z
                                                        </AccordionList>

                                                        {index + 1 !== _.length ? <Separator className='my-3' /> : ''}
                                                    </>
                                                )
                                            })}
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem className="border-none" value="item2">
                                        <AccordionTrigger className="text-lg hover:no-underline" >OUR WORKS</AccordionTrigger>
                                        <AccordionContent>
                                            {[1, 2, 3].map((e, index, _) => {

                                                return (
                                                    <>
                                                        <AccordionList title={`VGD pro ${e}`} href="/">
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, amet.
                                                        </AccordionList>
                                                        {index + 1 !== _.length ? <Separator className='my-3' /> : ''}

                                                    </>

                                                )

                                            })}
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem className='border-none' value="item3">
                                        <AccordionTrigger className="text-lg hover:no-underline">UPDATES</AccordionTrigger>
                                        <AccordionContent>

                                            {[1, 2, 3, 2, 3, 4, 5].map((e, index, _) => {
                                                return (
                                                    <>
                                                        <AccordionList title={`update on VGD pro ${e}`} href="/">
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, amet.
                                                        </AccordionList>
                                                        {index + 1 !== _.length ? <Separator className='my-3' /> : ''}
                                                    </>
                                                )
                                            })}
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem className="border-none" value="item4">
                                        <AccordionTrigger className="text-lg hover:no-underline">
                                            <Link href="/">
                                                CONTACT US
                                            </Link>
                                        </AccordionTrigger>
                                    </AccordionItem>
                                    <AccordionItem className="border-none" value="item5">
                                        <AccordionTrigger className="text-lg hover:no-underline bg-primary/90 rounded-md w-fit">
                                            <Link href="/">
                                                DONATE NOW
                                            </Link>
                                        </AccordionTrigger>
                                    </AccordionItem>
                                </Accordion>
                            </ScrollArea>


                            <SheetFooter className={cn("bottom-0 my-3")}>
                                <div className="flex gap-5 items-start text-lg">
                                    <Link href={"/"}>
                                        <Facebook className='h-7 w-7'></Facebook>
                                    </Link>
                                    <Link href={"/"}>
                                        <Twitter className='h-7 w-7'></Twitter>
                                    </Link>
                                    <Link href={"/"}>
                                        <X className='h-7 w-7'></X>
                                    </Link>
                                </div>
                            </SheetFooter>
                        </SheetContent>

                    </Sheet>
                </div>

            </nav>
        </>

    )
}
export default Navber


const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-tight no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})

const AccordionList = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <Link ref={ref} className={cn("my-3", className)}  {...props}>
            <p className={'font-semibold'}>{title}</p>
            <p className={"text-muted-foreground text-sm leading-tight"}>
                {children}
            </p>
        </Link>
    )

})
