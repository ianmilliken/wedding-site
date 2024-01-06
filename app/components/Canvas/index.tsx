"use client"

import Image from 'next/image';
import React, { useState, useEffect, useRef, use, useCallback } from 'react';
import styles from './Canvas.module.css';
import { nanoid } from 'nanoid';
import { Parallax, useParallax, useParallaxController } from 'react-scroll-parallax';

interface Icon {
  id: string;
  width: number;
  height: number;
  src: string;
  speed: number
}

interface Position {
  x: number;
  y: number;
  xPercentage: number;
  yPercentage: number;
}

export function Canvas() {
  const [icons, setIcons] = useState<Icon[]>([]);
  const [positions, setPositions] = useState<Record<string, Position>>({});
  const canvasRef = useRef<HTMLDivElement>(null);
  const p = useParallaxController();

  const getRandomPosition = useCallback((iconWidth: number, iconHeight: number): Position => {
    if (!p) return { x: 0, y: 0, xPercentage: 0, yPercentage: 0 };

    const canvasWidth = p.view.width;
    const canvasHeight = p.view.height;

    const x = Math.random() * (canvasWidth - iconWidth);
    const y = Math.random() * (canvasHeight - iconHeight);

    const xPercentage = x / canvasWidth * 100;
    const yPercentage = y / canvasHeight * 100;

    return { x, y, xPercentage, yPercentage };
  }, [p]);

  const calculatePositions = useCallback(() => {
    if (canvasRef.current) {
      const newPositions: Record<string, Position> = {};

      icons.forEach(icon => {
        const position = getRandomPosition(icon.width, icon.height);
        newPositions[icon.id] = position;
      });

      setPositions(newPositions);
    }
  }, [getRandomPosition, icons])

  // Load icons in
  useEffect(() => {
    const loadedIcons: Icon[] = [
      { id: nanoid(), width: 40, height: 40, src: '/icons/kanga.svg', speed: 20 },
      { id: nanoid(), width: 40, height: 40, src: '/icons/ring.svg', speed: 20 },
      { id: nanoid(), width: 40, height: 40, src: '/icons/heart.svg', speed: 20 },
      { id: nanoid(), width: 40, height: 40, src: '/icons/plane.svg', speed: 20 },
      { id: nanoid(), width: 40, height: 40, src: '/icons/mountain.svg', speed: 20 },
      { id: nanoid(), width: 40, height: 40, src: '/icons/guitar.svg', speed: 20 },
      { id: nanoid(), width: 40, height: 40, src: '/icons/husky.svg', speed: 20 },
      { id: nanoid(), width: 40, height: 40, src: '/icons/balloon.svg', speed: 20 },
      { id: nanoid(), width: 40, height: 40, src: '/icons/champagne.svg', speed: 20 },
    ];
    setIcons(loadedIcons);
  }, []);
  
  // Calculate positions on load
  useEffect(() => {
    calculatePositions();
  }, [calculatePositions]);

  return (
    <div ref={canvasRef} className={styles.outer} style={{ height: p?.view.scrollHeight }}>
      {icons.map(icon => (
        <Parallax key={icon.id} className={styles.icon} translateY={[ -positions[icon.id]?.y, positions[icon.id]?.y ]} style={{ left: positions[icon.id]?.xPercentage + '%', top: positions[icon.id]?.yPercentage + '%' }}>
          <Image
            src={icon.src}
            width={icon.width}
            height={icon.height}
            alt=''
          />
        </Parallax>
      ))}
    </div>
  );
};
