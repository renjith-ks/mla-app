1. MLA Landing Page Recreation - Cluely

A pixel-perfect recreation of the Mini Lessons Academy's Cluely landing page built with React, TypeScript, and modern web technologies.

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

6. Project Structure

```
mla-app/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── label.tsx
│   │   ├── sections/        # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── InteractiveSection.tsx  # AI persona generator
│   ├── pages/
│   │   └── LandingPage.tsx
│   ├── lib/
│   │   ├── utils.ts         # Utility functions
│   │   └── api.ts           # API client
│   ├── types/
│   │   └── index.ts         # TypeScript definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server/
│   ├── routes/
│   │   └── personas.ts      # API routes
│   ├── services/
│   │   └── openai.ts        # OpenAI integration
│   └── index.ts             # Express server
├── public/
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

Key Features Implemented

1.  Hero Section

- Eye-catching gradient background
- Compelling headline and CTA buttons
- Smooth scroll to interactive section
- Floating stat cards with animations

. Interactive "60 Seconds" Section

- Form with React Hook Form + Zod validation
- Real-time input validation
- OpenAI GPT-4 integration for persona generation
- Beautiful persona cards with animations
- Click-to-redirect functionality to pricing page
- Loading states and error handling

. Build for Production

```bash
# Build frontend
npm run build

# Build backend
npm run build:server

# Preview production build
npm run preview
```

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
![Desktop Hero Section](./screenshots/desktop-hero.png)
_Hero section with call-to-action buttons_

![Desktop Interactive Section](./screenshots/desktop-interactive.png)
_Interactive persona generation section_

### Mobile View

![Mobile View](./screenshots/mobile-view.png)
_Fully responsive mobile layout_

Test the Interactive Section

1. Navigate to the interactive section
2. Enter:
   - Outcome: "Web Development"
   - Audience: "Career Switchers"
3. Click "Show Me My Students"
4. Wait for AI-generated personas (3-5 cards)
5. Click any persona card - should redirect to pricing page

Test Responsiveness

- Resize browser window
- Test on mobile device or use browser dev tools
- Verify all sections adapt properly

Port already in use

```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)

# Kill process on port 5000
kill -9 $(lsof -ti:5000)
```

OpenAI API errors

- Verify your API key is correct in `.env`
- Check you have API credits remaining
- Fallback personas will generate if API fails

Build errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

License

This project is created as a test assignment for Mini Lessons Academy.

Acknowledgments

- Reference page: [https://minilessonsacademy.com/launch-course-cluely-wip/](https://minilessonsacademy.com/launch-course-cluely-wip/)
- Built with modern web technologies and best practices
