import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return { ref, inView };
};

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useRef('up');
  const [lastScrollY, setLastScrollY] = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY.current) < 5) {
        return;
      }

      setScrollDirection(scrollY > lastScrollY.current ? 'down' : 'up');
      setLastScrollY.current(scrollY);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return scrollDirection;
};
