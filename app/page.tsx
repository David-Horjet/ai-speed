import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f2f7] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/vector-201.png" alt="background" fill className="object-cover" quality={100} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-[#232325]">
            ✕
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="#" className="text-[#232325] hover:text-[#090909] transition">
              Home
            </Link>
            <Link href="#" className="text-[#232325] hover:text-[#090909] transition">
              Services
            </Link>
            <Link href="#" className="text-[#232325] hover:text-[#090909] transition">
              Pricing
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-[#232325] hover:text-[#090909] transition text-sm font-medium">
            Log In
          </Link>
          <Button className="bg-[#090909] text-white hover:bg-[#232325] rounded-full">Try for free</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-bold text-[#232325] leading-tight">HUMAN INSIGHT</h1>
              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-6xl font-bold text-[#090909]">×</span>
                <div className="relative">
                  <h1 className="text-4xl md:text-6xl font-bold text-[#cccccc]">AI</h1>
                  {/* Strikethrough text effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl md:text-6xl font-black text-[#090909] transform -skew-x-12 leading-none">
                      SPEED
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-[#556B7D] leading-relaxed max-w-md">
              Achieve unmatched velocity in your workflow without ever compromising on strategic quality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-[#090909] text-white hover:bg-[#232325] rounded-full px-8 py-3 text-base">
                Try for free →
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#232325] text-[#232325] hover:bg-[#232325] hover:text-white rounded-full px-8 py-3 text-base bg-transparent"
              >
                How it works
              </Button>
            </div>

            {/* Stats Section */}
            <div className="pt-8 border-t border-[#cccccc]">
              <p className="text-xs md:text-sm font-semibold text-[#556B7D] tracking-widest mb-6">BACKED BY NUMBERS</p>
              <div className="grid grid-cols-3 gap-6 md:gap-12">
                <div>
                  <p className="text-sm text-[#556B7D] mb-2">total users</p>
                  <p className="text-3xl md:text-4xl font-bold text-[#090909]">500 K+</p>
                </div>
                <div>
                  <p className="text-sm text-[#556B7D] mb-2">total downloads</p>
                  <p className="text-3xl md:text-4xl font-bold text-[#090909]">6 M+</p>
                </div>
                <div>
                  <p className="text-sm text-[#556B7D] mb-2">average grow</p>
                  <p className="text-3xl md:text-4xl font-bold text-[#090909]">38%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-[600px] flex items-center justify-center">
            <Image
              src="/images/hand-globe.png"
              alt="Robot hand holding glowing Earth"
              width={500}
              height={500}
              className="w-full h-full object-contain drop-shadow-2xl"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
