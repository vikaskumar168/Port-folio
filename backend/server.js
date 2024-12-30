import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chatbot", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo",
      prompt: `You are a chatbot on my portfolio site. Respond concisely to this query: "${message}"`,
      max_tokens: 150,
    });

    res.json({
      reply: response.choices[0].text.trim(),
    });
  } catch (error) {
    console.error("Error creating completion:", error);
    res.status(500).json({
      error: "An error occurred while processing your request.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
