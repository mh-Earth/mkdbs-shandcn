'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from 'react'
import { CopyIcon } from "lucide-react"
import { cn } from "./utils"
import { useToast } from "@/components/ui/use-toast"


const CopyPovider = React.forwardRef(({ className, tooltip, children, ...props }, ref) => {
    const { toast } = useToast()

    const copy = () =>{
        navigator.clipboard
        .writeText(children)
        .then(() => {
            toast({
                title: "Copied!",
                description: `'${children}' copied to clipboard`,
              })
            })
            .catch(() => {
                toast({
                    variant:"destructive",
                    title: "Couldn't copy",
                    description: `Failed to copy 😰😰`,
                  })
        });
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild onClick={copy}>
                    <CopyIcon className={cn('w-3 h-3 cursor-pointer', className)}  {...props}>
                    </CopyIcon>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )

})

export default CopyPovider;