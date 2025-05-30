import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export const MagicReveal = ({ children, delay = 0, className = '' }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(inView);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={visible ? 'visible' : 'exit'}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          scale: 0.9,
          filter: 'blur(4px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            duration: 0.7,
            ease: 'easeOut',
            delay,
          },
        },
        exit: {
          opacity: 0,
          scale: 0.95,
          y: -10,
          filter: 'blur(3px)',
          transition: {
            duration: 0.7,
            ease: 'easeInOut',
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
