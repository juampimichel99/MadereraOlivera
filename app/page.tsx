import { HeroSection } from '@/components/hero'
import { AboutSection } from '@/components/about'
import { ProductCategoriesSection } from '@/components/product-categories'
import { ProductsSection } from '@/components/products'
import { WoodsSection } from '@/components/woods'
import { BenefitsSection } from '@/components/benefits'
import { LocationMap } from '@/components/location-map'
import { ContactSection } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <ProductCategoriesSection />
      <AboutSection />
      <ProductsSection />
      <WoodsSection />
      <BenefitsSection />
      <LocationMap />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
