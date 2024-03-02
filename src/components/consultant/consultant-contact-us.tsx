import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import ContactUs from '../../../public/consultant/cons-contact-us.png';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import * as z from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { useRef, useState } from 'react';
// @ts-ignore
import ReactRecaptcha3 from 'react-google-recaptcha3';
import { useForm } from 'react-hook-form';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Check, Copyright, Dribbble, Facebook, Github, Instagram, Linkedin, RotateCw, Twitter } from 'lucide-react';

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3 || '';

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: 'Please include your name',
    })
    .max(150, {
      message: 'Name cannot be more than 150 characters.',
    }),
  email: z
    .string()
    .min(2, {
      message: 'Please include your email',
    })
    .max(254, {
      message: 'Email cannot be more than 254 characters.',
    }),
  businessName: z
    .string()
    .min(2, {
      message: "Please include your business's name",
    })
    .max(254, {
      message: 'Email cannot be more than 254 characters.',
    }),
  message: z
    .string()
    .min(2, {
      message: 'Please include a message',
    })
    .max(1000, {
      message: 'Message number cannot be more than 1000 characters.',
    }),
  token: z.string().optional(),
});

export default function ConsContactUs() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const href = router.pathname;
  const currentYear = new Date().getFullYear();

  const reRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    // Get the captcha token
    ReactRecaptcha3.getToken()
      .then((token: string) => {
        console.log('client side token:', token);

        // Add the captcha token to the form values
        values['token'] = token; // Change the key to match your backend

        // Make the API request
        return axios.post('/api/contact-us', {
          fullName: values.fullName,
          email: values.email,
          businessName: values.businessName,
          message: values.message,
          token: values.token, // pass the reCAPTCHA token to the backend
        });
      })
      .then((res: AxiosResponse<any>) => {
        console.log('This is the res.status', res.status);

        if (res.status === 200) {
          setLoading(false);
          // Reset the form fields to their default values
          form.reset({ fullName: '', email: '', businessName: '', message: '' });
          setSuccess(true);
        } else {
          console.error('Error from API:', res.status, res.statusText);
        }
      })
      .catch((e: Error) => {
        setLoading(false);
        console.error('Error making API request:', e);
      });
  }
  return (
    <div className="bg-white contactSection py-12 lg:py-24">
      <div className="container flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 flex flex-col text-consAccent items-center lg:items-start gap-4">
          <h3 className="border border-consPrimary w-fit text-xl lg:text-2xl text-consPrimary px-2">Lorem ipsum dolor sit amet.</h3>
          <h2 className="text-4xl font-bold text-center md:text-start leading-tight md:text-6xl tracking-wider text-consAccent w-full capitalize drop-shadow-2xl">
            Local Accounting Solutions
          </h2>
          <h2 className="hidden md:flex text-lg text-start leading-tight tracking-wider drop-shadow-2xl w-full capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga qui officia neque explicabo fugit tempore
            nobis exercitationem tempora veniam!
          </h2>
          <div className="w-full bg-consAccent h-1"></div>
          <div className="py-6 bg-gray-100 w-[95%] lg:w-full rounded-md text-start relative z-10 flex flex-col items-center">
            <div className="w-[90%]">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 flex flex-col items-center justify-center text-primary gap-1 lg:gap-2"
                >
                  <ReCAPTCHA ref={reRef} sitekey={recaptchaSiteKey} className="z-100 hidden " />
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="drop-shadow-xl text-xl IOS-black">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} className="rounded-sm bg-white drop-shadow-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="drop-shadow-2xl text-xl IOS-black">Business Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Business Name"
                            {...field}
                            className="rounded-sm bg-white drop-shadow-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="drop-shadow-2xl text-xl IOS-black">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} className="rounded-sm bg-white drop-shadow-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-xl IOS-black">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            className="max-h-48 h-24 bg-white text-black drop-shadow-xl rounded-sm"
                            placeholder="What can we help you with?"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="h-12 w-48 drop-shadow-xl bg-consSecondary rounded-sm text-xl hover:bg-ssPrimaryDark"
                    type="submit"
                    disabled={success}
                  >
                    {success ? (
                      <div>
                        <Check />
                      </div>
                    ) : loading ? (
                      <RotateCw className="animate-spin" />
                    ) : (
                      'Submit'
                    )}
                  </Button>
                  {success && (
                    <div className="text-lg font-bold text-cws-blue text-center w-[80%]">
                      Your form has been successfully submitted and we will get back to your shortly!
                    </div>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col">
          <Image src={ContactUs} alt="TODO"></Image>
        </div>
      </div>
    </div>
  );
}
