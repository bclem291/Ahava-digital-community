import { CourseItem, FaqItem, AcademySettings } from '../types';

export const DEFAULT_SETTINGS: AcademySettings = {
  selarLink: '[PASTE SELAR LINK HERE]',
  whatsappNumber: '+2348022872299',
  email: 'ahavadigitalcommunity@gmail.com',
  facebookUrl: '[PASTE FACEBOOK LINK]',
  instagramUrl: '[PASTE INSTAGRAM LINK]',
};

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'digital-marketing',
    title: '1. Digital Marketing',
    iconName: 'Megaphone',
    tagline: 'Turn Online Attention into Guaranteed Bank Alerts',
    description: 'Learn how to sell anything online, build sales funnels, generate endless organic and paid leads, and turn complete strangers into loyal paying customers.',
    highlights: [
      'High-converting sales copy and messaging formulas',
      'Lead magnet creation and WhatsApp marketing automation',
      'Customer psychology and irresistible offer structuring',
      'Organic traffic generation strategies for Nigerian audiences'
    ],
    category: 'Marketing & Sales'
  },
  {
    id: 'smartphone-graphics',
    title: '2. Smartphone Graphics Design',
    iconName: 'Palette',
    tagline: 'Design Professional Visuals Using Only Your Phone',
    description: 'Design stunning flyers, church banners, business branding, and social media graphics using just your smartphone. Master design theory and high-converting visual principles.',
    highlights: [
      'Complete mobile graphics masterclass for Android and iPhone',
      'Typography, color psychology, and layout composition',
      'Background removal, photo enhancement, and realistic 3D mockups',
      'How to package, price, and sell design services to clients'
    ],
    category: 'Design & Visuals'
  },
  {
    id: 'digital-product-creation',
    title: '3. Digital Product Creation',
    iconName: 'PackageOpen',
    tagline: 'Package Your Knowledge into Passive Daily Income',
    description: 'Create and launch your own ebooks, templates, and digital mini-courses. Learn how to package your knowledge into digital assets that sell while you sleep.',
    highlights: [
      'Finding profitable digital product niches with ready buyers',
      'Writing and formatting high-value digital guides in record time',
      'Setting up automated product delivery without technical headache',
      'Automated sales funnel setups and affiliate recruitment'
    ],
    category: 'Product & Wealth'
  },
  {
    id: 'ai-creator-mastery',
    title: '4. AI Creator Mastery',
    iconName: 'BrainCircuit',
    tagline: 'AI Flyer Design, Digital Products, Video & Web Design',
    description: 'Leverage modern creative systems to multiply your output: AI Flyer Design, AI Digital Product Creation, AI Video Creation, and AI Website/Landing Page Design.',
    highlights: [
      'AI Flyer and art design prompt engineering principles',
      'AI Digital Product Creation: rapid guide, curriculum, and asset synthesis',
      'AI Video Creation: talking avatars, faceless video scripts, and voiceovers',
      'AI Website and landing page design without writing code'
    ],
    category: 'Creative Tech'
  },
  {
    id: 'video-editing',
    title: '5. Video Editing',
    iconName: 'Video',
    tagline: 'Master Smartphone Short-Form Video Creation',
    description: 'Edit engaging short-form videos, reels, and content that grab attention within the first three seconds and keep audiences hooked.',
    highlights: [
      'Short-form smartphone video editing mastery from scratch',
      'Dynamic animated captions, viral sound effects, and B-roll pacing',
      'Audio leveling, voice enhancement, and visual storytelling',
      'Monetizing short-form video content creation for brands and businesses'
    ],
    category: 'Video Production'
  },
  {
    id: 'facebook-instagram-ads',
    title: '6. Facebook & Instagram Ads',
    iconName: 'Target',
    tagline: 'Run Profitable Meta Ads Without Wasting Money',
    description: 'Stop guessing and burning ad spend. Learn the exact framework to run profitable sponsored ads on Meta platforms without getting your account restricted.',
    highlights: [
      'Setting up Meta Ads Manager, Pixel, and Business Portfolios',
      'Pinpoint audience targeting: demographics, interests, and custom audiences',
      'Writing ad copy and creating visuals that convert cold traffic',
      'Bulletproofing your Facebook account to prevent and fix restrictions'
    ],
    category: 'Paid Advertising'
  }
];

export const BENEFITS_DATA = [
  {
    icon: 'Laptop',
    title: 'Practical Training',
    description: '100% practical, step-by-step video lessons that take you from novice to pro in no time.'
  },
  {
    icon: 'CheckCircle2',
    title: 'Beginner Friendly',
    description: 'No prior experience? No problem. Our courses are broken down into easy-to-understand modules.'
  },
  {
    icon: 'Smartphone',
    title: 'Learn With Your Phone',
    description: 'You don\'t need an expensive laptop to start. Most of our skills can be learned and executed via smartphone.'
  },
  {
    icon: 'Users',
    title: 'Mentorship & Support',
    description: 'Access our community and live Q&A sessions to ensure you never get stuck.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long is the training?',
    answer: 'The training is self-paced. Once you register, you get instant lifetime access to the video modules. You can learn at your own speed, but most students finish the core modules within 4 to 6 weeks.'
  },
  {
    id: 'faq-2',
    question: 'Do I need a laptop?',
    answer: 'No, you do not need a laptop! About 90% of the skills taught in this community (like Smartphone Graphics, Video Editing, and Digital Products) can be executed perfectly using just your smartphone.'
  },
  {
    id: 'faq-3',
    question: 'Is it beginner friendly?',
    answer: 'Absolutely. Coach Clement designed the curriculum assuming you have zero prior knowledge. We take you by the hand from absolute beginner to professional.'
  },
  {
    id: 'faq-4',
    question: 'How do classes hold?',
    answer: 'Classes are pre-recorded, highly detailed practical videos hosted on a secure platform. You will also have access to our community group for weekly live Q&A sessions.'
  },
  {
    id: 'faq-5',
    question: 'How do I pay?',
    answer: 'You can pay securely via our Selar link on the Registration page. It accepts bank transfers, card payments, and mobile money. Once paid, fill the form to get instant access.'
  }
];
