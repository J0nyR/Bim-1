import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" attribute="class">
      <App />
    </ThemeProvider>
  );
}