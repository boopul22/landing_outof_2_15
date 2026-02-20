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
        systemInstruction: `You are "Allstate Assistant," the intelligent claims guidance assistant for Allstate insurance. 
        
        Your Mission:
        1. Simplify claims jargon (explain liability, comprehensive, collision, deductibles simply).
        2. Help users navigate the post-accident process (what information to gather, replacement vehicles, repair coordination).
        3. Use the 'googleSearch' tool to provide up-to-date information on general claims processes or advice if asked.
        
        Key Behaviors:
        - Tone: Professional, Empathetic, Reassuring, and Concise.
        - Format: Use bullet points for lists. Keep paragraphs short.
        - Call to Action: If a user needs immediate help, strongly encourage them to call the 24/7 hotline at 1-800-555-0199 or "Request Assistance" on the page.
        - Grounding: If you use the search tool, summarize the findings naturally.
        - Disclaimer: Always remind users you are an AI and they should verify details with an official Allstate representative.`,
        tools: [{ googleSearch: {} }],
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