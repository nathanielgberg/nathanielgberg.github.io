import "./global.css";

import { useEffect, useRef, useState } from "react";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// --- Custom Animated Cursor ---
const AnimatedCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [angle, setAngle] = useState(0);
  const lastPos = useRef(pos);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      setTrail((prev) => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() }].slice(-20));
      setAngle(newAngle);
      lastPos.current = { x: e.clientX, y: e.clientY };
    };
    const handleLeave = () => {
      setVisible(false);
      setTrail([]);
    };
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      {/* Rainbow trail */}
      {trail.map((dot, i) => (
        <div
          key={dot.id}
          className="fixed pointer-events-none z-[9998] w-3 h-3 rounded-full"
          style={{
            left: dot.x - 6,
            top: dot.y - 6,
            opacity: (i + 1) / trail.length * 0.5,
            background: `conic-gradient(from ${i * 36}deg, #22c55e, #3b82f6, #a21caf, #f59e42, #22c55e)`,
            filter: `blur(${Math.max(0, 8 - i * 0.4)}px)`
          }}
        />
      ))}
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: pos.x - 16,
          top: pos.y - 16,
          width: 32,
          height: 32,
          transform: `rotate(${angle}deg)`,
        }}
      >
        <div
          className="w-8 h-8 rounded-full border-4 border-transparent animate-cursor-pulse"
          style={{
            background: "conic-gradient(from 0deg, #22c55e, #3b82f6, #a21caf, #f59e42, #22c55e)",
            boxShadow: "0 0 24px 8px #3b82f6, 0 0 48px 16px #a21caf33",
          }}
        >
          <div className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-white/90" style={{transform: "translate(-50%, -50%)"}} />
        </div>
      </div>
      <style>{`
        @keyframes cursor-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }
        .animate-cursor-pulse {
          animation: cursor-pulse 1.2s infinite cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AnimatedCursor />
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
