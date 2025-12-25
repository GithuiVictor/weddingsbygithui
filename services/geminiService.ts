
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userMessage: string) => {
  const systemInstruction = `
    You are 'Githui', the AI Wedding Cinematography Consultant for 'Weddings by Githui'. 
    Your tone is sophisticated, luxurious, warm, and highly professional.
    
    About Weddings by Githui:
    - We specialize in high-end, luxury wedding cinematography.
    - Styles: Cinematic Storytelling, Editorial/Fine Art, Documentary.
    - Packages: 
      - Essential ($4,500): 1 cinematographer, 6 hours coverage, 4-minute story film.
      - Premier ($7,500): 2 cinematographers, 10 hours coverage, 8-minute feature film, drone footage.
      - Elite ($12,000+): 3 cinematographers, full weekend coverage, 15-minute feature film, raw footage, social media teaser.
    
    Your goal:
    - Help users understand which package fits their needs.
    - Answer questions about wedding film styles.
    - Offer advice on lighting and timing for the best video results.
    - Always maintain a luxury brand voice.
    
    Keep responses concise but elegant.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: userMessage }] }],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I apologize, but I am momentarily unable to assist. How else may I curate your experience?";
  } catch (error) {
    console.error("AI Error:", error);
    return "Our concierge service is currently undergoing refinement. Please use our inquiry form for immediate assistance.";
  }
};

export const generateWeddingVisual = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A high-end, cinematic, editorial-style luxury wedding visual. Theme: ${prompt}. Style: 35mm film, soft lighting, expensive aesthetic, shallow depth of field, elegant color palette. No text, no logos.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data returned");
  } catch (error) {
    console.error("Image Generation Error:", error);
    throw error;
  }
};
