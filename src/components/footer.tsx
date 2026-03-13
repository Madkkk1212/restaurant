import Link from 'next/link';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-accent/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col mb-4">
              <span className="text-3xl font-serif font-bold tracking-tighter text-accent">
                AFIF
              </span>
              <span className="text-xs uppercase tracking-[0.3em] -mt-1 opacity-80">
                Restaurant
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mt-4 text-sm leading-relaxed">
              Experience the art of modern Indonesian cuisine. We combine tradition with 
              contemporary techniques to create unforgettable culinary journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest opacity-60">
          <p>© {new Date().getFullYear()} Afif Restaurant. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
