"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Dropzone } from "@/components/disease-detection/Dropzone";
import { LoadingSkeleton } from "@/components/disease-detection/LoadingSkeleton";
import { ResultCard } from "@/components/disease-detection/ResultCard";
import { DiseaseInfo } from "@/lib/disease-data";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    disease: string;
    confidence: number;
    details: DiseaseInfo;
    imageUrl: string;
  } | null>(null);

  const handleImageSelect = async (file: File) => {
    setIsLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze image");
      }

      const data = await response.json();
      
      if (data.success) {
        setResult({
          disease: data.data.disease,
          confidence: data.data.confidence,
          details: data.data.details,
          imageUrl: URL.createObjectURL(file),
        });
      } else {
        alert(data.error || "An error occurred");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while analyzing the image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="detect" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detect Disease Now
              </h2>
              <p className="text-gray-400">
                Upload a clear picture of the affected plant leaf for the best results.
              </p>
            </div>

            {!result && (
              <Dropzone onImageSelect={handleImageSelect} isLoading={isLoading} />
            )}

            {isLoading && <LoadingSkeleton />}

            {result && !isLoading && (
              <ResultCard
                disease={result.disease}
                confidence={result.confidence}
                details={result.details}
                imageUrl={result.imageUrl}
                onReset={handleReset}
              />
            )}
          </div>
          
          {/* Decorative background element */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
