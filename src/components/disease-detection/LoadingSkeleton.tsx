"use client";

import { motion } from "framer-motion";

export function LoadingSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full glass-panel rounded-2xl p-6 md:p-8 mt-8 border border-white/10"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="w-full aspect-square rounded-xl bg-gray-800/50 animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-6">
          <div>
            <div className="h-4 w-24 bg-gray-800/50 rounded animate-pulse mb-3"></div>
            <div className="h-10 w-3/4 bg-gray-800/50 rounded-lg animate-pulse mb-4"></div>
            <div className="h-6 w-32 bg-gray-800/50 rounded animate-pulse"></div>
          </div>
          
          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="h-5 w-1/3 bg-gray-800/50 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-800/50 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-800/50 rounded animate-pulse"></div>
            <div className="h-4 w-4/6 bg-gray-800/50 rounded animate-pulse"></div>
          </div>
          
          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="h-5 w-1/4 bg-gray-800/50 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-800/50 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-800/50 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center items-center gap-3 text-emerald-400">
        <div className="w-5 h-5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin"></div>
        <span className="text-sm font-medium animate-pulse">Analyzing image with AI models...</span>
      </div>
    </motion.div>
  );
}
