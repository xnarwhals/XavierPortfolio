
const baseUrl = import.meta.env.BASE_URL

const AchievementsData = {
    certificates: [
        {
            id: 1,
            title: 'C++ Certificate',
            image: `${baseUrl}Imgs/Achievements/CPP_Cert.jpg`,
            date: 'February 15, 2025',
        },
        {
            id: 2,
            title: "JavaScript Certificate",
            image: `${baseUrl}Imgs/Achievements/JavaScript_Cert.jpg`,
            date: 'February 19, 2025',
        },
        {
            id: 3,
            title: "Github Certificate",
            image: `${baseUrl}Imgs/Achievements/Github_Cert.jpg`,
            date: 'March 26, 2025',
        },
        {
            id: 4,
            title: "CodePath Honors Certificate",
            image: `${baseUrl}Imgs/Achievements/CodePath_Cert.jpg`,
            date: 'Summer 2025',
        },
        {
            id: 5,
            title: "Davis Leadership",
            image: `${baseUrl}Imgs/Achievements/Leader_Cert.jpg`,
            date: 'June 15, 2025',
        },
        {
            id: 6,
            title: "Peer Mentor",
            image: `${baseUrl}Imgs/Achievements/Peer_Cert.jpg`,
            date: 'September 19, 2024',
        },
        {
            id: 7,
            title: "HSF Scholar",
            image: `${baseUrl}Imgs/Achievements/HSF_Cert.png`,
            date: 'November 1, 2025',
        }
    ],

    achievements: [
        {
            id: 1, 
            iconImg: `${baseUrl}Imgs/Achievements/IconBG.svg`,
            title: 'Pushed to Main',
            description: 'Design and push 10 websites to Github.',
            lucidIcon: 'ArrowBigUpDash'
        },
        {
            id: 2, 
            iconImg: `${baseUrl}Imgs/Achievements/IconBG.svg`,
            title: 'Experimental',
            description: 'Develop your first VR and ALT CTRL Game.',
            lucidIcon: 'ShoppingCart'
        },
        {
            id: 3, 
            iconImg: `${baseUrl}Imgs/Achievements/IconBG.svg`,
            title: 'Veteran Rookie',
            description: 'Land your first internship at a major gaming studio.',
            lucidIcon: 'Bot'
        },
        {
            id: 4,
            iconImg: `${baseUrl}Imgs/Achievements/IconBG.svg`,
            title: 'Hey! Listen!',
            description: 'Teach game development to high school students',
            lucidIcon: 'School'
        },
        {
            id: 5,
            iconImg: `${baseUrl}Imgs/Achievements/IconBG.svg`,
            title: 'Flex Queue Pro',
            description: 'Declare a double major in CS and Cinema',
            lucidIcon: 'GraduationCap'
        },
        {
            id: 6, 
            iconImg: `${baseUrl}Imgs/Achievements/IconBG.svg`,
            title: 'You Win!',
            description: 'Click me to complete one of your quests',
            lucidIcon: 'Trophy'
        }
    ]
}


export default AchievementsData
