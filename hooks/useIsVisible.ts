'use client';

import { useState, useEffect, useRef, RefObject } from 'react';

const useIsVisible = <T extends HTMLElement>(): [boolean, RefObject<T>] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const domRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // stop observing since we have our state set to true
        }
      });
    });

    const ref = domRef.current;

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, []);

  return [isVisible, domRef];
};

export default useIsVisible;
