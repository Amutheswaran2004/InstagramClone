import React, { useState, useRef, useEffect } from 'react';
import Stories from './Stories';

function Story_design() {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getStep = () =>
    scrollerRef.current
      ? Math.max(120, Math.round(scrollerRef.current.clientWidth * 0.9))
      : 200;

  const updateButtons = () => {
    if (!scrollerRef.current) return;
    const max = scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth;
    const x = scrollerRef.current.scrollLeft;
    setCanScrollLeft(x > 0);
    setCanScrollRight(x < max - 1);
  };

  const scrollLeft = () => {
    scrollerRef.current?.scrollBy({ left: -getStep(), behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollerRef.current?.scrollBy({ left: getStep(), behavior: "smooth" });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    updateButtons();
    return () => {
      scroller.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  return (
    <div className="stories-wrap">
      {/* ✅ Attach the ref here */}
      <div className="stories" id="stories" aria-label="Stories" ref={scrollerRef}>
        <button
          className="scroll-btn left"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          type="button"
          aria-label="Scroll left"
        >
          ‹
        </button>

        {/* Render multiple Stories components */}
        <Stories />

        <button
          className="scroll-btn right"
          onClick={scrollRight}
          disabled={!canScrollRight}
          type="button"
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Story_design;
