import React, { useState, useEffect, useRef } from 'react';
import { SkillIcon } from './SkillIcon';
import { skillsData } from '../data/skillsData';
import { Settings } from 'lucide-react';

export const SkillMap: React.FC = () => {
  const [skills, setSkills] = useState(skillsData);
  const [snapToGrid, setSnapToGrid] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const resetPositions = () => {
    setSkills(skillsData.map((skill, index) => ({
      ...skill,
      position: { 
        x: 100 + (index % 4) * 200, 
        y: 100 + Math.floor(index / 4) * 150 
      }
    })));
  };
  
  useEffect(() => {
    resetPositions();
  }, []);
  
  const handleDragEnd = (id: number, x: number, y: number) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, position: { x, y } } : skill
    ));
  };

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">スキルマップ</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="snapToggle" 
              className="mr-2 h-4 w-4 text-indigo-600"
              checked={snapToGrid}
              onChange={() => setSnapToGrid(!snapToGrid)}
            />
            <label htmlFor="snapToggle" className="text-sm text-gray-600">
              グリッドにスナップ
            </label>
          </div>
          <button 
            onClick={resetPositions} 
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
            title="リセット"
          >
            <Settings size={18} className="text-gray-700" />
          </button>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="relative h-[400px] md:h-[500px] border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 overflow-hidden mb-4"
      >
        {skills.map(skill => (
          <SkillIcon 
            key={skill.id}
            skill={skill}
            containerRef={containerRef}
            onDragEnd={handleDragEnd}
            snapToGrid={snapToGrid}
          />
        ))}
      </div>
      
      <p className="text-sm text-gray-500 italic">
        * アイコンをドラッグして自由に配置できます
      </p>
    </section>
  );
};