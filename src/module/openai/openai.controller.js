const { OpenAI } = require("openai");

const client = new OpenAI({
  apiKey: process.env.API_KEY_OPENAI
});

const chat = async (req, res) => {
  try {
   const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
    res.json({ message: "Login successful", test: chatCompletion.choices[0].message.content });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { chat };
