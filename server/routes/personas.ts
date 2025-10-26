import express from 'express';
import { generatePersonasWithAI } from '../services/openai';

const router = express.Router();

router.post('/generate-personas', async (req, res) => {
  try {
    const { outcome, audience } = req.body;

    // Validate inputs
    if (!outcome || !audience) {
      return res.status(400).json({
        success: false,
        message: 'Both outcome and audience are required',
      });
    }

    if (outcome.length < 3 || audience.length < 3) {
      return res.status(400).json({
        success: false,
        message: 'Outcome and audience must be at least 3 characters long',
      });
    }

    // Generate personas using OpenAI
    const personas = await generatePersonasWithAI(outcome, audience);

    res.json({
      success: true,
      personas,
    });
  } catch (error) {
    console.error('Error generating personas:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate personas. Please try again.',
    });
  }
});

export default router;

