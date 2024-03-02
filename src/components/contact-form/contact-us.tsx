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
import { Button, buttonVariants } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Check, Copyright, Dribbble, Facebook, Github, Instagram, Linkedin, RotateCw, Twitter } from 'lucide-react';
import Link from 'next/link';

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

export default function HomeContactForm() {
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
    <div className="bg-white contactSection py-12 lg:py-24 contactSection">
      <div className="container flex flex-col md:flex-row w-full gap-10 xl:gap-20 items-center">
        <div className="w-full lg:w-1/2 xl:pr-20 flex gap-6 flex-col items-start">
          <h2 className="text-4xl lg:text-5xl lg:text-6xl font-bold capitalize">
            Get in touch with <br className="hidden lg:flex"></br>our <span className="text-ssPrimary">Team</span>
          </h2>
          <h3 className="text-xl font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, hic!
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, rerum doloremque. Sequi nesciunt molestiae
            ducimus at perferendis doloribus similique amet quisquam? Iste suscipit nulla reprehenderit!
          </p>
          <p className="text-lg hidden lg:flex">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, rerum doloremque. Sequi nesciunt molestiae
            ducimus at perferendis doloribus similique amet quisquam? Iste suscipit nulla reprehenderit!
          </p>
        </div>
        <div className="w-[95%] lg:w-[45%] py-6 bg-gray-100 rounded-md text-start relative z-10 flex flex-col items-center">
          <div className="w-[90%]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 flex flex-col items-center justify-center text-primary"
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
                        <Input placeholder="Business Name" {...field} className="rounded-sm bg-white drop-shadow-xl" />
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
                  className="h-12 w-48 drop-shadow-xl bg-ssPrimary rounded-lg text-xl hover:bg-ssPrimaryDark"
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
    </div>
  );
}
