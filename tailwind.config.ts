import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: "class",
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            /* oklch/full colors in globals — use var(), not hsl() */
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: {
               DEFAULT: "var(--primary)",
               foreground: "var(--primary-foreground)",
            },
            secondary: {
               DEFAULT: "var(--secondary)",
               foreground: "var(--secondary-foreground)",
            },
            "primary-accent": "var(--primary-accent)",
            "foreground-accent": "var(--foreground-accent)",
            "hero-background": "var(--hero-background)",
            card: {
               DEFAULT: "var(--card)",
               foreground: "var(--card-foreground)",
            },
            popover: {
               DEFAULT: "var(--popover)",
               foreground: "var(--popover-foreground)",
            },
            muted: {
               DEFAULT: "var(--muted)",
               foreground: "var(--muted-foreground)",
            },
            accent: {
               DEFAULT: "var(--accent)",
               foreground: "var(--accent-foreground)",
            },
            destructive: {
               DEFAULT: "var(--destructive)",
               foreground: "var(--destructive-foreground)",
            },
            border: "var(--border)",
            input: "var(--input)",
            ring: "var(--ring)",
            chart: {
               "1": "var(--chart-1)",
               "2": "var(--chart-2)",
               "3": "var(--chart-3)",
               "4": "var(--chart-4)",
               "5": "var(--chart-5)",
            },
            sidebar: {
               DEFAULT: "hsl(var(--sidebar-background))",
               foreground: "var(--sidebar-foreground)",
               primary: "var(--sidebar-primary)",
               "primary-foreground": "var(--sidebar-primary-foreground)",
               accent: "var(--sidebar-accent)",
               "accent-foreground": "var(--sidebar-accent-foreground)",
               border: "var(--sidebar-border)",
               ring: "var(--sidebar-ring)",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         boxShadow: {
            card:
               "0 8px 32px -12px rgb(15 23 42 / 0.09), 0 2px 8px -4px rgb(15 23 42 / 0.05)",
            "card-hover":
               "0 12px 40px -12px rgb(15 23 42 / 0.12), 0 4px 12px -4px rgb(15 23 42 / 0.06)",
         },
         keyframes: {
            "accordion-down": {
               from: {
                  height: "0",
               },
               to: {
                  height: "var(--radix-accordion-content-height)",
               },
            },
            "accordion-up": {
               from: {
                  height: "var(--radix-accordion-content-height)",
               },
               to: {
                  height: "0",
               },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};
export default config;
