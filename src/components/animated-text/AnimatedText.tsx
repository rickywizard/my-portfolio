import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import pen from '../../assets/images/pen.png';

type Props = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
};

export const AnimatedText = ({
  text,
  speed = 30,
  delay = 0,
  className = '',
}: Props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [start, setStart] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setDisplayedText('');
      setStart(false);
      const timeout = setTimeout(() => setStart(true), delay * 1000);
      return () => clearTimeout(timeout);
    } else {
      setStart(false);
      setDisplayedText('');
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [inView, delay]);

  useEffect(() => {
    if (!start) return;

    let current = -1;
    intervalRef.current = setInterval(() => {
      setDisplayedText((prev) => prev + text[current]);
      current++;
      if (current >= text.length - 1 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [start, text, speed]);

  return (
    <p
      ref={ref}
      className={`${className} relative whitespace-pre-wrap font-magic`}
    >
      {displayedText}
      <img
        src={pen}
        alt="Magic Pen"
        className="w-6 h-6 md:w-8 md:h-8 inline animate-float"
      />
    </p>
  );
};
