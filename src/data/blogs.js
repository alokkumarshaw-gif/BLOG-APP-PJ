const blogs = [
  {
    id: 1,
    title: "A detailed step by step guide to manage your lifestyle",
    subtitle: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
    category: "Lifestyle",
    author: "Alok Kumar",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alok",
    date: "July 24, 2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    excerpt: "In this comprehensive guide, we explore practical strategies for better lifestyle management and daily habits.",
    status: "Published",
    content: [
      {
        heading: "Step 1: Assess Your Current Lifestyle",
        text: "Before making any changes, take a step back and evaluate your current daily routine. Consider your eating habits, exercise routine, sleep patterns, and stress levels. A great place to start is by keeping a journal for a week, noting your daily activities, meals, and how you feel throughout the day. This will give you a clear picture of where you stand and what areas need improvement. Sometimes, the simplest changes can make a world of difference."
      },
      {
        heading: "Step 2: Set Clear, Achievable Goals",
        text: "Once you've assessed your current lifestyle, it's time to set specific goals. Keep them realistic and measurable. Instead of saying 'I want to be healthier,' try 'I will walk for 30 minutes every day' or 'I will eat at least 5 servings of fruits and vegetables daily.' Writing down your goals makes them feel more tangible and achievable. Break down larger goals into smaller, manageable steps to avoid feeling overwhelmed."
      },
      {
        heading: "Step 3: Create a Daily Routine",
        text: "A consistent daily routine gives structure to your life and helps you stay on track with your goals. Start by setting fixed wake-up and bedtime hours. Plan your meals in advance, schedule time for exercise, and set aside time for relaxation and hobbies. Remember, it's not about being rigid—flexibility is key. Your routine should support your goals while allowing room for spontaneity and enjoyment."
      },
      {
        heading: "Step 4: Prioritize Physical Health",
        text: "Physical health is the foundation of a good lifestyle. Incorporate regular exercise into your routine—whether it's jogging, yoga, swimming, or even dancing. Aim for at least 30 minutes of moderate physical activity most days of the week. Pay attention to your diet by choosing whole, nutritious foods. Stay hydrated by drinking plenty of water throughout the day, and make sure you're getting 7-9 hours of quality sleep each night."
      },
      {
        heading: "Step 5: Nurture Your Mental Well-being",
        text: "A healthy lifestyle isn't just about physical health—mental well-being is equally important. Practice mindfulness through meditation or deep-breathing exercises. Take breaks when you feel overwhelmed, and don't hesitate to seek support from friends, family, or professionals when needed. Engage in activities that bring you joy and fulfillment, whether it's reading, painting, gardening, or spending time in nature."
      }
    ],
    comments: [
      { id: 1, author: "Amisha Sen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amisha", date: "July 25, 2025", text: "This is very insightful! I've already started implementing Step 1 and I can see the difference." },
      { id: 2, author: "Jake Doe", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jake", date: "July 26, 2025", text: "Great article! The daily routine tips are exactly what I needed." }
    ]
  },
  {
    id: 2,
    title: "How to stay productive while working from home effectively",
    subtitle: "Master the art of remote work productivity",
    category: "Technology",
    author: "Riya Sharma",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
    date: "Aug 02, 2025",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=400&fit=crop",
    excerpt: "Working from home offers flexibility, but staying productive requires discipline and the right strategies.",
    status: "Published",
    content: [
      {
        heading: "Create a Dedicated Workspace",
        text: "Having a specific area designated for work helps your brain switch into 'work mode.' Choose a quiet spot with good lighting, a comfortable chair, and minimal distractions. Keep your workspace organized and free of clutter to maintain focus."
      },
      {
        heading: "Stick to a Schedule",
        text: "Set clear working hours and stick to them. Start and end your workday at the same time each day. Use time-blocking techniques to allocate specific tasks to specific time slots, ensuring you cover all priorities."
      },
      {
        heading: "Take Regular Breaks",
        text: "The Pomodoro Technique—25 minutes of focused work followed by a 5-minute break—can work wonders. Use breaks to stretch, hydrate, or take a short walk. Regular breaks actually boost productivity and prevent burnout."
      }
    ],
    comments: [
      { id: 1, author: "Priya M", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya", date: "Aug 03, 2025", text: "These tips helped me restructure my entire work-from-home routine!" }
    ]
  },
  {
    id: 3,
    title: "Understanding the basics of personal finance and budgeting",
    subtitle: "Take control of your money with these simple tips",
    category: "Finance",
    author: "Arjun Verma",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    date: "Aug 10, 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    excerpt: "Learn the fundamentals of personal finance, from budgeting basics to smart saving strategies.",
    status: "Published",
    content: [
      {
        heading: "Track Your Spending",
        text: "The first step to financial health is understanding where your money goes. Track every expense for at least a month. Use apps or a simple spreadsheet to categorize your spending into needs, wants, and savings."
      },
      {
        heading: "Create a Budget",
        text: "The 50/30/20 rule is a great starting point: allocate 50% of your income to needs, 30% to wants, and 20% to savings and debt repayment. Adjust these percentages based on your personal situation and financial goals."
      },
      {
        heading: "Build an Emergency Fund",
        text: "Aim to save 3-6 months of living expenses in an easily accessible account. Start small—even saving a small amount each month adds up over time and provides a safety net for unexpected expenses."
      }
    ],
    comments: []
  },
  {
    id: 4,
    title: "Top 10 must-visit destinations for solo travelers in 2025",
    subtitle: "Explore the world on your own terms",
    category: "Stories",
    author: "Neha Gupta",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    date: "Aug 15, 2025",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
    excerpt: "Solo travel can be one of the most rewarding experiences. Here are the top destinations for 2025.",
    status: "Published",
    content: [
      {
        heading: "Why Solo Travel?",
        text: "Solo travel pushes you out of your comfort zone, helps you discover yourself, and allows you to explore at your own pace. You'll make new friends, gain confidence, and create memories that last a lifetime."
      },
      {
        heading: "Top Destinations",
        text: "From the serene beaches of Bali to the vibrant streets of Tokyo, from the historical charm of Prague to the natural beauty of New Zealand—each destination offers unique experiences for solo travelers. Consider factors like safety, budget, and local culture when planning your trip."
      }
    ],
    comments: [
      { id: 1, author: "Rahul K", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul", date: "Aug 16, 2025", text: "I visited Bali solo last year and it was incredible! Great recommendations." }
    ]
  },
  {
    id: 5,
    title: "The future of artificial intelligence in everyday life",
    subtitle: "How AI is reshaping our daily experiences",
    category: "Technology",
    author: "Vikram Singh",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    date: "Aug 20, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    excerpt: "Artificial intelligence is no longer science fiction. Discover how AI is transforming our daily routines.",
    status: "Draft",
    content: [
      {
        heading: "AI in Healthcare",
        text: "From early disease detection to personalized treatment plans, AI is revolutionizing healthcare. Machine learning algorithms can analyze medical images with remarkable accuracy, while AI-powered chatbots provide 24/7 health guidance."
      },
      {
        heading: "AI in Education",
        text: "Personalized learning paths, intelligent tutoring systems, and automated grading are just the beginning. AI is making education more accessible and tailored to individual learning styles and paces."
      }
    ],
    comments: []
  },
  {
    id: 6,
    title: "A beginner's complete guide to meditation and mindfulness",
    subtitle: "Find inner peace in just 10 minutes a day",
    category: "Lifestyle",
    author: "Priya Patel",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaP",
    date: "Sep 01, 2025",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    excerpt: "Meditation doesn't have to be complicated. Start your mindfulness journey with these simple techniques.",
    status: "Published",
    content: [
      {
        heading: "Getting Started",
        text: "Find a quiet spot, sit comfortably, and close your eyes. Start with just 5 minutes of focused breathing. Don't worry about emptying your mind—simply observe your thoughts without judgment and gently bring your focus back to your breath."
      },
      {
        heading: "Building a Practice",
        text: "Consistency is more important than duration. Meditate at the same time each day, gradually increasing the duration. Try guided meditations through apps like Headspace or Calm to help you stay focused."
      }
    ],
    comments: [
      { id: 1, author: "Sneha R", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha", date: "Sep 02, 2025", text: "I started meditating after reading this and it has changed my mornings completely!" }
    ]
  },
  {
    id: 7,
    title: "How to build your first web application from scratch",
    subtitle: "A complete roadmap for aspiring developers",
    category: "Technology",
    author: "Amit Thakur",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    date: "Sep 10, 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    excerpt: "Ready to build your first web app? This step-by-step guide covers everything from HTML basics to deployment.",
    status: "Published",
    content: [
      {
        heading: "Learn the Fundamentals",
        text: "Start with HTML for structure, CSS for styling, and JavaScript for interactivity. These are the building blocks of every web application. Practice by building small projects like a personal portfolio or a to-do list."
      },
      {
        heading: "Choose a Framework",
        text: "Once you're comfortable with the basics, explore frameworks like React, Vue, or Angular. These tools help you build more complex applications efficiently. Start with one and master it before moving to others."
      },
      {
        heading: "Deploy Your App",
        text: "Use platforms like Vercel, Netlify, or GitHub Pages to deploy your application for free. Learn about version control with Git and collaborate with other developers on platforms like GitHub."
      }
    ],
    comments: []
  },
  {
    id: 8,
    title: "Healthy eating habits that will transform your energy levels",
    subtitle: "Fuel your body right for maximum performance",
    category: "Lifestyle",
    author: "Kavya Nair",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
    date: "Sep 18, 2025",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    excerpt: "What you eat directly impacts how you feel. Discover eating habits that boost your energy throughout the day.",
    status: "Draft",
    content: [
      {
        heading: "Start Your Day Right",
        text: "A nutritious breakfast sets the tone for the entire day. Include proteins, whole grains, and fruits in your morning meal. Avoid sugary cereals and pastries that cause energy crashes by mid-morning."
      },
      {
        heading: "Stay Hydrated",
        text: "Dehydration is one of the most common causes of fatigue. Aim for at least 8 glasses of water a day. Herbal teas and infused water are great alternatives if plain water feels boring."
      }
    ],
    comments: [
      { id: 1, author: "Deepak S", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak", date: "Sep 19, 2025", text: "The breakfast tips alone made a huge difference in my energy levels. Thank you!" }
    ]
  }
];

export default blogs;
