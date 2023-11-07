'use client';

import { FC, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import clsx from 'clsx';

type MenuProps = {
  btnClassName?: string;
};

const Menu: FC<MenuProps> = ({ btnClassName }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={() => setOpen(!open)}>
      <Dialog.Trigger asChild>
        <button
          className={clsx('outline-none md:hidden', btnClassName)}
          aria-controls={'Open Menu'}
          role="navigation"
        >
          {open ? (
            <div className="relative">
              <div className="absolute h-[3px] w-6 rotate-45 bg-white"></div>
              <div className="h-[3px] w-6 -rotate-45 bg-white"></div>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <div className="h-[3px] w-6 bg-white"></div>
              <div className="h-[3px] w-6 bg-white"></div>
              <div className="h-[3px] w-6 bg-white"></div>
            </div>
          )}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={clsx(
            'bg-overlay fixed top-16 z-20 w-[100vw] md:top-20',
            'data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn lg:hidden',
          )}
        />
        <Dialog.Content
          className={clsx(
            'fixed bottom-0 top-16 z-30 h-[calc(100vh_-_4rem)] w-full overflow-y-scroll bg-white pb-40 pt-12 outline-none md:top-20 md:h-[calc(100vh_-_5rem)]',
            'data-[state=closed]:animate-menuHide data-[state=open]:animate-menuShow lg:hidden',
          )}
        >
          <div className="flex min-h-full flex-col items-center justify-center">
            <div className="mx-auto mb-12 flex h-full w-min flex-col gap-12">
              <Link href="/">Moi</Link>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Menu;
