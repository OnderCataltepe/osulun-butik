import React, { useState, useEffect, useRef } from 'react';

function useElementOnScreen(ref: React.RefObject<Element>, rootMargin = '0px') {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

const AnimateIn: React.FC<
  React.PropsWithChildren<{ from: React.CSSProperties; to: React.CSSProperties }>
> = ({ from, to, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: React.CSSProperties = {
    transition: '1000ms ease-in-out'
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to
            }
          : {
              ...defaultStyles,
              ...from
            }
      }>
      {children}
    </div>
  );
};

const FadeIn: React.FC<React.PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </AnimateIn>
);

const FadeUp: React.FC<React.PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ opacity: 0, translate: '0 50px' }} to={{ opacity: 1, translate: 'none' }}>
    {children}
  </AnimateIn>
);
const FadeRight: React.FC<React.PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ opacity: 0, translate: '-200px 0' }} to={{ opacity: 1, translate: 'none' }}>
    {children}
  </AnimateIn>
);
const FadeLeft: React.FC<React.PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ opacity: 0, translate: '200px 0' }} to={{ opacity: 1, translate: 'none' }}>
    {children}
  </AnimateIn>
);
const ScaleIn: React.FC<React.PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ scale: '0' }} to={{ scale: '1' }}>
    {children}
  </AnimateIn>
);

const Animate = {
  FadeIn,
  FadeUp,
  FadeLeft,
  FadeRight,
  ScaleIn
};

export default Animate;
