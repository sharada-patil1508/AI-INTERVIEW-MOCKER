/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: "#3B82F6", // Tailwind blue-500
            "primary-foreground": "#ffffff",
  
          secondary: "#f3f4f6",
          "secondary-foreground": "#111827",
  
          destructive: "#EF4444",
          "destructive-foreground": "#ffffff",
  
          accent: "#F9FAFB",
          "accent-foreground": "#1F2937",
  
          ring: "#3B82F6", // for focus-visible ring
          background: "#ffffff",
          input: "#E5E7EB",
        },
      },
    },
    plugins: [],
  };
  