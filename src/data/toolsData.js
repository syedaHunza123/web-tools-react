// src/data/toolsData.js
export const toolsData = [
  // Text Tools
  {
    id: 'text-case-converter',
    name: 'Text Case Converter',
    description: 'Convert text between uppercase, lowercase, title case, and sentence case',
    category: 'Text Tools',
    icon: '<i class="fas fa-font"></i>'
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, and paragraphs in your text',
    category: 'Text Tools',
    icon: '<i class="fas fa-calculator"></i>'
  },
  {
    id: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    description: 'Generate lorem ipsum placeholder text',
    category: 'Text Tools',
    icon: '<i class="fas fa-paragraph"></i>'
  },
  {
    id: 'text-diff-checker',
    name: 'Text Diff Checker',
    description: 'Compare two texts and highlight the differences',
    category: 'Text Tools',
    icon: '<i class="fas fa-columns"></i>'
  },
  {
    id: 'markdown-to-html',
    name: 'Markdown to HTML',
    description: 'Convert Markdown syntax to HTML',
    category: 'Text Tools',
    icon: '<i class="fas fa-code"></i>'
  },
  {
    id: 'string-escaper',
    name: 'String Escaper',
    description: 'Escape or unescape strings for different programming languages',
    category: 'Text Tools',
    icon: '<i class="fas fa-quote-right"></i>'
  },
  {
    id: 'text-sorter',
    name: 'Text Sorter',
    description: 'Sort lines of text alphabetically or numerically',
    category: 'Text Tools',
    icon: '<i class="fas fa-sort-alpha-down"></i>'
  },
  {
    id: 'text-reverser',
    name: 'Text Reverser',
    description: 'Reverse characters or words in text',
    category: 'Text Tools',
    icon: '<i class="fas fa-exchange-alt"></i>'
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Count the number of characters with or without spaces',
    category: 'Text Tools',
    icon: '<i class="fas fa-text-width"></i>'
  },
  {
    id: 'whitespace-remover',
    name: 'Whitespace Remover',
    description: 'Remove extra spaces, tabs and line breaks',
    category: 'Text Tools',
    icon: '<i class="fas fa-compress"></i>'
  },

  // Color Tools
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Pick and preview colors with a visual interface',
    category: 'Color Tools',
    icon: '<i class="fas fa-eye-dropper"></i>'
  },
  {
    id: 'color-converter',
    name: 'Color Converter',
    description: 'Convert between HEX, RGB, HSL, and CMYK color formats',
    category: 'Color Tools',
    icon: '<i class="fas fa-exchange-alt"></i>'
  },
  {
    id: 'gradient-generator',
    name: 'CSS Gradient Generator',
    description: 'Create beautiful CSS gradients for your projects',
    category: 'Color Tools',
    icon: '<i class="fas fa-palette"></i>'
  },
  {
    id: 'color-palette-generator',
    name: 'Color Palette Generator',
    description: 'Generate harmonious color palettes for your designs',
    category: 'Color Tools',
    icon: '<i class="fas fa-paint-brush"></i>'
  },
  {
    id: 'color-contrast-checker',
    name: 'Color Contrast Checker',
    description: 'Check color contrast for accessibility compliance',
    category: 'Color Tools',
    icon: '<i class="fas fa-adjust"></i>'
  },
  {
    id: 'image-color-picker',
    name: 'Image Color Picker',
    description: 'Extract colors from uploaded images',
    category: 'Color Tools',
    icon: '<i class="fas fa-image"></i>'
  },
  {
    id: 'color-blindness-simulator',
    name: 'Color Blindness Simulator',
    description: 'Simulate how colors are seen with different types of color blindness',
    category: 'Color Tools',
    icon: '<i class="fas fa-low-vision"></i>'
  },

  // Code Tools
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate, and beautify JSON data',
    category: 'Code Tools',
    icon: '<i class="fas fa-code"></i>'
  },
  {
    id: 'html-formatter',
    name: 'HTML Formatter',
    description: 'Format and beautify HTML code',
    category: 'Code Tools',
    icon: '<i class="fas fa-code"></i>'
  },
  {
    id: 'css-formatter',
    name: 'CSS Formatter',
    description: 'Format and beautify CSS code',
    category: 'Code Tools',
    icon: '<i class="fas fa-file-code"></i>'
  },
  {
    id: 'js-formatter',
    name: 'JavaScript Formatter',
    description: 'Format and beautify JavaScript code',
    category: 'Code Tools',
    icon: '<i class="fab fa-js"></i>'
  },
  {
    id: 'sql-formatter',
    name: 'SQL Formatter',
    description: 'Format and beautify SQL queries',
    category: 'Code Tools',
    icon: '<i class="fas fa-database"></i>'
  },
  {
    id: 'xml-formatter',
    name: 'XML Formatter',
    description: 'Format and beautify XML documents',
    category: 'Code Tools',
    icon: '<i class="fas fa-file-code"></i>'
  },
  {
    id: 'code-minifier',
    name: 'Code Minifier',
    description: 'Minify HTML, CSS, and JavaScript code',
    category: 'Code Tools',
    icon: '<i class="fas fa-compress-arrows-alt"></i>'
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and debug regular expressions',
    category: 'Code Tools',
    icon: '<i class="fas fa-search"></i>'
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode JSON Web Tokens',
    category: 'Code Tools',
    icon: '<i class="fas fa-key"></i>'
  },
  {
    id: 'cron-expression-generator',
    name: 'Cron Expression Generator',
    description: 'Generate and validate cron expressions',
    category: 'Code Tools',
    icon: '<i class="fas fa-clock"></i>'
  },

  // URL Tools
  {
    id: 'url-encoder',
    name: 'URL Encoder',
    description: 'Encode URLs to be valid and properly escaped',
    category: 'URL Tools',
    icon: '<i class="fas fa-link"></i>'
  },
  {
    id: 'url-decoder',
    name: 'URL Decoder',
    description: 'Decode URL-encoded strings',
    category: 'URL Tools',
    icon: '<i class="fas fa-unlink"></i>'
  },
  {
    id: 'url-parser',
    name: 'URL Parser',
    description: 'Parse and extract components from URLs',
    category: 'URL Tools',
    icon: '<i class="fas fa-sitemap"></i>'
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener',
    description: 'Create shortened URLs for easier sharing',
    category: 'URL Tools',
    icon: '<i class="fas fa-compress"></i>'
  },
  {
    id: 'query-string-generator',
    name: 'Query String Generator',
    description: 'Build URL query strings from key-value pairs',
    category: 'URL Tools',
    icon: '<i class="fas fa-question"></i>'
  },

  // Math Tools
  {
    id: 'calculator',
    name: 'Calculator',
    description: 'Perform basic and advanced math operations',
    category: 'Math Tools',
    icon: '<i class="fas fa-calculator"></i>'
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units of measurement',
    category: 'Math Tools',
    icon: '<i class="fas fa-exchange-alt"></i>'
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, increases, and decreases',
    category: 'Math Tools',
    icon: '<i class="fas fa-percent"></i>'
  },
  {
    id: 'base-converter',
    name: 'Base Converter',
    description: 'Convert numbers between different numeral systems',
    category: 'Math Tools',
    icon: '<i class="fas fa-random"></i>'
  },
  {
    id: 'number-formatter',
    name: 'Number Formatter',
    description: 'Format numbers with different separators and decimal places',
    category: 'Math Tools',
    icon: '<i class="fas fa-list-ol"></i>'
  },
  {
    id: 'math-equation-solver',
    name: 'Math Equation Solver',
    description: 'Solve mathematical equations step by step',
    category: 'Math Tools',
    icon: '<i class="fas fa-equals"></i>'
  },
  {
    id: 'random-number-generator',
    name: 'Random Number Generator',
    description: 'Generate random numbers within a defined range',
    category: 'Math Tools',
    icon: '<i class="fas fa-dice"></i>'
  },
  {
    id: 'scientific-calculator',
    name: 'Scientific Calculator',
    description: 'Perform advanced scientific calculations',
    category: 'Math Tools',
    icon: '<i class="fas fa-square-root-alt"></i>'
  },

  // Image Tools
  {
    id: 'image-converter',
    name: 'Image Converter',
    description: 'Convert images between different formats',
    category: 'Image Tools',
    icon: '<i class="fas fa-file-image"></i>'
  },
  {
    id: 'image-resizer',
    name: 'Image Resizer',
    description: 'Resize images to specific dimensions',
    category: 'Image Tools',
    icon: '<i class="fas fa-expand"></i>'
  },
  {
    id: 'image-cropper',
    name: 'Image Cropper',
    description: 'Crop images to desired dimensions',
    category: 'Image Tools',
    icon: '<i class="fas fa-crop"></i>'
  },
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    description: 'Compress images to reduce file size',
    category: 'Image Tools',
    icon: '<i class="fas fa-compress"></i>'
  },
  {
    id: 'image-filter-applier',
    name: 'Image Filter Applier',
    description: 'Apply filters and effects to images',
    category: 'Image Tools',
    icon: '<i class="fas fa-adjust"></i>'
  },
  {
    id: 'image-background-remover',
    name: 'Image Background Remover',
    description: 'Remove backgrounds from images',
    category: 'Image Tools',
    icon: '<i class="fas fa-eraser"></i>'
  },
  {
    id: 'svg-optimizer',
    name: 'SVG Optimizer',
    description: 'Optimize SVG files by reducing size and complexity',
    category: 'Image Tools',
    icon: '<i class="fas fa-bezier-curve"></i>'
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Generate QR codes for URLs, text, and contact information',
    category: 'Image Tools',
    icon: '<i class="fas fa-qrcode"></i>'
  },

  // Data Tools
  {
    id: 'csv-to-json',
    name: 'CSV to JSON',
    description: 'Convert CSV data to JSON format',
    category: 'Data Tools',
    icon: '<i class="fas fa-file-csv"></i>'
  },
  {
    id: 'json-to-csv',
    name: 'JSON to CSV',
    description: 'Convert JSON data to CSV format',
    category: 'Data Tools',
    icon: '<i class="fas fa-file-code"></i>'
  },
  {
    id: 'xml-to-json',
    name: 'XML to JSON',
    description: 'Convert XML data to JSON format',
    category: 'Data Tools',
    icon: '<i class="fas fa-file-code"></i>'
  },
  {
    id: 'json-to-xml',
    name: 'JSON to XML',
    description: 'Convert JSON data to XML format',
    category: 'Data Tools',
    icon: '<i class="fas fa-file-code"></i>'
  },
  {
    id: 'yaml-to-json',
    name: 'YAML to JSON',
    description: 'Convert YAML data to JSON format',
    category: 'Data Tools',
    icon: '<i class="fas fa-file-alt"></i>'
  },
  {
    id: 'json-to-yaml',
    name: 'JSON to YAML',
    description: 'Convert JSON data to YAML format',
    category: 'Data Tools',
    icon: '<i class="fas fa-file-alt"></i>'
  },
  {
    id: 'data-validator',
    name: 'Data Validator',
    description: 'Validate data against common formats and schemas',
    category: 'Data Tools',
    icon: '<i class="fas fa-check-circle"></i>'
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Generate UUIDs/GUIDs in various formats',
    category: 'Data Tools',
    icon: '<i class="fas fa-fingerprint"></i>'
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate hash values using various algorithms',
    category: 'Data Tools',
    icon: '<i class="fas fa-hashtag"></i>'
  },

  // Date & Time Tools
  {
    id: 'date-calculator',
    name: 'Date Calculator',
    description: 'Calculate the difference between dates or add/subtract time',
    category: 'Date & Time Tools',
    icon: '<i class="fas fa-calendar-alt"></i>'
  },
  {
    id: 'timestamp-converter',
    name: 'Timestamp Converter',
    description: 'Convert between timestamps and human-readable dates',
    category: 'Date & Time Tools',
    icon: '<i class="fas fa-clock"></i>'
  },
  {
    id: 'timezone-converter',
    name: 'Timezone Converter',
    description: 'Convert times between different timezones',
    category: 'Date & Time Tools',
    icon: '<i class="fas fa-globe"></i>'
  },
  {
    id: 'date-formatter',
    name: 'Date Formatter',
    description: 'Format dates in different styles and patterns',
    category: 'Date & Time Tools',
    icon: '<i class="fas fa-calendar-day"></i>'
  },
  {
    id: 'countdown-timer',
    name: 'Countdown Timer',
    description: 'Create a countdown to a specific date and time',
    category: 'Date & Time Tools',
    icon: '<i class="fas fa-hourglass-half"></i>'
  },

  // Encryption Tools
  {
    id: 'text-encryptor',
    name: 'Text Encryptor',
    description: 'Encrypt and decrypt text using various algorithms',
    category: 'Encryption Tools',
    icon: '<i class="fas fa-lock"></i>'
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, random passwords',
    category: 'Encryption Tools',
    icon: '<i class="fas fa-key"></i>'
  },
  {
    id: 'password-strength-checker',
    name: 'Password Strength Checker',
    description: 'Check how strong a password is',
    category: 'Encryption Tools',
    icon: '<i class="fas fa-shield-alt"></i>'
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode text using Base64',
    category: 'Encryption Tools',
    icon: '<i class="fas fa-exchange-alt"></i>'
  },
  {
    id: 'jwt-generator',
    name: 'JWT Generator',
    description: 'Generate JSON Web Tokens with custom payloads',
    category: 'Encryption Tools',
    icon: '<i class="fas fa-signature"></i>'
  },
  {
    id: 'hmac-generator',
    name: 'HMAC Generator',
    description: 'Generate HMAC authentication codes',
    category: 'Encryption Tools',
    icon: '<i class="fas fa-fingerprint"></i>'
  },

  // SEO Tools
  {
    id: 'meta-tag-generator',
    name: 'Meta Tag Generator',
    description: 'Generate meta tags for better SEO',
    category: 'SEO Tools',
    icon: '<i class="fas fa-tags"></i>'
  },
  {
    id: 'robots-txt-generator',
    name: 'Robots.txt Generator',
    description: 'Create robots.txt files to control search engines',
    category: 'SEO Tools',
    icon: '<i class="fas fa-robot"></i>'
  },
  {
    id: 'htaccess-generator',
    name: '.htaccess Generator',
    description: 'Generate .htaccess files for Apache servers',
    category: 'SEO Tools',
    icon: '<i class="fas fa-file-code"></i>'
  },
  {
    id: 'keyword-density-checker',
    name: 'Keyword Density Checker',
    description: 'Check keyword density in text content',
    category: 'SEO Tools',
    icon: '<i class="fas fa-percentage"></i>'
  },
  {
    id: 'sitemap-generator',
    name: 'Sitemap Generator',
    description: 'Generate XML sitemaps for websites',
    category: 'SEO Tools',
    icon: '<i class="fas fa-sitemap"></i>'
  },

  // Networking Tools
  {
    id: 'ip-lookup',
    name: 'IP Lookup',
    description: 'Get information about an IP address',
    category: 'Networking Tools',
    icon: '<i class="fas fa-network-wired"></i>'
  },
  {
    id: 'dns-lookup',
    name: 'DNS Lookup',
    description: 'Perform DNS lookups for different record types',
    category: 'Networking Tools',
    icon: '<i class="fas fa-server"></i>'
  },
  {
    id: 'whois-lookup',
    name: 'WHOIS Lookup',
    description: 'Look up WHOIS information for domains',
    category: 'Networking Tools',
    icon: '<i class="fas fa-search"></i>'
  },
  {
    id: 'ping-tool',
    name: 'Ping Tool',
    description: 'Check if a server is online and measure response time',
    category: 'Networking Tools',
    icon: '<i class="fas fa-exchange-alt"></i>'
  },
  {
    id: 'port-scanner',
    name: 'Port Scanner',
    description: 'Check which ports are open on a server',
    category: 'Networking Tools',
    icon: '<i class="fas fa-door-open"></i>'
  },
  {
    id: 'http-headers-checker',
    name: 'HTTP Headers Checker',
    description: 'Check HTTP headers of a website',
    category: 'Networking Tools',
    icon: '<i class="fas fa-heading"></i>'
  },

  // Validator Tools
  {
    id: 'email-validator',
    name: 'Email Validator',
    description: 'Validate email addresses for correct format',
    category: 'Validator Tools',
    icon: '<i class="fas fa-envelope"></i>'
  },
  {
    id: 'css-validator',
    name: 'CSS Validator',
    description: 'Validate CSS code for errors and warnings',
    category: 'Validator Tools',
    icon: '<i class="fab fa-css3"></i>'
  },
  {
    id: 'html-validator',
    name: 'HTML Validator',
    description: 'Validate HTML code for errors and warnings',
    category: 'Validator Tools',
    icon: '<i class="fab fa-html5"></i>'
  },
  {
    id: 'json-validator',
    name: 'JSON Validator',
    description: 'Validate JSON for correct syntax',
    category: 'Validator Tools',
    icon: '<i class="fas fa-check-circle"></i>'
  },
  {
    id: 'xml-validator',
    name: 'XML Validator',
    description: 'Validate XML for correct syntax',
    category: 'Validator Tools',
    icon: '<i class="fas fa-file-code"></i>'
  },
  {
    id: 'credit-card-validator',
    name: 'Credit Card Validator',
    description: 'Validate credit card numbers using the Luhn algorithm',
    category: 'Validator Tools',
    icon: '<i class="fas fa-credit-card"></i>'
  },
  {
    id: 'domain-validator',
    name: 'Domain Validator',
    description: 'Check if a domain name is valid and available',
    category: 'Validator Tools',
    icon: '<i class="fas fa-globe"></i>'
  },

  // Text Conversion Tools
  {
    id: 'binary-converter',
    name: 'Binary Converter',
    description: 'Convert between text and binary representations',
    category: 'Text Conversion Tools',
    icon: '<i class="fas fa-exchange-alt"></i>'
  },
  {
    id: 'morse-code-converter',
    name: 'Morse Code Converter',
    description: 'Convert between text and morse code',
    category: 'Text Conversion Tools',
    icon: '<i class="fas fa-dot-circle"></i>'
  },
  {
    id: 'hex-converter',
    name: 'Hex Converter',
    description: 'Convert between text and hexadecimal',
    category: 'Text Conversion Tools',
    icon: '<i class="fas fa-exchange-alt"></i>'
  },
  {
    id: 'ascii-converter',
    name: 'ASCII Converter',
    description: 'Convert between text and ASCII codes',
    category: 'Text Conversion Tools',
    icon: '<i class="fas fa-font"></i>'
  },
  {
    id: 'roman-numeral-converter',
    name: 'Roman Numeral Converter',
    description: 'Convert between numbers and Roman numerals',
    category: 'Text Conversion Tools',
    icon: '<i class="fas fa-sort-numeric-down"></i>'
  }
];