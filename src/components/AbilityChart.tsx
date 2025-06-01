import React from 'react';
import { RadarChart } from './RadarChart';
import { AbilityBar } from './AbilityBar';

const abilities = [
  { name: "プログラミング力", value: 85 },
  { name: "問題解決能力", value: 90 },
  { name: "デザイン感覚", value: 70 },
  { name: "コミュニケーション力", value: 75 },
  { name: "学習スピード", value: 95 }
];

export const AbilityChart: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">ステータス</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {abilities.map((ability, index) => (
            <AbilityBar 
              key={index}
              name={ability.name}
              value={ability.value}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-center">
          <RadarChart abilities={abilities} />
        </div>
      </div>
    </section>
  );
};