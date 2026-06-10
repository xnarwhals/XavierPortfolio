
// other displayTypes can be expanded to video, single image, 3D model
const baseUrl = import.meta.env.BASE_URL

const ART = [
    {
        id : 1,
        title: "Ravenwood Manor",
        description: "Instrcutions for a board game I made using Illustrator, Canva, InDesign.",
        displayType: "ImgSequence",
        pages: [
            `${baseUrl}Imgs/Art/Ravenwood/manor1.png`,
            `${baseUrl}Imgs/Art/Ravenwood/manor2.png`,
            `${baseUrl}Imgs/Art/Ravenwood/manor3.png`,
            `${baseUrl}Imgs/Art/Ravenwood/manor4.png`,
            `${baseUrl}Imgs/Art/Ravenwood/manor5.png`,
            `${baseUrl}Imgs/Art/Ravenwood/manor6.png`,
        ]
    },
    {
        id : 2,
        title: "Video Game Zine",
        description: "My first zine was a tribute to my two favorite things: cats and video games. Made using Illustrator with lots of care and love of the craft.",
        displayType: "ImgSequence",
        pages: [
            `${baseUrl}Imgs/Art/Zine/zine1.png`,
            `${baseUrl}Imgs/Art/Zine/zine2.png`,
            `${baseUrl}Imgs/Art/Zine/zine3.png`,
            `${baseUrl}Imgs/Art/Zine/zine4.png`,
            `${baseUrl}Imgs/Art/Zine/zine5.png`,
            `${baseUrl}Imgs/Art/Zine/zine6.png`,
            `${baseUrl}Imgs/Art/Zine/zine7.png`,
            `${baseUrl}Imgs/Art/Zine/zine8.png`,

        ]
    }

]

export default ART
