import * as z from "zod"

const ContactValidation = z.object({
    name:z.string().min(3,{message:"Too short"}).max(32),
    email:z.string().email({message:"Invalid email address"}),
    message:z.string().min(10,{message:"Too short"}).max(2024,{message:"Too Big"})


})

export {ContactValidation}