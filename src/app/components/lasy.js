import React, { useEffect, useState } from "react";

const LazySection = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id]);

  return <div id={id}>{isVisible ? children : null}</div>;
};

export default LazySection;
