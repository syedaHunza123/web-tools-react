import React from 'react';

const ToolCard = ({ tool, onClick, isDarkMode }) => {
  return (
    <div 
      className={`
        rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer
        ${isDarkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-800 border border-gray-100'}
      `}
      onClick={onClick}
    >
      <div className={`p-4 flex flex-col h-full`}>
        <div className="flex items-center mb-3">
          <div 
            className={`w-10 h-10 flex items-center justify-center rounded-md mr-3 ${
              isDarkMode ? 'bg-gray-700' : 'bg-blue-100'
            }`}
          >
            <span 
              className={`text-xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
              dangerouslySetInnerHTML={{ __html: tool.icon }}
            />
          </div>
          <h3 className="font-semibold text-lg">{tool.name}</h3>
        </div>
        
        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex-grow mb-3`}>
          {tool.description}
        </p>
        
        <div className="mt-auto flex justify-between items-center">
          <div 
            className={`
              px-2 py-1 text-xs rounded-full
              ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}
            `}
          >
            {tool.category}
          </div>
          
          <button 
            className={`
              flex items-center text-sm font-medium
              ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}
              transition-colors
            `}
          >
            Open
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;