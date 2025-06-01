import React from 'react';
import { Github, Twitter, MessageSquare, FileText } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">連絡先</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-700">ソーシャルリンク</h3>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-800"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-blue-600"
              >
                <Twitter size={20} />
                <span>Twitter</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-green-600"
              >
                <MessageSquare size={20} />
                <span>Slack</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-700">アクション</h3>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors text-white"
              >
                <FileText size={20} />
                <span>履歴書ダウンロード</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-white"
              >
                <MessageSquare size={20} />
                <span>お問い合わせ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};