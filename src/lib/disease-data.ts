export interface DiseaseInfo {
  name: string;
  description: string;
  treatment: string;
  severity: "low" | "medium" | "high" | "none";
}

export const diseaseDictionary: Record<string, DiseaseInfo> = {
  "Healthy": {
    name: "Healthy Plant",
    description: "The leaf appears perfectly healthy with no signs of fungal, bacterial, or viral infections. The color is even and there are no visible spots or discoloration.",
    treatment: "Continue current watering and fertilizing routines. Ensure the plant receives adequate sunlight.",
    severity: "none"
  },
  "Leaf Spot": {
    name: "Leaf Spot",
    description: "Fungal leaf spots are typically uniform with dark margins and lighter centers. If left untreated, they can cause leaves to drop prematurely.",
    treatment: "Remove infected leaves. Improve air circulation around the plant. Apply a copper-based fungicide if the infection is severe.",
    severity: "medium"
  },
  "Early Blight": {
    name: "Early Blight",
    description: "Characterized by small black or brown lesions, mostly on older foliage. As they grow, they form concentric rings in a target pattern.",
    treatment: "Use a protective fungicide spray before symptoms appear. Prune and dispose of infected lower branches. Practice crop rotation.",
    severity: "high"
  },
  "Powdery Mildew": {
    name: "Powdery Mildew",
    description: "Shows as white or gray powdery spots, mostly on the upper surfaces of leaves. It thrives in high humidity and moderate temperatures.",
    treatment: "Apply sulfur or potassium bicarbonate sprays. Ensure good air flow and avoid overhead watering to keep foliage dry.",
    severity: "medium"
  },
  "Bacterial Spot": {
    name: "Bacterial Spot",
    description: "Starts as small water-soaked spots that turn dark brown or black. The spots often have a yellow halo and can cause severe defoliation.",
    treatment: "Bacterial diseases are hard to cure. Remove infected plants or parts immediately. Avoid overhead irrigation and use copper sprays as a preventative measure.",
    severity: "high"
  }
};

export const diseaseClasses = Object.keys(diseaseDictionary);
