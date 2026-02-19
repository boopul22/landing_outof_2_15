import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, but I can't connect to the AI service right now. Please check your API key configuration.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are "QuickBot," the intelligent insurance assistant for QuickCover USA. 
        
        Your Mission:
        1. Simplify insurance jargon (explain liability, comprehensive, collision, deductibles simply).
        2. Help users save money by explaining factors that lower rates (bundling, safe driving, credit score).
        3. Use the 'googleSearch' tool to provide up-to-date information on general insurance trends, average rates in their state, or news if asked.
        
        Key Behaviors:
        - Tone: Professional, Empathetic, Modern, and Concise.
        - Format: Use bullet points for lists. Keep paragraphs short.
        - Call to Action: If a user seems ready to buy or asks for a price, strongly encourage them to "fill out the Smart Quote form on this page" to get an accurate, personalized rate.
        - Grounding: If you use the search tool, summarize the findings naturally.
        - Disclaimer: Always remind users you are an AI and they should verify details with the final carrier.`,
        tools: [{googleSearch: {}}],
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm analyzing the data but couldn't generate a clear response. Could you rephrase your question?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic and couldn't connect to the knowledge base. Please try again in a moment.";
  }
};