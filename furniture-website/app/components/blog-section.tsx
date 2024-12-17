'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Clock, Calendar } from 'lucide-react'
import type { BlogPost } from '../types'


const posts: BlogPost[] = [
  {
    id: "1",
    title: "Modern minimalist design trends",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMGludGVyaW9yfGVufDB8fDB8fHww",
    date: "07 Oct 2023",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Choosing the perfect sofa for your living room",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYSUyMGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
    date: "15 Oct 2023",
    readTime: "7 min",
  },
  {
    id: "3",
    title: "Incorporating natural elements in your home decor",
    image: "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbCUyMGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
    date: "22 Oct 2023",
    readTime: "6 min",
  },
]

export function BlogSection() {
  const router = useRouter()

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container space-y-8 sm:space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Blogs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group space-y-4 cursor-pointer" onClick={() => router.push(`/blog/${post.id}`)}>
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium group-hover:underline">{post.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="rounded-none"
            onClick={() => router.push('/blog')}
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}

