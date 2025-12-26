import { NewsArticle, Comment } from '@/types/news';

export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Tech Giants Announce Major AI Breakthrough in Healthcare',
    description: 'Leading technology companies collaborate on revolutionary AI system that promises to transform medical diagnostics and patient care worldwide.',
    content: `In a groundbreaking development that could reshape the future of healthcare, major tech giants have unveiled a collaborative AI platform designed to revolutionize medical diagnostics. The system, developed over three years, combines machine learning algorithms with vast medical databases to provide faster, more accurate diagnoses.

The platform has already shown promising results in early trials, with accuracy rates exceeding 95% in detecting various conditions. Healthcare professionals are optimistic about its potential to reduce diagnostic errors and improve patient outcomes.

"This represents a paradigm shift in how we approach medical care," said Dr. Sarah Johnson, Chief Medical Officer at HealthTech Innovations. "The AI can process thousands of medical images and patient records in seconds, identifying patterns that might take human doctors hours or days to recognize."

The technology is expected to be particularly valuable in underserved areas where access to specialized medical expertise is limited. By democratizing access to advanced diagnostic capabilities, the platform could help bridge healthcare gaps globally.

However, experts also emphasize the importance of maintaining human oversight and ensuring the technology complements rather than replaces medical professionals. Privacy concerns and data security remain key considerations as the platform moves toward wider implementation.`,
    category: 'Technology',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'Michael Chen',
      avatar: 'MC'
    },
    date: '2024-12-26',
    readTime: 5,
    tags: ['AI', 'Healthcare', 'Technology', 'Innovation'],
    featured: true,
    trending: true
  },
  {
    id: '2',
    title: 'Global Markets Reach New Heights Amid Economic Recovery',
    description: 'Stock markets worldwide show strong performance as economic indicators point to sustained recovery and investor confidence grows.',
    content: `Global financial markets have surged to record highs, driven by positive economic data and renewed investor confidence. The rally spans across major indices, with both developed and emerging markets participating in the upward trend.

Economists attribute the strong performance to several factors, including robust corporate earnings, accommodative monetary policies, and signs of sustained economic recovery. Technology and renewable energy sectors have led the gains, reflecting shifting investor priorities toward innovation and sustainability.

"We're seeing a convergence of favorable conditions that's rare in economic history," explained financial analyst Robert Williams. "Strong fundamentals, technological innovation, and policy support are creating a perfect storm for market growth."

However, analysts caution that volatility remains a concern, particularly given ongoing geopolitical tensions and potential inflationary pressures. They advise investors to maintain diversified portfolios and stay informed about changing market conditions.

The positive trend has also boosted consumer confidence, with retail spending showing significant increases across major economies. This consumer activity is further fueling economic growth and creating a virtuous cycle of prosperity.`,
    category: 'Business',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'Sarah Williams',
      avatar: 'SW'
    },
    date: '2024-12-26',
    readTime: 4,
    tags: ['Markets', 'Economy', 'Finance', 'Business'],
    trending: true
  },
  {
    id: '3',
    title: 'Revolutionary Green Energy Project Launches in Major Cities',
    description: 'Ambitious renewable energy initiative aims to power entire metropolitan areas with 100% clean energy by 2030.',
    content: `A groundbreaking green energy project has been launched in several major cities, marking a significant step toward achieving carbon neutrality. The initiative combines solar, wind, and advanced battery storage technologies to create sustainable urban power grids.

The project represents one of the largest investments in renewable energy infrastructure to date, with billions allocated to installing solar panels, wind turbines, and smart grid systems. City officials are confident the initiative will not only reduce carbon emissions but also create thousands of green jobs.

"This is about more than just energy – it's about building sustainable communities for future generations," said Mayor Jennifer Martinez. "We're proving that large cities can transition to clean energy without compromising quality of life."

The initiative includes innovative programs to incentivize residential solar adoption and electric vehicle use. Smart grid technology will optimize energy distribution, reducing waste and improving reliability.

Environmental groups have praised the project as a model for other cities worldwide, though some critics question the timeline and cost projections. Nevertheless, the project has generated significant enthusiasm and is expected to influence urban energy policies globally.`,
    category: 'Technology',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'David Park',
      avatar: 'DP'
    },
    date: '2024-12-25',
    readTime: 6,
    tags: ['Green Energy', 'Environment', 'Sustainability', 'Innovation'],
    trending: true
  },
  {
    id: '4',
    title: 'Historic Peace Agreement Signed Between Nations',
    description: 'Landmark diplomatic achievement brings hope for lasting peace after years of tension and conflict in the region.',
    content: `In a historic moment for international diplomacy, representatives from formerly hostile nations have signed a comprehensive peace agreement aimed at ending decades of conflict. The ceremony, attended by world leaders and international observers, marks a new chapter in regional relations.

The agreement includes provisions for economic cooperation, cultural exchange, and mutual security guarantees. Both sides have committed to dismantling military installations along disputed borders and establishing joint development zones.

"Today, we choose peace over conflict, cooperation over confrontation," declared the lead negotiator. "This agreement represents the collective will of our peoples for a better future."

The peace process, mediated by international organizations over several years, has overcome numerous obstacles. Key to the breakthrough was economic pressure and the involvement of regional powers as guarantors of the agreement.

Humanitarian organizations are already mobilizing to provide aid to affected populations, while businesses are exploring opportunities in newly accessible markets. However, implementation challenges remain, and skeptics warn that maintaining peace will require sustained commitment from all parties.`,
    category: 'Politics',
    image: 'https://images.pexels.com/photos/8815997/pexels-photo-8815997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'Emma Thompson',
      avatar: 'ET'
    },
    date: '2024-12-25',
    readTime: 5,
    tags: ['Politics', 'Peace', 'Diplomacy', 'International'],
    featured: true
  },
  {
    id: '5',
    title: 'Championship Team Clinches Historic Victory',
    description: 'Underdog squad defeats defending champions in thrilling finale, securing their first major title in franchise history.',
    content: `In one of the most dramatic championship games in recent memory, the underdog team overcame overwhelming odds to defeat the defending champions and claim their first major title. The victory caps an incredible season marked by perseverance and teamwork.

The decisive game went down to the final seconds, with the underdogs mounting a spectacular comeback from a double-digit deficit. Star player Marcus Johnson delivered a career-defining performance, scoring crucial points in the closing minutes.

"This is what we've worked for all season," said team captain Johnson in the post-game celebration. "We never stopped believing, even when everyone counted us out."

The victory sparked celebrations across the city, with fans flooding the streets to commemorate the historic achievement. The team's success story has resonated beyond sports, inspiring communities and demonstrating the power of determination.

Analysts credit the team's success to exceptional coaching, strategic acquisitions, and a culture of resilience. The championship win is expected to transform the franchise and establish them as a force in the league for years to come.`,
    category: 'Sports',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'James Martinez',
      avatar: 'JM'
    },
    date: '2024-12-24',
    readTime: 4,
    tags: ['Sports', 'Championship', 'Victory', 'Team'],
    trending: true
  },
  {
    id: '6',
    title: 'Breakthrough Medical Treatment Shows Promise',
    description: 'New therapy demonstrates remarkable effectiveness in treating previously incurable disease, offering hope to millions.',
    content: `Medical researchers have announced a major breakthrough in treating a disease that has long been considered incurable. The new therapy, tested in extensive clinical trials, has shown unprecedented success rates and minimal side effects.

The treatment uses a novel approach that targets the disease at the cellular level, effectively reprogramming affected cells to function normally. Early results indicate that more than 80% of patients experienced significant improvement or complete remission.

"This represents decades of research culminating in a treatment that could change millions of lives," explained lead researcher Dr. Patricia Rodriguez. "We're witnessing medical history in the making."

The therapy is currently undergoing final regulatory review and could be available to patients within the next year. Pharmaceutical companies are already scaling up production to meet anticipated demand.

Patient advocacy groups have hailed the development as a miracle, while healthcare economists note the potential for significant cost savings from reduced long-term care needs. The breakthrough is also spurring renewed investment in similar research approaches for other conditions.`,
    category: 'Health',
    image: 'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'Dr. Lisa Anderson',
      avatar: 'LA'
    },
    date: '2024-12-24',
    readTime: 5,
    tags: ['Health', 'Medical', 'Research', 'Treatment']
  },
  {
    id: '7',
    title: 'Entertainment Industry Embraces New Streaming Era',
    description: 'Major studios announce revolutionary platform that combines traditional media with interactive experiences.',
    content: `The entertainment industry is entering a new era with the launch of an innovative streaming platform that blends traditional content with interactive experiences. Major studios have collaborated to create a service that promises to redefine how audiences engage with media.

The platform uses advanced technology to offer personalized content recommendations, interactive storylines, and immersive viewing experiences. Users can influence plot developments, access behind-the-scenes content, and participate in virtual events with creators.

"We're not just watching anymore – we're experiencing stories in entirely new ways," said platform CEO Rachel Green. "This is the future of entertainment."

The launch includes a library of exclusive content designed specifically for the interactive format, featuring top directors, actors, and writers. Industry analysts predict the platform could disrupt traditional broadcasting models and set new standards for content creation.

However, concerns remain about production costs, technology requirements, and whether audiences will embrace the new format. Early user feedback has been mixed, with younger demographics showing more enthusiasm than traditional viewers.`,
    category: 'Entertainment',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'Alex Rivera',
      avatar: 'AR'
    },
    date: '2024-12-23',
    readTime: 4,
    tags: ['Entertainment', 'Streaming', 'Technology', 'Innovation']
  },
  {
    id: '8',
    title: 'Small Business Renaissance Transforms Local Economy',
    description: 'Community initiatives and innovative financing models fuel unprecedented growth in local entrepreneurship.',
    content: `A wave of small business creation is revitalizing local economies across the country, driven by innovative financing programs and community support initiatives. The renaissance is creating jobs, fostering innovation, and strengthening community bonds.

New micro-lending programs, business incubators, and mentorship networks have made entrepreneurship more accessible than ever. Local governments have streamlined regulations and offered tax incentives to encourage small business development.

"We're seeing the American dream come alive in our communities," said Small Business Administration director Tom Baker. "Entrepreneurs are creating solutions to local problems and building sustainable businesses."

The movement encompasses diverse sectors, from tech startups to artisan crafts, sustainable agriculture to professional services. Many businesses emphasize local sourcing, environmental sustainability, and community engagement.

Success stories include former corporate employees finding fulfillment in small business ownership, recent graduates launching innovative ventures, and longtime residents turning hobbies into thriving enterprises. The trend is expected to continue as more people prioritize work-life balance and community connection.`,
    category: 'Business',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'Jennifer Lee',
      avatar: 'JL'
    },
    date: '2024-12-23',
    readTime: 5,
    tags: ['Business', 'Entrepreneurship', 'Economy', 'Community']
  },
  {
    id: '9',
    title: 'Cybersecurity Advances Protect Digital Infrastructure',
    description: 'New security protocols and AI-powered defense systems strengthen protection against evolving cyber threats.',
    content: `As cyber threats grow increasingly sophisticated, technology companies and governments have unveiled next-generation security systems that promise unprecedented protection for digital infrastructure. The advances combine artificial intelligence, quantum encryption, and behavioral analysis.

The new security framework can detect and neutralize threats in real-time, adapting to evolving attack patterns faster than traditional systems. Early implementation has resulted in a significant reduction in successful cyberattacks across participating organizations.

"Cybersecurity is no longer just about building walls – it's about creating intelligent, adaptive defense systems," explained security expert Dr. Kevin Zhang. "These technologies represent a quantum leap in our ability to protect critical infrastructure."

The systems are being deployed across sectors including finance, healthcare, energy, and government. International cooperation has been crucial, with countries sharing threat intelligence and coordinating response strategies.

Privacy advocates have raised concerns about data collection and surveillance implications, prompting ongoing discussions about balancing security with individual rights. Regulators are working to establish frameworks that ensure both effective protection and civil liberties.`,
    category: 'Technology',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'Kevin Zhang',
      avatar: 'KZ'
    },
    date: '2024-12-22',
    readTime: 6,
    tags: ['Cybersecurity', 'Technology', 'AI', 'Security']
  },
  {
    id: '10',
    title: 'Education Reform Initiative Reshapes Learning',
    description: 'Comprehensive program combines technology, personalized instruction, and real-world skills to prepare students for future.',
    content: `A comprehensive education reform initiative is transforming schools across the country, combining cutting-edge technology with personalized instruction and practical skills training. The program aims to prepare students for a rapidly changing world while maintaining educational excellence.

Key components include adaptive learning platforms that adjust to individual student needs, project-based curricula emphasizing critical thinking and creativity, and partnerships with businesses providing real-world experience. The initiative also addresses teacher training and support.

"Education must evolve to meet the demands of the 21st century," said Education Secretary Maria Santos. "We're equipping students not just with knowledge, but with the skills to thrive in an uncertain future."

Early results show improvements in student engagement, test scores, and college readiness. The program particularly benefits students from disadvantaged backgrounds, helping to narrow achievement gaps.

Critics argue about implementation costs and concerns about over-reliance on technology. However, proponents point to long-term benefits including better-prepared graduates, stronger communities, and improved economic competitiveness.`,
    category: 'Politics',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    author: {
      name: 'Maria Santos',
      avatar: 'MS'
    },
    date: '2024-12-22',
    readTime: 5,
    tags: ['Education', 'Reform', 'Technology', 'Policy']
  }
];

export const mockComments: Record<string, Comment[]> = {
  '1': [
    {
      id: 'c1',
      author: 'John Smith',
      content: 'This is incredible news! AI in healthcare has so much potential to save lives. Looking forward to seeing this technology become widely available.',
      date: '2024-12-26',
      avatar: 'JS'
    },
    {
      id: 'c2',
      author: 'Emily Johnson',
      content: 'While I\'m excited about the possibilities, we need to ensure patient data privacy is protected. What safeguards are in place?',
      date: '2024-12-26',
      avatar: 'EJ'
    },
    {
      id: 'c3',
      author: 'Dr. Robert Chen',
      content: 'As a healthcare professional, I welcome AI as a tool to augment our capabilities. The key is maintaining the human element in patient care while leveraging technology\'s strengths.',
      date: '2024-12-26',
      avatar: 'RC'
    }
  ],
  '2': [
    {
      id: 'c4',
      author: 'Investment Analyst',
      content: 'Great overview of the market situation. However, investors should remain cautious and not get caught up in the euphoria. Diversification remains key.',
      date: '2024-12-26',
      avatar: 'IA'
    }
  ]
};
