import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LayoutTemplate, Settings, FileText, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Header */}
      <header className='w-full bg-white shadow-md'>
        <div className='flex justify-between items-center px-1 py-4 mx-auto max-w-5xl'>
          <Image src='logo.svg' alt='Logo' width={120} height={40} />
          <Link href='/dashboard'>
            <Button variant='outline'>Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Main Content with Light Gradient Background */}
      <div className='flex flex-col items-center mx-4 md:mx-56 gap-6 my-1 py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-white'>
        <h1 className='font-extrabold text-[48px] md:text-[60px] text-center'>
          AI Content <span className='text-[#704ef8]'>Generator</span>
        </h1>
        <p className='text-lg md:text-xl text-gray-500 text-center max-w-2xl'>
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <Link href='/dashboard'>
          <Button size='lg' className='bg-[#704ef8] text-white'>Get Started →</Button>
        </Link>
      </div>

      {/* Feature Section */}
      <div className='flex flex-col md:flex-row justify-around items-center gap-8 px-4 md:px-20 py-10 mx-auto max-w-5xl'>
        <div className='text-center'>
          <div className='bg-[#704ef8] rounded-full p-4 inline-block mb-3'>
            <LayoutTemplate className='text-white w-8 h-8' />
          </div>
          <h2 className='font-semibold text-lg'>25+ Templates</h2>
          <p className='text-gray-500'>Responsive, and mobile-first project on the web</p>
          <Link href='/' className='text-[#704ef8]'>Learn more →</Link>
        </div>
        <div className='text-center'>
          <div className='bg-[#704ef8] rounded-full p-4 inline-block mb-3'>
            <Settings className='text-white w-8 h-8' />
          </div>
          <h2 className='font-semibold text-lg'>Customizable</h2>
          <p className='text-gray-500'>Components are easily customized and extendable</p>
          <Link href='/' className='text-[#704ef8]'>Learn more →</Link>
        </div>
        <div className='text-center'>
          <div className='bg-[#704ef8] rounded-full p-4 inline-block mb-3'>
            <FileText className='text-white w-8 h-8' />
          </div>
          <h2 className='font-semibold text-lg'>Free to Use</h2>
          <p className='text-gray-500'>Every component and plugin is well documented</p>
          <Link href='/' className='text-[#704ef8]'>Learn more →</Link>
        </div>
        <div className='text-center'>
          <div className='bg-[#704ef8] rounded-full p-4 inline-block mb-3'>
            <Headphones className='text-white w-8 h-8' />
          </div>
          <h2 className='font-semibold text-lg'>24/7 Support</h2>
          <p className='text-gray-500'>Contact us 24 hours a day, 7 days a week</p>
          <Link href='/' className='text-[#704ef8]'>Learn more →</Link>
        </div>
      </div>
    </div>
  );
}
