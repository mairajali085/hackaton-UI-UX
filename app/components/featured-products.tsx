'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "1",
    title: "Modern Side Table",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lkZSUyMHRhYmxlfGVufDB8fDB8fHww",
  },
  {
    id: "2",
    title: "Comfortable Sofa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
  },
]

export function FeaturedProducts() {
  const router = useRouter()

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="space-y-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-square object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-lg sm:text-xl font-medium">{product.title}</h3>
                <Button 
                  variant="link" 
                  className="underline"
                  onClick={() => router.push(`/product/${product.id}`)}
                >
                  View More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

