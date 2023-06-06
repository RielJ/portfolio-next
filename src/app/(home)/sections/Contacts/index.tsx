'use client'
import {
  Button,
  Input,
  Section,
  Textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useToast,
} from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import * as z from 'zod'
import styles from './Contacts.module.scss'
import Image from 'next/image'

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  subject: z.string().min(2, {
    message: 'Subject must be at least 2 characters.',
  }),
  email: z.string().email().min(5, {
    message: 'Email must be at least 5 characters.',
  }),
  message: z.any(),
})

function Contacts(): JSX.Element {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit({
    email,
    name,
    subject,
    message,
  }: z.infer<typeof contactFormSchema>) {
    try {
      setIsLoading(true)
      const res = await fetch('/api/contact', {
        body: JSON.stringify({
          email,
          name,
          subject,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      const { error } = await res.json()
      if (error) {
        console.log(error)
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          variant: 'destructive',
        })
        return
      } else {
        toast({
          title: 'Success!',
          description: 'Your message has been sent.',
        })
      }
    } catch (err) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section className="gap-[3rem]" id="contact">
      <div className="overflow-hidden w-full">
        <h1 className="heading ">Contact</h1>
      </div>
      <div className="grid grid-cols-5 w-full">
        <div className="col-span-5 space-y-5">
          <div className="flex justify-between">
            <div className="md:max-w-xl max-w-md text-left">
              Whether you&apos;re interested in working with me or just want to
              say hello, I&apos;d love to hear from you!
            </div>
            <div className="flex space-x-3 items-center">
              <a href="https://github.com/rielj" target="_blank">
                <FiGithub className="w-6 h-6 cursor-pointer" />
              </a>

              <a href="https://linkedin.com/in/rielj" target="_blank">
                <FiLinkedin className="w-6 h-6 cursor-pointer" />
              </a>

              <a href="mailto: bulaybulay.rielj@gmail.com" target="_blank">
                <FiMail className="w-6 h-6 cursor-pointer" />
              </a>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={clsx(
                styles['contact-form'],
                'flex flex-col space-y-5'
              )}
            >
              <div className="grid grid-cols-2 w-full space-x-5">
                <div className="flex-1 space-y-5 col-span-1">
                  <div className={clsx(styles['contact-input-group'])}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className={clsx(styles['contact-input-group'])}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className={clsx(styles['contact-input-group'])}>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex-1 flex space-x-3 col-span-1">
                  <div
                    className={clsx(
                      styles['contact-input-group'],
                      'w-full h-full'
                    )}
                  >
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="h-full">
                          <FormControl>
                            <Textarea
                              placeholder="Message"
                              className="h-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="h-fit" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                variant="secondary"
                className="mt-4"
                disabled={isLoading}
              >
                {isLoading && (
                  <div className="h-6 w-6">
                    <Image
                      src="/loader.svg"
                      width="32"
                      height="32"
                      alt="loader"
                    />
                  </div>
                )}
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Section>
  )
}

export { Contacts }
