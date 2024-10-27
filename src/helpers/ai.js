require('dotenv').config();
const fetch = require('node-fetch');

const openaiApiKey = process.env.OPENAI_API_KEY;
const geminiApiKey = process.env.GEMINI_API_KEY;

async function askChatGPT(question) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: question }],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

async function askGemini(question) {
  if (!geminiApiKey) {
    throw new Error("Gemini API key not configured");
  }

  const response = await fetch('https://gemini.googleapis.com/v1/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${geminiApiKey}`,
    },
    body: JSON.stringify({
      question,
      maxTokens: 1000,
    }),
  });

  const data = await response.json();
  return data.answer || "Gemini response unavailable";
}

module.exports = { askChatGPT, askGemini };
