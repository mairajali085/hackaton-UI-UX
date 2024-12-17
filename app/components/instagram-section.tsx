'use client'

import { Button } from "@/components/ui/button"

export function InstagramSection() {
  const handleFollowClick = () => {
    window.open('https://www.instagram.com/your_store_account', '_blank')
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Instagram</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Follow our store on Instagram</p>
        <Button 
          variant="outline" 
          className="rounded-none"
          onClick={handleFollowClick}
        >
          Follow Us
        </Button>
      </div>
    </section>
  )
}

