const baseUrl = import.meta.env.BASE_URL

const TIMELINE = [
  {
    period: 'June 15, 2022',
    title: 'Gameheads',
    subtitle: 'Oakland, CA',
    detailTitle: 'My Passion For Game Dev Begins!',
    details: [
      'Gamheads serves as a youth program aiming to combat the gentrification of tech, specifically within video games, by providing students valuable opportunities to create and share games with their community. It is hard to imagine where I would be now without this program.',
      'From a 2D platformer with buggy C# code to a ALT control racing game with slightly less buggy code I have learned many important lessons in game development. This is not a resume so I won’t elaborate too much but if you want to see my projects in a fun interactive way, head over to the portfolio tab!',
    ],
    endDate: 'Present',
    images: [
      {
        src: `${baseUrl}Imgs/Timeline/gh_2.png`,
        alt: 'Gameheads Image 2',
      },      
      {
        src: `${baseUrl}Imgs/Timeline/gh_3.png`,
        alt: 'Gameheads Image 3',
      },      
      {
        src: `${baseUrl}Imgs/Timeline/gh_1.png`,
        alt: 'Gameheads Image 1',
      },
    ],
  },
  {
    period: 'March 10, 2023',
    title: 'UC Davis Undergrad',
    subtitle: 'Davis, CA',
    detailTitle: 'Computer Science & Cinema Double Major',
    details: [
      'Leaving Oakland for UC Davis meant carrying with me the lessons of resilience, community, and cultural pride that guided my earlier achievements. Because of the leaps I took into leadership and tech, I entered college prepared to seek out spaces where I could both grow and uplift others. This drive helped me become a student ambassador for the College of Letters & Science, pursue a double major with cinema and digital media, and contribute to communities that value creativity and inclusion.',
      'Each new step, from mentoring peers to helping first-generation students navigate academic life, feels like a continuation of the support I received and the values I was raised with. These experiences motivate me to build a career where I not only advance my own goals, but also help open doors for others who come from communities like mine.',
    ],
    endDate: 'Present',
  },
  {
    period: 'December 9, 2023',
    title: 'HSF Scholar',
    subtitle: '',
    detailTitle: 'Hispanic Scholarship Fund Scholar Designation 2023 and 2025',
    details: [
      'I am one of the 10,000 students selected to be a 2023 HSF Scholar from a pool of 124,000+ applicants and 69,000 in 2025. I am honored for this designation, an acknowledgment that not only celebrates my academic achievements but also fuels my commitment to giving back to the Latino community. This designation is more than just a title; it represents a responsibility to uplift others through mentorship, advocacy, and community engagement.',
      'Attending events like the competitive STEM Summit in LA has exposed me to courageous leaders who built pathways in fields where representation is still limited. Seeing their achievements made my own goals feel more reachable, and reminded me of the importance of community, mentorship, and visibility.',
    ],
    endDate: 'Present',
    images: [
      {
        src: `${baseUrl}Imgs/Timeline/hsf_2.png`,
        alt: 'HSF Image 2',
      },
      {
        src: `${baseUrl}Imgs/Timeline/hsf_3.png`,
        alt: 'HSF Image 3',
      },      
      {
        src: `${baseUrl}Imgs/Timeline/hsf_1.png`,
        alt: 'HSF Image 1',
      },
    ]
  },
  {
    period: 'March 4, 2024',
    title: 'L&S Ambassador',
    subtitle: 'Davis, CA',
    detailTitle: 'Transformational Leadership Campus Organization',
    details: [
      'I have committed 118 hours as an ambassador, bridging the gap between students and campus resources. Through campus events and co-teaching a winter seminar, I am able to connect with students and help them feel a sense of belonging at UC Davis. A strength I bring to the organization is my technical affinity; this has allowed me to edit a promotional video and the podcast series for the program.',
      'More than anything, this program has allowed me to meet amazing people and grow as a leader who serves their community!',

    ],
    endDate: 'Present',
    images: [
      {
        src: `${baseUrl}Imgs/Timeline/alas_2.png`,
        alt: 'ALAS Image 2',
      },  
      {
        src: `${baseUrl}Imgs/Timeline/alas_3.png`,
        alt: 'ALAS Image 3',
      },          
      {
        src: `${baseUrl}Imgs/Timeline/alas_1.png`,
        alt: 'ALAS Image 1',
      }, 
    ],
  },
  {
    period: 'August 8, 2025',
    title: 'Swift Coding Club VP of Infrastructure',
    subtitle: 'Davis, CA',
    detailTitle: 'Expansion into iOS development, leading a team to maintain apps and websites',
    details: [
      'As the lead for our club’s technical infrastructure, I manage and coordinate a team of six developers responsible for maintaining shared codebases, tools, and repositories. This role involves structuring and overseeing GitHub issues, milestones, and project workflows to keep development organized, transparent, and on schedule. By establishing clear processes and documentation, I help ensure that projects remain scalable and approachable for both new and experienced contributors.',
      'In addition to infrastructure work, I support weekly iOS development workshops by keeping tooling, starter projects, and example code clean, accessible, and up to date. Beyond the technical responsibilities, I focus on fostering a collaborative and mentorship-driven environment where students can confidently contribute, learn from one another, and grow as developers within an inclusive and supportive community.',
    ],
    endDate: 'Present',
  },
  {
    period: 'September 20, 2025',
    title: 'Computer Science Peer Advisor',
    subtitle: 'Davis, CA',
    detailTitle: 'Advising fellow peers though CS curriculum',
    details: [
      'I help students navigate degree progression issues by tracking down prerequisite conflicts, understanding course dependencies, and working through institutional requirements to keep graduation on track. This often means digging into documentation, spotting problems early, and finding practical paths forward.',
      'I also focus on making complex degree requirements easier to understand by turning them into clear, actionable academic plans. So far, I’ve helped over 50 undergraduate students feel more confident about their schedules and long-term academic goals.',
    ],
    endDate: 'Present',
  },
  {
    period: 'Summer 2026 (Future)',
    title: 'Blizzard Build Engineer Intern',
    subtitle: 'Irvine, CA',
    detailTitle: 'Working on Overwatch 2 Build Systems!',
    details: [
      'STAY TUNED!',
    ],
    endDate: 'TBD',
  }
]

export default TIMELINE
