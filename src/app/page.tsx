
import Image from "next/image";
import Circle from "@/assets/shape.png";
import HeroImg from "@/assets/undraw_done_checking_re_6vyx 1.svg";

import Link from "next/link";

export default function Home() {
  return (
    <section className="relative px-6 h-screen">
      <Image src={Circle} alt="" className="absolute top-0 left-0" />

      <main className="pt-[10rem] flex flex-col items-center gap-[4rem]">
        <div className=" flex flex-col items-center justify-center gap-4  text-center">
          <Image src={HeroImg} alt="" />
          <h1 className="font-bold">Gets things done with TODOs</h1>
          <p className="w-1/2 text-[13px] text-black/80">
            Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
            Consequat urna quam felis interdum quisque. Malesuada adipiscing
            tristique ut eget sed.
          </p>
        </div>

        <Link
          className="w-full mb-6  bg-[#50C2C9] rounded-lg py-4 text-lg font-semibold text-white text-center"
          href="/auth/signup"
        >
          Get Started
        </Link>
      </main>
    </section>
  );
}

// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//     <Image
//       className="dark:invert"
//       src="/next.svg"
//       alt="Next.js logo"
//       width={180}
//       height={38}
//       priority
//     />
//     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//       <li className="mb-2 tracking-[-.01em]">
//         Get started by editing{" "}
//         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//           src/app/page.tsx
//         </code>
//         .
//       </li>
//       <li className="tracking-[-.01em]">
//         Save and see your changes instantly.
//       </li>
//     </ol>

//     <div className="flex gap-4 items-center flex-col sm:flex-row">
//       <a
//         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           className="dark:invert"
//           src="/vercel.svg"
//           alt="Vercel logomark"
//           width={20}
//           height={20}
//         />
//         Deploy now
//       </a>
//       <a
//         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Read our docs
//       </a>
//     </div>
//   </main>
//   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="/file.svg"
//         alt="File icon"
//         width={16}
//         height={16}
//       />
//       Learn
//     </a>
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="/window.svg"
//         alt="Window icon"
//         width={16}
//         height={16}
//       />
//       Examples
//     </a>
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="/globe.svg"
//         alt="Globe icon"
//         width={16}
//         height={16}
//       />
//       Go to nextjs.org →
//     </a>
//   </footer>
// </div>
