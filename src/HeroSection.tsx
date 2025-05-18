import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import frame1 from './assets/frames/34365421.png';
import frame2 from './assets/frames/34214812.png';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const imageFrame2 = {
    x: useTransform(scrollYProgress, [0, 0.5], ['-100%', '100%']),
    y: useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4], ['50%','15%', '0%','15%', '50%'])
  }

  return (
    <div
      ref={containerRef}
      style={{ height: '1000vh', perspective: 800 }}
      className="relative bg-[#e8e6ed]"
    >
      <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="relative z-[-1] bg-[#1c2f33] overflow-hidden w-full sm:w-auto sm:h-full aspect-[3/2]">
          <img src={frame1} className="absolute object-cover h-full" alt="frame1" />
          <motion.img src={frame2} className="absolute object-cover -z-1 h-full"
            style={{ left: imageFrame2.x, top: imageFrame2.y }} />
        </div>
      </div>
    </div>
  );
}