import React from 'react';

interface AbilityBarProps {
  name: string;
  value: number;
}

export const AbilityBar: React.FC<AbilityBarProps> = ({ name, value }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-indigo-600">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};