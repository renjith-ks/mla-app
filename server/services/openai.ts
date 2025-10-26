import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Persona {
  id: string;
  title: string;
  description: string;
  painPoints: string[];
  goals: string[];
}

export async function generatePersonasWithAI(
  outcome: string,
  audience: string
): Promise<Persona[]> {
  const prompt = `You are an expert course creator and marketing strategist. Generate 4 distinct audience personas for someone who wants to teach "${outcome}" to "${audience}".

For each persona, provide:
1. A catchy, descriptive title (e.g., "The Aspiring Entrepreneur", "The Career Switcher")
2. A brief 2-sentence description of who they are
3. 2-3 specific pain points they're experiencing
4. 2-3 specific goals they want to achieve

Return ONLY valid JSON in this exact format (no markdown, no code blocks):
{
  "personas": [
    {
      "id": "1",
      "title": "Title Here",
      "description": "Description here",
      "painPoints": ["Pain 1", "Pain 2"],
      "goals": ["Goal 1", "Goal 2"]
    }
  ]
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant that generates audience personas for course creators. Always respond with valid JSON only, no additional text or markdown.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 1500,
    });

    const responseContent = completion.choices[0]?.message?.content || '';
    
    // Clean up the response - remove markdown code blocks if present
    let cleanedResponse = responseContent.trim();
    if (cleanedResponse.startsWith('```json')) {
      cleanedResponse = cleanedResponse.replace(/^```json\n/, '').replace(/\n```$/, '');
    } else if (cleanedResponse.startsWith('```')) {
      cleanedResponse = cleanedResponse.replace(/^```\n/, '').replace(/\n```$/, '');
    }

    const parsed = JSON.parse(cleanedResponse);
    
    // Validate the response structure
    if (!parsed.personas || !Array.isArray(parsed.personas)) {
      throw new Error('Invalid response format from OpenAI');
    }

    return parsed.personas;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Fallback to generate default personas if API fails
    return generateFallbackPersonas(outcome, audience);
  }
}

function generateFallbackPersonas(outcome: string, audience: string): Persona[] {
  return [
    {
      id: '1',
      title: 'The Eager Beginner',
      description: `Someone new to ${audience} who wants to learn ${outcome}. They're motivated but need clear guidance and a structured learning path.`,
      painPoints: [
        `Overwhelmed by the complexity of ${outcome}`,
        'Unsure where to start or what resources to trust',
        'Lacking confidence in their ability to succeed',
      ],
      goals: [
        `Master the fundamentals of ${outcome}`,
        'Build a strong foundation for future growth',
        'Gain confidence through hands-on practice',
      ],
    },
    {
      id: '2',
      title: 'The Career Advancer',
      description: `A professional in ${audience} looking to level up their skills in ${outcome} for career advancement. They want practical, applicable knowledge.`,
      painPoints: [
        'Stuck in their current role without advancement opportunities',
        'Competition from others with more advanced skills',
        'Limited time to learn while working full-time',
      ],
      goals: [
        'Increase earning potential and job opportunities',
        'Stand out in their field with specialized knowledge',
        'Apply new skills immediately in their work',
      ],
    },
    {
      id: '3',
      title: 'The Side Project Enthusiast',
      description: `Someone from ${audience} who wants to learn ${outcome} for a personal project or side hustle. They're self-motivated and results-oriented.`,
      painPoints: [
        'Difficulty finding time between work and personal commitments',
        'Need to learn quickly and efficiently',
        'Want to avoid costly mistakes in their project',
      ],
      goals: [
        'Launch their project successfully',
        'Learn practical skills that deliver immediate results',
        'Build something they can be proud of',
      ],
    },
    {
      id: '4',
      title: 'The Knowledge Seeker',
      description: `A curious individual from ${audience} interested in ${outcome} for personal enrichment. They love learning and expanding their skillset.`,
      painPoints: [
        'Hard to find quality, engaging educational content',
        'Previous learning experiences were boring or ineffective',
        'Want a community of like-minded learners',
      ],
      goals: [
        'Gain deep understanding and expertise',
        'Connect with others who share their interests',
        'Feel intellectually stimulated and challenged',
      ],
    },
  ];
}

