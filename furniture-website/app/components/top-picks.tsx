'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import type { Product } from '../types'

const products: Product[] = [
  {
    id: "1",
    title: "Tufted modular sofa",
    price: 25000.00,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "2",
    title: "Dining table set",
    price: 25000.00,
    image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "3",
    title: "Outdoor bar set",
    price: 25000.00,
    image: "https://images.unsplash.com/photo-1595514535415-dae8580c416c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3V0ZG9vciUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "4",
    title: "Console with mirror",
    price: 25000.00,
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc29sZSUyMHRhYmxlfGVufDB8fDB8fHww",
  },
]

export function TopPicks() {
  const router = useRouter()

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container space-y-8 sm:space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Top Picks For You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group space-y-4 cursor-pointer" onClick={() => router.push(`/product/${product.id}`)}>
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="font-medium">{product.title}</h3>
                <p className="text-muted-foreground">
                  Rs. {product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="rounded-none"
            onClick={() => router.push('/shop')}
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}

