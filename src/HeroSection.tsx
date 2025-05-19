import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import frame1 from './assets/frames/34365421.png';
import frame2 from './assets/frames/34214812.png';
import frame3 from './assets/frames/34365423.png';
import frame4 from './assets/frames/34365424.png';
import frame5 from './assets/frames/34365426.png';
import frame6 from './assets/frames/34365425.png';
import frame7 from './assets/frames/34365427.png';
import frame8 from './assets/frames/34214818.png';
import frame9 from './assets/frames/34365429.png';
import frame10 from './assets/frames/343654210.png';
import frameSun from './assets/frames/343654211.png';
import frameBird from './assets/frames/684027712.png';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const xFrame2 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], ['-100%', '100%']),
    { stiffness: 50, damping: 30 }
  );
  const yFrame2 = useSpring(
    useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5], ['100%', '40%', '10%', '0%', '15%', '40%']),
    { stiffness: 50, damping: 30 }
  );

  const xFrameSun = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 1], ['-100%', '-80%', '100%']),
    { stiffness: 50, damping: 30 }
  );
  const yFrameSun = useSpring(
    useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8, 0.9, 1], ['25%', '15%', '5%', '20%', '25%', '50%']),
    { stiffness: 50, damping: 30 }
  );

  const xFrame4 = useSpring(
    useTransform(scrollYProgress, [0, 0.5], ['-25%', '50%']),
    { stiffness: 50, damping: 30 }
  );
  const xFrameBird = useSpring(
    useTransform(scrollYProgress, [0, 0.6, 1], ['-50%', '-50%', '50%']),
    { stiffness: 50, damping: 30 }
  );

  const yWolfRaw = useTransform(scrollYProgress, [0.13, 0.18, 0.4, 0.42], [100, 0, 0, 120]);
  const yWolf = useSpring(yWolfRaw, { stiffness: 100, damping: 12 });
  const scaleWolfRaw = useTransform(
    scrollYProgress,
    [0.13, 0.16, 0.18],
    [0.5, 1.2, 1]
  );
  const scaleWolf = useSpring(scaleWolfRaw, { stiffness: 150, damping: 10 });

  const rawCycle = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
    [
      '#0a0f1c', // deep night
      '#1c2f33', // early moonlight
      '#000000', // full moon
      '#fef3c7', // dawn
      '#fcd34d', // midday sun
      '#f8b500', // afternoon glow
      '#0a0f1c'  // back to night
    ]
  )

  return (
    <div
      ref={containerRef}
      style={{ height: '2000vh', perspective: 800 }}
      className="relative bg-[#e8e6ed]"
    >
      <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden">
        <motion.div style={{ backgroundColor: rawCycle, willChange: 'background-color' }} className="relative z-[-1] overflow-hidden w-full sm:w-auto sm:h-full aspect-[3/2]">
          <img src={frame1} className="absolute z-1 object-cover h-full" alt="frame1" />

          <motion.img
            src={frame2}
            className="absolute object-cover z-0 h-full"
            style={{ left: xFrame2, top: yFrame2, willChange: 'transform' }}
            alt="frame2"
          />

          <motion.img
            src={frameSun}
            className="absolute object-cover z-0 h-full"
            style={{ left: xFrameSun, top: yFrameSun, willChange: 'transform' }}
            alt="frame2"
          />

          <motion.img src={frame3} className="absolute object-cover h-full -z-1"

            alt="frame3"
          />

          <motion.img
            src={frame4}
            className="absolute object-cover h-full -z-2"
            style={{ left: xFrame4, willChange: 'transform' }}
            alt="frame4"
          />

          <motion.img
            src={frameBird}
            className="absolute object-cover h-full -z-2"
            style={{ left: xFrameBird, willChange: 'transform' }}
            alt="frame4"
          />

          <motion.img src={frame5}

            className="absolute object-cover h-full animate-fade-slide-in-bottom -z-3"
            alt="frame5"
          />

          <motion.img src={frame6} className="absolute object-cover h-full -z-4"

            alt="frame6"
          />

          <motion.img src={frame7} className="absolute animate-fade-slide-in-bottom object-cover h-full -z-5"

            alt="frame7"
          />

          <motion.img
            src={frame8}
            className="absolute -left-60 top-20 -z-4 object-cover"
            style={{
              y: yWolf,
              scale: scaleWolf,
              willChange: 'transform',
            }}
            alt="wolf"
          />

          <motion.img src={frame9}

            className="absolute object-cover h-full -z-7" alt="frame9"
          />

          <motion.img src={frame10} className="absolute object-cover animate-fade-slide-in-bottom h-full -z-8"

            alt="frame10"
          />
        </motion.div>

        <h1 className="z-10 fixed right-10 top-10 text-4xl font-extrabold text-gray-500">
          Scroll<br />Down
        </h1>
        <h1 className="z-10 fixed right-15 bottom-20 text-4xl font-extrabold text-gray-500">
          The End
        </h1>

        <a href="http://www.freepik.com" className="absolute bottom-4 right-4 text-xs text-gray-600">
          Special thanks to Freepik for providing these image frames.
        </a>
      </div>

    </div>
  );
}
