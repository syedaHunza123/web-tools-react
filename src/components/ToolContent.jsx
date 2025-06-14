import React, { useState, useEffect } from 'react';

const ToolContent = ({ tool, onBack, isDarkMode }) => {
  // This component serves as a container for the active tool's functionality
  // It receives the selected tool object and handles its specific implementation

  const [toolState, setToolState] = useState({});
  const [toolResult, setToolResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset state when tool changes
    setToolState({});
    setToolResult(null);
    setError(null);
    setIsProcessing(false);
  }, [tool]);

  // Generic function to update tool state
  const handleInputChange = (field, value) => {
    setToolState(prev => ({ ...prev, [field]: value }));
  };

  // Handle tool execution based on tool ID
  const executeToolAction = () => {
    setIsProcessing(true);
    setError(null);

    try {
      let result = null;
      
      switch (tool.id) {
        // Text tools
        case 'text-case-converter':
          const text = toolState.text || '';
          const operation = toolState.operation || 'uppercase';
          
          switch (operation) {
            case 'uppercase':
              result = text.toUpperCase();
              break;
            case 'lowercase':
              result = text.toLowerCase();
              break;
            case 'title-case':
              result = text.replace(/\w\S*/g, 
                txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
              break;
            case 'sentence-case':
              result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
              break;
            default:
              result = text;
          }
          break;
          
        case 'word-counter':
          const countText = toolState.text || '';
          const words = countText.trim() === '' ? 0 : countText.trim().split(/\s+/).length;
          const chars = countText.length;
          const charsNoSpaces = countText.replace(/\s+/g, '').length;
          
          result = {
            words,
            chars,
            charsNoSpaces
          };
          break;
          
        case 'lorem-ipsum-generator':
          const paragraphs = parseInt(toolState.paragraphs) || 1;
          const loremText = generateLoremIpsum(paragraphs);
          result = loremText;
          break;
        
        case 'markdown-to-html':
          result = markdownToHtml(toolState.markdown || '');
          break;
          
        // Color tools
        case 'color-picker':
          result = toolState.color || '#000000';
          break;
          
        case 'color-converter':
          const colorValue = toolState.colorValue || '';
          const fromFormat = toolState.fromFormat || 'hex';
          const toFormat = toolState.toFormat || 'rgb';
          
          result = convertColor(colorValue, fromFormat, toFormat);
          break;
          
        case 'gradient-generator':
          const color1 = toolState.color1 || '#ff0000';
          const color2 = toolState.color2 || '#0000ff';
          const gradientType = toolState.gradientType || 'linear';
          const direction = toolState.direction || 'to right';
          
          if (gradientType === 'linear') {
            result = `linear-gradient(${direction}, ${color1}, ${color2})`;
          } else {
            result = `radial-gradient(circle, ${color1}, ${color2})`;
          }
          break;
          
        // Code tools
        case 'json-formatter':
          try {
            const jsonObj = JSON.parse(toolState.json || '{}');
            const indent = parseInt(toolState.indent) || 2;
            result = JSON.stringify(jsonObj, null, indent);
          } catch (err) {
            setError("Invalid JSON input");
            result = null;
          }
          break;
          
        case 'html-formatter':
          result = formatHtml(toolState.html || '');
          break;
          
        case 'css-formatter':
          result = formatCss(toolState.css || '');
          break;
          
        case 'js-formatter':
          result = formatJs(toolState.js || '');
          break;
        
        // URL tools
        case 'url-encoder':
          result = encodeURIComponent(toolState.url || '');
          break;
          
        case 'url-decoder':
          result = decodeURIComponent(toolState.url || '');
          break;
          
        case 'url-parser':
          try {
            const url = new URL(toolState.url || 'https://example.com');
            result = {
              protocol: url.protocol,
              hostname: url.hostname,
              pathname: url.pathname,
              search: url.search,
              hash: url.hash
            };
          } catch (err) {
            setError("Invalid URL");
            result = null;
          }
          break;
          
        // Math tools
        case 'calculator':
          try {
            // Simple eval replacement for basic calculations
            const expression = toolState.expression || '0';
            // Using Function constructor instead of eval for better security
            result = new Function('return ' + expression)();
          } catch (err) {
            setError("Invalid expression");
            result = null;
          }
          break;
          
        case 'unit-converter':
          const value = parseFloat(toolState.value) || 0;
          const fromUnit = toolState.fromUnit || 'm';
          const toUnit = toolState.toUnit || 'km';
          
          result = convertUnit(value, fromUnit, toUnit);
          break;
          
        case 'base-converter':
          const number = toolState.number || '0';
          const fromBase = parseInt(toolState.fromBase) || 10;
          const toBase = parseInt(toolState.toBase) || 2;
          
          try {
            const decimal = parseInt(number, fromBase);
            result = decimal.toString(toBase);
          } catch (err) {
            setError("Invalid number for the specified base");
            result = null;
          }
          break;
          
        // Image tools (simplified versions that would need backend integration for full functionality)
        case 'image-converter':
          result = "Image conversion would require backend processing.";
          break;
          
        // Data tools
        case 'csv-to-json':
          result = csvToJson(toolState.csv || '');
          break;
          
        case 'json-to-csv':
          result = jsonToCsv(toolState.json || '{}');
          break;
          
        case 'uuid-generator':
          result = generateUUID();
          break;
          
        case 'hash-generator':
          const hashText = toolState.text || '';
          const algorithm = toolState.algorithm || 'md5';
          result = "Hash calculation would require backend processing or a crypto library.";
          break;
        
        // Many more tools would be implemented here...
          
        default:
          result = "Tool functionality not implemented yet.";
      }
      
      setToolResult(result);
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  // Helper functions for tool implementations
  const generateLoremIpsum = (paragraphs) => {
    const loremStart = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
    const lorem = "Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.";
    
    let result = "";
    for (let i = 0; i < paragraphs; i++) {
      if (i === 0) {
        result += loremStart + lorem.repeat(3);
      } else {
        result += lorem.repeat(4);
      }
      if (i < paragraphs - 1) {
        result += "\n\n";
      }
    }
    return result;
  };

  const markdownToHtml = (markdown) => {
    // Very basic markdown conversion for demonstration
    let html = markdown;
    
    // Headers
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    
    // Bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    
    // Lists
    html = html.replace(/^\- (.*?)$/gm, '<li>$1</li>');
    
    // Paragraphs
    html = html.replace(/^\s*$/gm, '</p><p>');
    
    return '<p>' + html + '</p>';
  };

  const convertColor = (value, from, to) => {
    // Basic color conversion for demonstration
    if (from === 'hex' && to === 'rgb') {
      const hex = value.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgb(${r}, ${g}, ${b})`;
    }
    return "Conversion not implemented";
  };

  const formatHtml = (html) => {
    // Basic HTML formatting for demonstration
    return html.replace(/></g, '>\n<');
  };

  const formatCss = (css) => {
    // Basic CSS formatting for demonstration
    return css.replace(/}/g, '}\n').replace(/{/g, ' {\n  ');
  };

  const formatJs = (js) => {
    // Basic JS formatting for demonstration
    return js;
  };

  const convertUnit = (value, from, to) => {
    // Basic unit conversion for demonstration
    const units = {
      // Length
      'm': 1,
      'km': 0.001,
      'cm': 100,
      'mm': 1000,
      'in': 39.3701,
      'ft': 3.28084
    };
    
    if (units[from] && units[to]) {
      return value * (units[to] / units[from]);
    }
    return "Conversion not supported";
  };

  const csvToJson = (csv) => {
    // Basic CSV to JSON conversion for demonstration
    if (!csv.trim()) return "[]";
    
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');
    const result = [];
    
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(',');
      
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }
      result.push(obj);
    }
    
    return JSON.stringify(result, null, 2);
  };

  const jsonToCsv = (jsonStr) => {
    try {
      const json = JSON.parse(jsonStr);
      if (!Array.isArray(json) || !json.length) return "";
      
      const headers = Object.keys(json[0]);
      const csvRows = [];
      
      // Add headers
      csvRows.push(headers.join(','));
      
      // Add data rows
      for (const row of json) {
        const values = headers.map(header => {
          const value = row[header] || '';
          return `${value}`;
        });
        csvRows.push(values.join(','));
      }
      
      return csvRows.join('\n');
    } catch (err) {
      return "Invalid JSON";
    }
  };

  const generateUUID = () => {
    // RFC4122 compliant UUID generator
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  // Render appropriate UI based on tool type
  const renderToolInterface = () => {
    switch (tool.id) {
      case 'text-case-converter':
        return (
          <div className="space-y-4">
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Text to convert
              </label>
              <textarea
                className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                rows="5"
                value={toolState.text || ''}
                onChange={(e) => handleInputChange('text', e.target.value)}
                placeholder="Enter text to convert..."
              ></textarea>
            </div>
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Convert to:
              </label>
              <select
                className={`block w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                value={toolState.operation || 'uppercase'}
                onChange={(e) => handleInputChange('operation', e.target.value)}
              >
                <option value="uppercase">UPPERCASE</option>
                <option value="lowercase">lowercase</option>
                <option value="title-case">Title Case</option>
                <option value="sentence-case">Sentence case</option>
              </select>
            </div>
          </div>
        );
        
      case 'word-counter':
        return (
          <div className="space-y-4">
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Text to analyze
              </label>
              <textarea
                className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                rows="5"
                value={toolState.text || ''}
                onChange={(e) => handleInputChange('text', e.target.value)}
                placeholder="Enter text to count words and characters..."
              ></textarea>
            </div>
          </div>
        );
        
      case 'lorem-ipsum-generator':
        return (
          <div className="space-y-4">
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Number of paragraphs
              </label>
              <input
                type="number"
                min="1"
                max="10"
                className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                value={toolState.paragraphs || '1'}
                onChange={(e) => handleInputChange('paragraphs', e.target.value)}
              />
            </div>
          </div>
        );
          
      case 'markdown-to-html':
        return (
          <div className="space-y-4">
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Markdown
              </label>
              <textarea
                className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                rows="5"
                value={toolState.markdown || ''}
                onChange={(e) => handleInputChange('markdown', e.target.value)}
                placeholder="Enter markdown to convert to HTML..."
              ></textarea>
            </div>
          </div>
        );
        
      case 'color-picker':
        return (
          <div className="space-y-4">
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Pick a color
              </label>
              <input
                type="color"
                className="w-full h-12"
                value={toolState.color || '#000000'}
                onChange={(e) => handleInputChange('color', e.target.value)}
              />
            </div>
          </div>
        );
        
      case 'color-converter':
        return (
          <div className="space-y-4">
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Color value
              </label>
              <input
                type="text"
                className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                value={toolState.colorValue || ''}
                onChange={(e) => handleInputChange('colorValue', e.target.value)}
                placeholder="Enter color value (e.g., #FF5733)"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  From format
                </label>
                <select
                  className={`block w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  value={toolState.fromFormat || 'hex'}
                  onChange={(e) => handleInputChange('fromFormat', e.target.value)}
                >
                  <option value="hex">HEX</option>
                  <option value="rgb">RGB</option>
                  <option value="hsl">HSL</option>
                </select>
              </div>
              <div>
                <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  To format
                </label>
                <select
                  className={`block w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  value={toolState.toFormat || 'rgb'}
                  onChange={(e) => handleInputChange('toFormat', e.target.value)}
                >
                  <option value="hex">HEX</option>
                  <option value="rgb">RGB</option>
                  <option value="hsl">HSL</option>
                </select>
              </div>
            </div>
          </div>
        );
          
      case 'json-formatter':
        return (
          <div className="space-y-4">
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                JSON input
              </label>
              <textarea
                className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                rows="5"
                value={toolState.json || ''}
                onChange={(e) => handleInputChange('json', e.target.value)}
                placeholder="Enter JSON to format..."
              ></textarea>
            </div>
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Indent size
              </label>
              <input
                type="number"
                min="0"
                max="8"
                className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                value={toolState.indent || '2'}
                onChange={(e) => handleInputChange('indent', e.target.value)}
              />
            </div>
          </div>
        );
        
      // Default tool interface for simple input tools
      default:
        return (
          <div className="space-y-4">
            <div>
              <label className={`block mb-2 font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Input
              </label>
              <textarea
                className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                rows="5"
                value={toolState.input || ''}
                onChange={(e) => handleInputChange('input', e.target.value)}
                placeholder="Enter your input..."
              ></textarea>
            </div>
          </div>
        );
    }
  };

  // Render output based on the tool's result type
  const renderToolOutput = () => {
    if (!toolResult) return null;
    
    // Handle different result types
    if (typeof toolResult === 'string') {
      return (
        <pre className={`p-4 rounded-lg overflow-auto ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
          {toolResult}
        </pre>
      );
    } else if (typeof toolResult === 'object') {
      // Special handling for word counter
      if (tool.id === 'word-counter' && 'words' in toolResult) {
        return (
          <div className={`grid grid-cols-3 gap-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="text-2xl font-bold">{toolResult.words}</div>
              <div className="text-sm text-gray-500">Words</div>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="text-2xl font-bold">{toolResult.chars}</div>
              <div className="text-sm text-gray-500">Characters</div>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="text-2xl font-bold">{toolResult.charsNoSpaces}</div>
              <div className="text-sm text-gray-500">Characters (no spaces)</div>
            </div>
          </div>
        );
      }
      
      // For URL parser
      if (tool.id === 'url-parser') {
        return (
          <div className="space-y-2">
            {Object.entries(toolResult).map(([key, value]) => (
              <div key={key} className={`flex flex-col sm:flex-row sm:items-center p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className={`sm:w-1/4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{key}:</div>
                <div className={`sm:w-3/4 break-all ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{value}</div>
              </div>
            ))}
          </div>
        );
      }
      
      // Default object rendering
      return (
        <pre className={`p-4 rounded-lg overflow-auto ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
          {JSON.stringify(toolResult, null, 2)}
        </pre>
      );
    }
    
    return (
      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
        Result: {String(toolResult)}
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className={`p-2 mr-3 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <div>
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {tool.name}
          </h1>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {tool.description}
          </p>
        </div>
      </div>

      {/* Tool interface */}
      <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
        {renderToolInterface()}
        
        <div className="mt-6">
          <button
            onClick={executeToolAction}
            disabled={isProcessing}
            className={`
              px-4 py-2 rounded-md font-medium flex items-center justify-center
              ${isProcessing 
                ? 'bg-gray-400 cursor-not-allowed' 
                : (isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                )
              }
              transition-colors w-full sm:w-auto
            `}
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : 'Execute'}
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="p-4 rounded-lg bg-red-100 border border-red-300 text-red-700">
          {error}
        </div>
      )}

      {/* Tool output */}
      {toolResult && (
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
          <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Result
          </h2>
          {renderToolOutput()}
        </div>
      )}
    </div>
  );
};

export default ToolContent;