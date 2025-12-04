import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import CountUp from "@/lib/countup"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f2f7] overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-[100%] min-h-screen">
        <Image src="/images/vector-201.png" alt="background" fill className="object-cover" quality={100} />
      </div>

      <nav className="
    fixed right-0 left-0 top-0 z-40 flex items-center justify-between
    px-4 md:px-8 lg:px-16 xl:px-24 py-4

    border-b border-[#CCCCCC]
    backdrop-blur-[20%]

    bg-[linear-gradient(89.85deg,rgba(204,204,204,0)_0%,rgba(255,255,255,0.6)_50%,rgba(204,204,204,0)_100%)]
  ">
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            <Link href="#" className="text-[#000000CC] hover:text-black transition">
              Home
            </Link>
            <Link href="#" className="text-[#000000CC] hover:text-black transition">
              Services
            </Link>
            <Link href="#" className="text-[#000000CC] hover:text-black transition">
              Pricing
            </Link>
          </div>
        </div>

        <div>
          <Link href="/" className="text-2xl font-bold text-[#232325]">
            <Image
              src="/images/Logo.png"
              alt="Robot hand holding glowing Earth"
              width={100}
              height={100}
              className="w-full h-full object-contain drop-shadow-2xl"
              quality={100}
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-[#000000CC] hover:text-[#090909] transition text-sm font-medium">
            Log In
          </Link>
          <Button variant="darkGradient" size="md">Try for free</Button>
        </div>
      </nav>

      <div className="pt-36 px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center w-full overflow-y-auto">
        <div className="w-full lg:w-1/2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col text-center lg:text-left justify-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#00000080] leading-tight uppercase">Human Insight <br /> <span className="inline-block w-8 md:w-12 lg:w-14">
                <Image
                  src="/images/x.png"
                  alt="Robot hand holding glowing Earth"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  quality={100}
                />
              </span> AI <span className="font-glitch font-medium text-black">Speed</span> </h1>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-[#00000080] font-medium leading-relaxed">
              Achieve unmatched velocity in your workflow <br /> without ever compromising on strategic quality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 mb-16 md:mb-24">
              <Button variant="darkGradient"
                size="md">
                Try for free <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="white"
                size="md"
              >
                How it works
              </Button>
            </div>

            {/* Stats Section */}
            <div className="">
              <p className="text-sm md:text-base font-semibold tracking-[4px] md:tracking-[6px] mb-8 bg-linear-to-r from-black to-black/30 bg-clip-text text-transparent">
                BACKED BY NUMBERS
              </p>


              <div className="grid grid-cols-3 gap-5 md:gap-12">
                <div>
                  <p className="text-sm md:text-base text-[#00000080] mb-2">total users</p>
                  <p className="font-inter text-2xl md:text-5xl font-bold bg-linear-to-r from-black to-black/25 bg-clip-text text-transparent">
                    <CountUp end={500} suffix=" K+" />
                  </p>
                </div>

                <div>
                  <p className="text-sm md:text-base text-[#00000080] mb-2">total downloads</p>
                  <p className="font-inter text-2xl md:text-5xl font-bold bg-linear-to-r from-black to-black/25 bg-clip-text text-transparent">
                    <CountUp end={6} suffix=" M+" />
                  </p>
                </div>

                <div>
                  <p className="text-sm md:text-base text-[#00000080] mb-2">average grow</p>
                  <p className="font-inter text-2xl md:text-5xl font-bold bg-linear-to-r from-black to-black/25 bg-clip-text text-transparent">
                    <CountUp end={38} suffix="%" />
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="absolute top-28 right-0 hidden lg:flex items-center justify-center">
          <Image
            src="/images/hand-globe.png"
            alt="Robot hand holding glowing Earth"
            width={1000}
            height={1000}
            className="w-full h-full object-contain drop-shadow-2xl"
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
