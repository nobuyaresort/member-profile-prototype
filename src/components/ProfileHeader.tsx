import React from 'react';
import { UserCircle, MapPin, Briefcase, Clock } from 'lucide-react';

export const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10 relative">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
        <UserCircle size={100} className="text-white" />
      </div>
      
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          山田 太郎
        </h1>
        <p className="text-lg text-indigo-600 font-medium mb-3">フルスタックエンジニア</p>
        
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>開発経験 8年</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={18} />
            <span>フリーランス</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>東京都</span>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 md:relative md:ml-auto">
        <div className="bg-indigo-600 text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
          <span className="font-bold">Lv.42</span>
        </div>
      </div>
    </div>
  );
};