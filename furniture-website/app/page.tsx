import { SiteHeader } from "./components/site-header"
import { HeroSection } from "./components/hero-section"
import { FeaturedProducts } from "./components/featured-products"
import { TopPicks } from "./components/top-picks"
import { BlogSection } from "./components/blog-section"
import { InstagramSection } from "./components/instagram-section"
import { SiteFooter } from "./components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <TopPicks />
        <BlogSection />
        <InstagramSection />
      </main>
      <SiteFooter />
    </>
  )
}

