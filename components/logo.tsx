'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';

export default function Logo({
  playbackId = 0,
  preview = false,
}: {
  playbackId?: number;
  preview?: boolean;
}) {
  const container = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = container.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    // A deliberate preview click may play even when automatic motion is disabled.
    if (!element || (preview ? playbackId === 0 : motion.matches)) return;

    let disposed = false;
    let animation: AnimationItem | undefined;
    const restore = () => {
      element.parentElement?.removeAttribute('data-animating');
      animation?.destroy();
      animation = undefined;
    };
    const onMotionChange = () => {
      if (motion.matches) {
        disposed = true;
        restore();
      }
    };
    motion.addEventListener('change', onMotionChange);

    void import('lottie-web')
      .then(({ default: lottie }) => {
        if (disposed) return;
        animation = lottie.loadAnimation({
          container: element,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: '/assets/logo-entrance.json',
          rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
        });
        animation.addEventListener('DOMLoaded', () => {
          if (disposed) return;
          element.parentElement?.setAttribute('data-animating', 'true');
          animation?.play();
        });
        animation.addEventListener('complete', restore);
        animation.addEventListener('data_failed', restore);
      })
      .catch(restore);

    return () => {
      disposed = true;
      motion.removeEventListener('change', onMotionChange);
      restore();
    };
  }, [playbackId, preview]);

  return (
    <span className="monogram" aria-hidden="true">
      <Image src="/assets/logo.svg" width={42} height={42} alt="" unoptimized />
      <span className="monogram-animation" ref={container} />
    </span>
  );
}
