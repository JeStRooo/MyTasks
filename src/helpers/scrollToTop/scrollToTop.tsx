import React, {useEffect} from 'react';

interface ScrollToTopProps {
  children?: React.ReactNode
}

const scrollToTop = (WrappedComponent: React.ComponentType<any>) => {
  return function WithScrollToTop({ children }: ScrollToTopProps) {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return <WrappedComponent>{children}</WrappedComponent>;
    }
};

export default scrollToTop;