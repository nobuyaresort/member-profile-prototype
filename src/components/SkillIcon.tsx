import React, { useState, useRef, useEffect } from 'react';
import { Skill } from '../types/skill';

interface SkillIconProps {
  skill: Skill;
  containerRef: React.RefObject<HTMLDivElement>;
  onDragEnd: (id: number, x: number, y: number) => void;
  snapToGrid: boolean;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ 
  skill, 
  containerRef, 
  onDragEnd,
  snapToGrid
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(skill.position);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setPosition(skill.position);
  }, [skill.position]);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!iconRef.current) return;
    
    const rect = iconRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const iconSize = 80;
    
    let newX = e.clientX - containerRect.left - dragOffset.x;
    let newY = e.clientY - containerRect.top - dragOffset.y;
    
    if (snapToGrid) {
      const gridSize = 50;
      newX = Math.round(newX / gridSize) * gridSize;
      newY = Math.round(newY / gridSize) * gridSize;
    }
    
    newX = Math.max(0, Math.min(containerRect.width - iconSize, newX));
    newY = Math.max(0, Math.min(containerRect.height - iconSize, newY));
    
    setPosition({ x: newX, y: newY });
  };
  
  const handleMouseUp = () => {
    if (isDragging) {
      onDragEnd(skill.id, position.x, position.y);
      setIsDragging(false);
    }
  };
  
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, position]);
  
  const iconStyle: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    cursor: isDragging ? 'grabbing' : 'grab',
    transform: isDragging ? 'scale(1.05)' : 'scale(1)',
    zIndex: isDragging ? 10 : 1,
  };

  return (
    <div 
      ref={iconRef}
      className="absolute w-20 h-20 select-none transition-transform"
      style={iconStyle}
      onMouseDown={handleMouseDown}
      role="button"
      tabIndex={0}
    >
      <div className={`
        w-full h-full rounded-full flex flex-col items-center justify-center
        bg-gradient-to-br ${skill.colorClass} text-white
        shadow-md hover:shadow-lg transform hover:scale-105 transition-all
        ${isDragging ? 'shadow-lg ring-2 ring-indigo-300' : ''}
      `}>
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src={skill.icon} 
            alt={`${skill.name} logo`}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="text-xs font-bold mt-1">{skill.name}</div>
        <div className="text-xs">Lv.{skill.level}</div>
      </div>
    </div>
  );
}