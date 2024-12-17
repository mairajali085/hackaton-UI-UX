'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] bg-[#FFF8E7] overflow-hidden">
      <div className="container h-full flex flex-col md:flex-row items-center justify-center md:justify-between py-12 md:py-0">
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Rocket single seater
          </h1>
          <Button 
            className="rounded-none" 
            variant="outline"
            onClick={() => router.push('/shop')}
          >
            Shop Now
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"
            alt="Rocket single seater chair"
            className="w-full max-w-md md:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}


