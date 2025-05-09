"use client";

import Image from "next/image";
import Circle from "@/assets/shape.png";
import BackToSchool from "@/assets/undraw_back_to_school_inwc 1.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";

const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      toast.success("Signed in successfully!");
      router.push("/dashboard");
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
          <h1 className="font-bold text-2xl">Welcome back</h1>
          <p className="w-[80%] text-[13px] text-black/80">
            Let's help to meet up your tasks.
          </p>
        </div>

        <Image src={BackToSchool} alt="schol" />

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-4 rounded-full bg-white"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-4 rounded-full bg-white"
          />
          <Button type="submit" onClick={() => {}}>
            Sign In
          </Button>
        </form>

        <p className="text-sm">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-[#50C2C9] font-semibold">
            Sign up
          </Link>
        </p>
      </main>
    </section>
  );
};

export default SignIn;
