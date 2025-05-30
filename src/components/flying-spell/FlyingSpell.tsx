import { useEffect, useState } from 'react';
import './flying-spell.css';

const SPELLS = ['✨', '✦', 'ᚠ', 'ᛞ', 'ᚨ', '✧', '★'];

interface Spell {
  id: number;
  symbol: string;
  top: number;
  duration: number;
}

export const FlyingSpell = () => {
  const [spells, setSpells] = useState<Spell[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const newSpell: Spell = {
        id,
        symbol: SPELLS[Math.floor(Math.random() * SPELLS.length)],
        top: Math.random() * window.innerHeight,
        duration: 5 + Math.random() * 5,
      };

      setSpells((prev) => [...prev, newSpell]);

      setTimeout(() => {
        setSpells((prev) => prev.filter((s) => s.id !== id));
      }, newSpell.duration * 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {spells.map((spell) => (
        <div
          key={spell.id}
          className="flying-spell"
          style={{
            top: `${spell.top}px`,
            animationDuration: `${spell.duration}s`,
          }}
        >
          {spell.symbol}
        </div>
      ))}
    </>
  );
};
