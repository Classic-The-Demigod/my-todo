'use client';

import Image from "next/image";
import Circle from "@/assets/shape.png";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Button from "@/components/Button";
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
    
      




      toast.success('Account created successfully!');
      router.push('/auth/signin');
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <section className="relative px-6 h-screen">
      <Image src={Circle} alt="" className="absolute top-0 left-0" />

      <main className="pt-[8rem] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-2xl">Welcome to Onboard</h1>
          <p className="w-[80%] text-[13px] text-black/80">
            Let's help to meet up your tasks.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 rounded-full bg-white"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 rounded-full bg-white"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-4 rounded-full bg-white"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="w-full p-4 rounded-full bg-white"
          />
          <Button type="submit" onClick={() => {}}>Register</Button>
        </form>

        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-[#50C2C9] font-semibold">
            Sign in
          </Link>
        </p>
      </main>
    </section>
  );
};

export default SignUp;
