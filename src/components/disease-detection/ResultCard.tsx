"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, AlertCircle, Info, Stethoscope, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { DiseaseInfo } from "@/lib/disease-data";

interface ResultCardProps {
  disease: string;
  confidence: number;
  details: DiseaseInfo;
  imageUrl: string;
  onReset: () => void;
}

export function ResultCard({ disease, confidence, details, imageUrl, onReset }: ResultCardProps) {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "none":
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      case "low":
        return <Info className="w-6 h-6 text-blue-400" />;
      case "medium":
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case "high":
        return <AlertCircle className="w-6 h-6 text-red-400" />;
      default:
        return <Info className="w-6 h-6 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "none":
        return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
      case "low":
        return "text-blue-400 border-blue-500/30 bg-blue-500/10";
      case "medium":
        return "text-yellow-400 border-yellow-500/30 bg-yellow-500/10";
      case "high":
        return "text-red-400 border-red-500/30 bg-red-500/10";
      default:
        return "text-gray-400 border-gray-500/30 bg-gray-500/10";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 p-6 md:p-8 bg-black/20 flex flex-col items-center justify-center border-r border-white/5">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 ring-1 ring-white/10 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="Analyzed leaf" className="object-cover w-full h-full" />
            
            {/* Scanning overlay effect */}
            <motion.div 
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10"
            />
          </div>
          
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10 w-full justify-center"
          >
            <RefreshCw className="w-4 h-4" />
            Analyze Another Photo
          </button>
        </div>

        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              {getSeverityIcon(details.severity)}
              <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Analysis Result
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {disease}
            </h2>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-black/30 border border-white/5 flex items-center gap-2">
                <span className="text-sm text-gray-400">Confidence:</span>
                <span className="text-lg font-bold text-emerald-400">{confidence}%</span>
              </div>
              <div className={cn("px-4 py-2 rounded-lg border flex items-center gap-2 capitalize font-medium", getSeverityColor(details.severity))}>
                Severity: {details.severity}
              </div>
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="p-5 rounded-xl bg-black/20 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-400" />
                Description
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {details.description}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/20 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-emerald-400" />
                Suggested Treatment
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {details.treatment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
