import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CopyPovider from '@/lib/copyPovider'
import ContactForm from '@/components/Contact-Form'

const Contact = () => {

  return (
    <div>
      <h1 className='w-fit mx-auto text-2xl underline-offset-2 underline font-semibold my-5 tracking-wide'>Contact Us</h1>
      <Tabs defaultValue="main" className="md:container p-5 md:min-w-max max-w-xl py-8 mx-1 md:mx-auto my-5 rounded-md border bg-primary-foreground md:m-auto">
        <TabsList className="w-full justify-around">
          <TabsTrigger value="main">Main Office</TabsTrigger>
          <TabsTrigger value="dhaka">Dhaka</TabsTrigger>
          <TabsTrigger value="joypurhat">Joypurhat</TabsTrigger>
        </TabsList>
        {['Main', 'Dhaka', 'Joypurhat'].map((e) => {
          return (
            <TabsContent value={e.toLocaleLowerCase()} className='p-3'>
              <p className='font-semibold text-xl my-1'>{e} office</p>
              <div className="text-muted-foreground leading-relaxed">

                <p>&nbsp; Address: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non?</p>
                <p>&nbsp; Mobile:01789491587</p>
                <p className='inline-flex gap-3 items-center'>&nbsp; Email:farjanaarfin@gmail.com
                  <CopyPovider tooltip="Copy" className="text-withe">farjanaarfin@gmail.com</CopyPovider>
                </p>
                <p>&nbsp; Maneger:Abdus salam</p>
                <p>&nbsp; Time:10:00 AM - 05:00 PM</p>
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
      <h1 className='w-fit mx-auto text-2xl underline-offset-2 underline font-semibold my-5 tracking-wide'>Message Us</h1>
      <div className="container p-2 md:max-w-3xl">
        <ContactForm/>
      </div>
    </div>
  )
}
export default Contact



