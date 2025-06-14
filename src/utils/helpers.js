// src/utils/helpers.js

/**
 * Filter tools based on search query and category
 * @param {Array} tools - Array of tool objects
 * @param {String} searchQuery - Query to search for in name and description
 * @param {String} category - Category to filter by
 * @returns {Array} - Filtered array of tools
 */
export const filterTools = (tools, searchQuery, category) => {
  // Convert search query to lowercase for case-insensitive matching
  const query = searchQuery.toLowerCase().trim();
  
  return tools.filter(tool => {
    // Filter by category first (if not "All Tools")
    const categoryMatch = category === 'All Tools' || tool.category === category;
    
    // If no search query, just return category filter result
    if (!query) return categoryMatch;
    
    // Check if search query matches name or description
    const nameMatch = tool.name.toLowerCase().includes(query);
    const descriptionMatch = tool.description.toLowerCase().includes(query);
    
    // Return true if category matches AND (name matches OR description matches)
    return categoryMatch && (nameMatch || descriptionMatch);
  });
};

/**
 * Generate a slug from a string
 * @param {String} text - Input text
 * @returns {String} - Slugified text
 */
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

/**
 * Format a date to a readable string
 * @param {Date} date - Date object
 * @returns {String} - Formatted date string
 */
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

/**
 * Debounce a function call
 * @param {Function} func - Function to debounce
 * @param {Number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * Copy text to clipboard
 * @param {String} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};

/**
 * Download text as a file
 * @param {String} content - Content to download
 * @param {String} fileName - Name of the file
 * @param {String} fileType - MIME type of the file
 */
export const downloadTextFile = (content, fileName, fileType = 'text/plain') => {
  const blob = new Blob([content], { type: fileType });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
};