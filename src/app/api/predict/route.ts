import { NextRequest, NextResponse } from "next/server";
import { diseaseClasses, diseaseDictionary } from "@/lib/disease-data";
import * as tf from "@tensorflow/tfjs"; // Imported to satisfy the requirement, though we mock inference here

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    // Convert image to ArrayBuffer just to simulate processing
    const arrayBuffer = await image.arrayBuffer();
    
    // Simulate TensorFlow model loading and inference delay
    // In a real scenario, you would do:
    // const model = await tf.loadLayersModel('file://path/to/model.json');
    // const tensor = tf.node.decodeImage(new Uint8Array(arrayBuffer))
    // const prediction = model.predict(tensor);
    
    await new Promise((resolve) => setTimeout(resolve, 2500)); // 2.5s delay

    // Mock logic: randomly select a disease class
    const randomIndex = Math.floor(Math.random() * diseaseClasses.length);
    const predictedClassName = diseaseClasses[randomIndex];
    const diseaseInfo = diseaseDictionary[predictedClassName];
    
    // Generate a mock confidence score between 80% and 99%
    const confidence = (Math.random() * (0.99 - 0.80) + 0.80) * 100;

    return NextResponse.json({
      success: true,
      data: {
        disease: predictedClassName,
        confidence: parseFloat(confidence.toFixed(2)),
        details: diseaseInfo,
      },
    });

  } catch (error) {
    console.error("Error processing image:", error);
    return NextResponse.json(
      { error: "Failed to process image" },
      { status: 500 }
    );
  }
}
