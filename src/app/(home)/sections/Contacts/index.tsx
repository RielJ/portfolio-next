import { Section } from '@/components'
import clsx from 'clsx'
import React from 'react'
import styles from './Contacts.module.scss'

function Contacts(): JSX.Element {
  return (
    <Section className="gap-[3rem]">
      <div className="overflow-hidden w-full">
        <h1 className="heading">Contact</h1>
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <div>
              Whether you&apos;re interested in working with me or just want to
              say hello, I&apos;d love to hear from you!
            </div>
            <form
              className={clsx(
                styles['contact-form'],
                'flex flex-col space-y-3'
              )}
            >
              <div className={clsx(styles['contact-input'])}>
                <label>Email</label>
                <input placeholder="Email" className="appearance-none" />
              </div>
              <div className={clsx(styles['contact-input'])}>
                <label>Message</label>
                <textarea placeholder="Message" className="appearance-none" />
              </div>
            </form>
          </div>
          <div className="col-span-2">Socials</div>
        </div>
      </div>
    </Section>
  )
}

export { Contacts }
