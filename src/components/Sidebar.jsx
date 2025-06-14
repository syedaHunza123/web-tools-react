import React from 'react';

const Sidebar = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  isDarkMode, 
  toggleDarkMode,
  isOpen,
  setIsOpen
}) => {
  // Close sidebar when clicking outside on mobile
  const handleOverlayClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:fixed top-0 left-0 h-full z-30
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 transition-transform duration-300 ease-in-out
          w-64 overflow-y-auto
          ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} 
          border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
        `}
      >
        {/* Logo and App Title */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <svg className={`w-7 h-7 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
            <h1 className="text-xl font-bold ml-2">Web Tools</h1>
          </div>
          {/* Close button for mobile */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Categories */}
        <nav className="p-4">
          <h2 className={`text-sm uppercase font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Categories
          </h2>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => onCategoryChange(category)}
                  className={`
                    block w-full text-left px-4 py-2 rounded-md transition-colors
                    ${activeCategory === category 
                      ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700') 
                      : (isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}
                  `}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Settings section */}
        <div className="mt-auto p-4 border-t">
          <h2 className={`text-sm uppercase font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Settings
          </h2>
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <button
              onClick={toggleDarkMode}
              className={`
                relative inline-flex items-center h-6 rounded-full w-11 transition-colors
                ${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'}
              `}
            >
              <span
                className={`
                  inline-block w-4 h-4 transform rounded-full bg-white transition-transform
                  ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}
                `}
              />
            </button>
          </div>
        </div>

        {/* Footer with version info */}
        <div className={`p-4 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p>100 Web Tools • v1.0.0</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;