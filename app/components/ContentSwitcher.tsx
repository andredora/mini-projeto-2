'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ContentSwitcher() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Characters', href: '/characters' },
    { name: 'Spells', href: '/spells' },
    { name: 'Movies', href: '/movies' },
    { name: 'Favourites', href: '/favourites' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 z-50">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="text-yellow-400 font-parchment text-xl font-bold">
          Harry Potter
        </div>

        <div className="flex justify-between gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative font-wizard font-semibold text-yellow-200 px-4 py-2 rounded-md
                transition-all duration-300
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                after:bg-gradient-to-r after:from-blue-400 after:to-purple-500
                after:transition-all after:duration-300
                hover:after:w-full
                ${pathname === link.href ? 'after:w-full' : ''}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}