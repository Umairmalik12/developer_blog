"use client"

import { useState, useEffect } from "react"
import { Search, Copy, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { Pagination } from "@/components/pagination"
import { toast } from "@/hooks/use-toast"

export default function CodeSnippetsPage() {
  // Mock data for code snippets - expanded with more snippets
  const allCodeSnippets = [
    {
      id: 1,
      title: "React useEffect Cleanup",
      description: "A pattern for properly cleaning up effects in React components.",
      language: "jsx",
      category: "React",
      code: `useEffect(() => {
  // Setup code
  const subscription = subscribeToData();
  
  // Cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, [dependency]);`,
    },
    {
      id: 2,
      title: "Local Storage Helper Functions",
      description: "Utility functions for working with localStorage in JavaScript.",
      language: "javascript",
      category: "JavaScript",
      code: `// Save data to localStorage
function saveToLocalStorage(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
}

// Get data from localStorage
function getFromLocalStorage(key, defaultValue = null) {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) return defaultValue;
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
}

// Remove data from localStorage
function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
}`,
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      description: "A responsive grid layout using CSS Grid.",
      language: "css",
      category: "CSS",
      code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}`,
    },
    {
      id: 4,
      title: "JavaScript Array Methods",
      description: "Common array methods for filtering, mapping, and reducing data.",
      language: "javascript",
      category: "JavaScript",
      code: `// Filter array
const filtered = array.filter(item => item.value > 10);

// Map array
const mapped = array.map(item => ({
  ...item,
  modified: true
}));

// Reduce array
const sum = array.reduce((total, item) => total + item.value, 0);`,
    },
    {
      id: 5,
      title: "React Custom Hook",
      description: "A custom hook for managing form state in React.",
      language: "jsx",
      category: "React",
      code: `function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(values);
  };
  
  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
}`,
    },
    {
      id: 6,
      title: "CSS Animation Keyframes",
      description: "How to create CSS animations with keyframes.",
      language: "css",
      category: "CSS",
      code: `@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-element {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Delay animation for multiple elements */
.animated-element:nth-child(2) {
  animation-delay: 0.2s;
}

.animated-element:nth-child(3) {
  animation-delay: 0.4s;
}`,
    },
    {
      id: 7,
      title: "TypeScript Interface vs Type",
      description: "Understanding the differences between interfaces and types in TypeScript.",
      language: "typescript",
      category: "TypeScript",
      code: `// Interface
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

// Extending an interface
interface Employee extends User {
  department: string;
  salary: number;
}

// Type
type Product = {
  id: number;
  name: string;
  price: number;
}

// Union type (not possible with interfaces)
type Status = 'pending' | 'approved' | 'rejected';

// Intersection type
type AdminUser = User & { permissions: string[] };`,
    },
    {
      id: 8,
      title: "HTML Semantic Elements",
      description: "Using semantic HTML elements for better accessibility and SEO.",
      language: "html",
      category: "HTML",
      code: `<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h1>Main Content Heading</h1>
    <article>
      <h2>Article Title</h2>
      <p>Article content goes here...</p>
    </article>
  </section>
  
  <aside>
    <h2>Related Information</h2>
    <p>Sidebar content goes here...</p>
  </aside>
</main>

<footer>
  <p>&copy; 2025 My Website. All rights reserved.</p>
</footer>`,
    },
    // Additional code snippets
    {
      id: 9,
      title: "React Context API",
      description: "Setting up and using React Context for state management.",
      language: "jsx",
      category: "React",
      code: `// Create a context
const ThemeContext = React.createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the context
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Usage in a component
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      style={{ 
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
    >
      Toggle Theme
    </button>
  );
}`,
    },
    {
      id: 10,
      title: "CSS Variables for Theming",
      description: "Using CSS custom properties (variables) for theme switching.",
      language: "css",
      category: "CSS",
      code: `:root {
  /* Light theme (default) */
  --background-color: #ffffff;
  --text-color: #333333;
  --primary-color: #4a90e2;
  --secondary-color: #f5f5f5;
  --border-color: #e1e1e1;
}

/* Dark theme */
.dark-theme {
  --background-color: #222222;
  --text-color: #f0f0f0;
  --primary-color: #5a9ff2;
  --secondary-color: #333333;
  --border-color: #444444;
}

/* Using the variables */
body {
  background-color: var(--background-color);
  color: var(--text-color);
}

.button {
  background-color: var(--primary-color);
  color: white;
  border: 1px solid var(--border-color);
}

.card {
  background-color: var(--secondary-color);
  border: 1px solid var(--border-color);
}`,
    },
    {
      id: 11,
      title: "JavaScript Fetch API with Async/Await",
      description: "Modern way to make HTTP requests using Fetch API with async/await.",
      language: "javascript",
      category: "JavaScript",
      code: `// Basic GET request
async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// POST request with JSON data
async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Post error:', error);
    throw error;
  }
}

// Usage example
async function getUserData(userId) {
  try {
    const user = await fetchData(\`https://api.example.com/users/\${userId}\`);
    console.log('User data:', user);
    return user;
  } catch (error) {
    console.error('Failed to fetch user data');
    // Handle error appropriately
  }
}`,
    },
    {
      id: 12,
      title: "TypeScript Utility Types",
      description: "Common TypeScript utility types and their usage.",
      language: "typescript",
      category: "TypeScript",
      code: `// Original interface
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: 'admin' | 'user' | 'guest';
}

// Partial - All properties become optional
type PartialUser = Partial<User>;
// Equivalent to:
// { id?: number; name?: string; email?: string; age?: number; role?: 'admin' | 'user' | 'guest'; }

// Required - All properties become required
type RequiredUser = Required<User>;

// Pick - Select specific properties
type UserCredentials = Pick<User, 'email' | 'id'>;
// Equivalent to: { email: string; id: number; }

// Omit - Remove specific properties
type PublicUser = Omit<User, 'id' | 'email'>;
// Equivalent to: { name: string; age: number; role: 'admin' | 'user' | 'guest'; }

// Record - Create a type with specified keys and value type
type UserRoles = Record<'admin' | 'user' | 'guest', string[]>;
// Equivalent to: { admin: string[]; user: string[]; guest: string[]; }

// Readonly - Make all properties readonly
type ReadonlyUser = Readonly<User>;

// ReturnType - Extract the return type of a function
function createUser(name: string, email: string): User {
  return { id: Date.now(), name, email, age: 0, role: 'user' };
}
type NewUser = ReturnType<typeof createUser>; // User`,
    },
    {
      id: 13,
      title: "CSS Grid Template Areas",
      description: "Using named grid areas for layout in CSS Grid.",
      language: "css",
      category: "CSS",
      code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;
  height: 100vh;
  
  /* Define named grid areas */
  grid-template-areas:
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";
}

.header {
  grid-area: header;
  background-color: #f0f0f0;
}

.sidebar {
  grid-area: sidebar;
  background-color: #e0e0e0;
}

.main-content {
  grid-area: main;
  background-color: #d0d0d0;
}

.footer {
  grid-area: footer;
  background-color: #c0c0c0;
}

/* Responsive layout - stack sidebar and main on small screens */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
}`,
    },
    {
      id: 14,
      title: "React useReducer Hook",
      description: "Managing complex state with useReducer in React.",
      language: "jsx",
      category: "React",
      code: `import React, { useReducer } from 'react';

// Define initial state
const initialState = {
  count: 0,
  loading: false,
  error: null
};

// Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    case 'LOADING':
      return { ...state, loading: true, error: null };
    case 'SUCCESS':
      return { ...state, loading: false, count: action.payload };
    case 'ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error(\`Unhandled action type: \${action.type}\`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, loading, error } = state;
  
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });
  
  const fetchCount = async () => {
    dispatch({ type: 'LOADING' });
    try {
      // Simulate API call
      const response = await fetch('/api/count');
      const data = await response.json();
      dispatch({ type: 'SUCCESS', payload: data.count });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  };
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={fetchCount}>Fetch Count</button>
    </div>
  );
}`,
    },
    {
      id: 15,
      title: "JavaScript Debounce Function",
      description: "Implementing a debounce function for performance optimization.",
      language: "javascript",
      category: "JavaScript",
      code: `/**
 * Creates a debounced function that delays invoking the provided function
 * until after 'wait' milliseconds have elapsed since the last time it was invoked.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @param {boolean} [immediate=false] - Whether to invoke the function on the leading edge
 * @returns {Function} The debounced function
 */
function debounce(func, wait, immediate = false) {
  let timeout;
  
  return function executedFunction(...args) {
    const context = this;
    
    // Store the current call context and arguments for later execution
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    // Should the function be called now? (on the leading edge)
    const callNow = immediate && !timeout;
    
    // Reset the timer for this invocation
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    // If we're on the leading edge, invoke the function now
    if (callNow) func.apply(context, args);
  };
}

// Usage example - debounce a search input
const searchInput = document.getElementById('search-input');
const performSearch = (query) => {
  console.log(\`Searching for: \${query}\`);
  // Actual search logic here
};

// Create a debounced version that only executes 300ms after the last call
const debouncedSearch = debounce((event) => {
  performSearch(event.target.value);
}, 300);

// Attach the debounced function to the input event
searchInput.addEventListener('input', debouncedSearch);`,
    },
  ]

  // State for search, pagination, and filtering
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredSnippets, setFilteredSnippets] = useState(allCodeSnippets)
  const [displayedSnippets, setDisplayedSnippets] = useState<typeof allCodeSnippets>([])
  const snippetsPerPage = 4

  // Generate categories from snippets
  const categories = ["All", ...Array.from(new Set(allCodeSnippets.map((snippet) => snippet.category)))]

  // Filter snippets when dependencies change
  useEffect(() => {
    let result = [...allCodeSnippets]

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (snippet) =>
          snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          snippet.code.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((snippet) => snippet.category === selectedCategory)
    }

    setFilteredSnippets(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchTerm, selectedCategory])

  // Update displayed snippets when filtered snippets or current page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * snippetsPerPage
    const endIndex = startIndex + snippetsPerPage
    setDisplayedSnippets(filteredSnippets.slice(startIndex, endIndex))
  }, [filteredSnippets, currentPage])

  // Calculate total pages
  const totalPages = Math.ceil(filteredSnippets.length / snippetsPerPage)

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCopyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Copied to clipboard!",
      description: "The code snippet has been copied to your clipboard.",
    })
  }

  return (
    <main className="flex-1 bg-gray-950">
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Code <span className="text-gold-500">Snippets</span>
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-lg">
              A collection of reusable code patterns and solutions to common problems.
            </p>
            <div className="w-full max-w-md mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search snippets..."
                  className="pl-10 bg-gray-900 border-gray-800 focus-visible:ring-gold-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList className="bg-gray-900 p-1 overflow-x-auto flex-nowrap">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-gray-800 data-[state=active]:text-gold-500 px-4 py-2"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <Button variant="outline" size="icon" className="border-gray-800">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {displayedSnippets.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {displayedSnippets.map((snippet) => (
                      <Card
                        key={snippet.id}
                        className="bg-gray-900 border-gray-800 hover:border-gold-500/50 transition-all"
                      >
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-white">{snippet.title}</CardTitle>
                              <p className="text-sm text-gray-400 mt-1">{snippet.description}</p>
                            </div>
                            <Badge className="bg-gold-500 hover:bg-gold-600 text-black">{snippet.category}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <CodeBlock code={snippet.code} language={snippet.language} />
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-gold-500 border-gold-500/30 hover:bg-gold-500/10"
                            onClick={() => handleCopyToClipboard(snippet.code)}
                          >
                            <Copy className="mr-2 h-3.5 w-3.5" />
                            Copy to Clipboard
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold text-white mb-2">No snippets found</h3>
                    <p className="text-gray-400">
                      Try adjusting your search or filters to find what you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4 border-gold-500/30 text-gold-500 hover:bg-gold-500/10"
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedCategory("All")
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}

            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
              </div>
            )}
          </Tabs>
        </div>
      </section>
    </main>
  )
}
