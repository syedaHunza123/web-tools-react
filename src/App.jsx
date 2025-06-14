import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import SearchBar from './components/SearchBar';
import ToolContent from './components/ToolContent';
import { toolsData } from './data/toolsData';
import { filterTools } from './utils/helpers';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false);
  const [activeCategory, setActiveCategory] = useState('All Tools');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTool, setActiveTool] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [filteredTools, setFilteredTools] = useState(toolsData);

  // Handle filtering tools based on search query and active category
  useEffect(() => {
    const filtered = filterTools(toolsData, searchQuery, activeCategory);
    setFilteredTools(filtered);
  }, [searchQuery, activeCategory]);

  // Extract unique categories from tools data
  const categories = ['All Tools', ...new Set(toolsData.map(tool => tool.category))];

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Toggle sidebar for mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Handle tool selection
  const handleToolSelect = (tool) => {
    setActiveTool(tool);
    // On mobile, automatically close sidebar when selecting a tool
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  // Handle back button click to return to tools grid
  const handleBackToTools = () => {
    setActiveTool(null);
  };

  // Generate main content based on whether a tool is active
  const renderMainContent = () => {
    if (activeTool) {
      return (
        <ToolContent 
          tool={activeTool} 
          onBack={handleBackToTools} 
          isDarkMode={isDarkMode}
        />
      );
    }

    return (
      <>
        <div className="flex justify-between items-center mb-6 px-4">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {activeCategory}
          </h1>
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
            isDarkMode={isDarkMode} 
          />
        </div>
        {filteredTools.length === 0 ? (
          <div className={`flex flex-col items-center justify-center p-8 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-medium mb-2">No tools found</h3>
            <p className="text-center">Try adjusting your search or category filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
            {filteredTools.map((tool) => (
              <ToolCard 
                key={tool.id} 
                tool={tool} 
                onClick={() => handleToolSelect(tool)} 
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Mobile sidebar toggle button */}
      <button 
        className={`md:hidden fixed top-4 left-4 z-30 p-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} shadow-md`}
        onClick={toggleSidebar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <Sidebar 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onCategoryChange={(category) => {
          setActiveCategory(category);
          setActiveTool(null);
          if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
          }
        }}
      />

      {/* Main content */}
      <main className={`flex-1 p-4 md:p-6 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
        <div className="max-w-7xl mx-auto">
          {renderMainContent()}
        </div>
      </main>
    </div>
  );
}

export default App;