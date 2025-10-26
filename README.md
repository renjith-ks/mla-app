1. MLA Landing Page Recreation
   
2. Features

- Fully Responsive Design - Optimized for mobile, tablet, and desktop
- Interactive AI-Powered Section - Generate student personas using OpenAI GPT-4
- Modern Tech Stack - Built with React 18.2, TypeScript, Vite, and Tailwind CSS
- Smooth Animations - Powered by Framer Motion
- Form Validation - Using React Hook Form and Zod
- Express Backend - Node.js API server for OpenAI integration
- Clean Architecture - Modular, scalable component structure

3. Tech Stack

Frontend

- React 18.2 with TypeScript
- Vite - Fast build tool and dev server
- Tailwind CSS - Utility-first styling
- Framer Motion - Smooth animations
- React Hook Form - Form management
- Zod - Schema validation
- Axios - HTTP client
- Lucide Icons - Modern icon library
- Radix UI - Accessible component primitives

Backend

- Node.js with Express
- TypeScript - Type-safe server code
- OpenAI API - GPT-4 for persona generation
- CORS - Cross-origin resource sharing

4. Installation & Setup

Prerequisites

- Node.js 18+ and npm installed
- OpenAI API key

1. Clone the repository

```bash
git clone <repository-url>
cd mla-app
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=5001
NODE_ENV=development
```

IMPORTANT: Never commit the `.env` file to version control. It's already included in `.gitignore`.

4.  Run the development servers
    Start both frontend and backend concurrently:

```bash
npm run dev
```

Or run them separately:

```bash
# Terminal 1 - Frontend (http://localhost:3000)
npm run dev:client

# Terminal 2 - Backend (http://localhost:5001)
npm run dev:server
```

5. Open your browser
   Navigate to [http://localhost:3000](http://localhost:3000)


API Endpoints

POST `/api/generate-personas`
Generates student personas based on course outcome and target audience.

Request Body:

```json
{
  "outcome": "Photography",
  "audience": "Beginners"
}
```

Response:

```json
{
  "success": true,
  "personas": [
    {
      "id": "1",
      "title": "The Eager Beginner",
      "description": "Someone new to photography...",
      "painPoints": ["...", "..."],
      "goals": ["...", "..."]
    }
  ]
}
```

📸 Screenshots

Desktop View
<img width="1915" height="962" alt="image" src="https://github.com/user-attachments/assets/efb2fe82-11bb-4d97-b1f4-a4cf891e805f" />



 Mobile View

<img width="934" height="936" alt="image" src="https://github.com/user-attachments/assets/bb43c230-2f05-4ad7-9a3b-3ee18a806777" />





