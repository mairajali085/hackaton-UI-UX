'use client'

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Search, User, Heart, ShoppingCart, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

const navigation = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchTerm = (e.target as HTMLFormElement).search.value
    console.log(`Searching for: ${searchTerm}`)
    setIsSearchOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-lg">LOGO</Link>
        
        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
                <Input type="search" name="search" placeholder="Search..." className="flex-1" />
                <Button type="submit">Search</Button>
              </form>
            </SheetContent>
          </Sheet>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hidden sm:flex" onClick={() => router.push('/account')}>
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hidden sm:flex" onClick={() => router.push('/wishlist')}>
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" onClick={() => router.push('/cart')}>
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

