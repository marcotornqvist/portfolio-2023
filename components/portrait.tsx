'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { AnimationItem } from 'lottie-web';

export default function Portrait({ preview = false }: { preview?: boolean }) {
  const container = useRef<HTMLSpanElement>(null);
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    const element = container.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || (preview ? replay === 0 : motion.matches)) return;
    const parent = element.parentElement;
    parent?.removeAttribute('data-fallback');
    parent?.setAttribute('data-playing', 'true');
    let disposed = false;
    let animation: AnimationItem | undefined;
    const restore = () => {
      parent?.removeAttribute('data-playing');
      animation?.destroy();
      animation = undefined;
    };
    // The reveal could not run: reveal the final illustration instead.
    const fail = () => {
      parent?.setAttribute('data-fallback', 'true');
      restore();
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
          path: '/assets/portrait-entrance.json',
          rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
        });
        animation.addEventListener('DOMLoaded', () => {
          if (disposed) return;
          animation?.play();
        });
        // Lottie holds the completed frame. Do not swap to the fallback:
        // the finished vector is the last frame of the reveal itself.
        animation.addEventListener('data_failed', fail);
        animation.addEventListener('error', fail);
      })
      .catch(fail);
    return () => {
      disposed = true;
      motion.removeEventListener('change', onMotionChange);
      restore();
    };
  }, [preview, replay]);

  return (
    <>
      <noscript>
        <style>{`.portrait-reveal > img { visibility: visible; }`}</style>
      </noscript>
      <span
        className="portrait-reveal"
        role="img"
        aria-label="Ink illustration of Marco Törnqvist"
      >
        <Image
          src="/assets/images/marco-illustration.svg"
          alt=""
          width={1254}
          height={1254}
          preload
          unoptimized
          aria-hidden="true"
        />
        <span
          className="portrait-reveal-animation"
          ref={container}
          aria-hidden="true"
        />
      </span>
      {preview && (
        <button
          className="button-link"
          onClick={() => setReplay((value) => value + 1)}
        >
          {replay ? 'Replay portrait' : 'Play portrait'}
        </button>
      )}
    </>
  );
}
