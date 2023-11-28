'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from 'components/ui/sheet';
import { links } from './navbar';
import { cn } from 'lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type MenuProps = {
  btnClassName?: string;
};

const Menu: FC<MenuProps> = ({ btnClassName }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const genericHamburgerLine = `h-0.5 w-6 rounded-full bg-white transition ease transform duration-300`;

  return (
    <Sheet open={open} onOpenChange={() => setOpen(!open)}>
      <SheetTrigger asChild>
        <button
          className={cn(
            '-mr-4 flex flex-col gap-1.5 p-4 md:hidden',
            btnClassName,
          )}
          aria-controls={'Open Menu'}
          role="navigation"
          onClick={() => setOpen(!open)}
        >
          <div className={clsx(genericHamburgerLine, open && '-rotate-45')} />
          <div
            className={clsx(
              genericHamburgerLine,
              open && '-translate-y-2 rotate-45',
            )}
          />
        </button>
      </SheetTrigger>
      <SheetContent className="md:hidden">
        <SheetHeader className="px-2 pt-6">
          <SheetClose className="-ml-4 px-4 py-4">
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="Arrow left"
              width={24}
              height={12}
              className="rotate-180"
            />
          </SheetClose>
        </SheetHeader>
        <ul className="-ml-4 flex h-full flex-col gap-2 px-2 pt-24">
          {links.map((link, index) => (
            <li key={index} className="flex" onClick={() => setOpen(!open)}>
              <Link
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                className="text-regular-normal min-h-full min-w-full px-4 py-4 text-white"
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
