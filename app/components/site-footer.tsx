import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const links = {
  Links: [
    { title: "Home", href: "#" },
    { title: "Shop", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ],
  Help: [
    { title: "Payment Options", href: "#" },
    { title: "Returns", href: "#" },
    { title: "Privacy Policies", href: "#" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              {links.Links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              {links.Help.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Newsletter</h3>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                className="rounded-none"
              />
              <Button type="submit" variant="outline" className="rounded-none">
                SUBSCRIBE
              </Button>
            </form>
            <address className="mt-6 not-italic text-sm text-muted-foreground">
              400 University Drive Suite 200 Coral<br />
              Gables,<br />
              FL 33134 USA
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}

