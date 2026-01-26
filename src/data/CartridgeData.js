
const baseUrl = import.meta.env.BASE_URL

const cartridgeData = [
    {
        id: "Selva",
        image: `${baseUrl}Imgs/Games/Game_Selva.png`,
        trailerUrl: "https://www.youtube.com/embed/h2abkQpf6_M?si=xefEiDqt4xxHcaRl", 
        backImg: `${baseUrl}Imgs/Games/SelvaBack.png`,
        frontImg: `${baseUrl}Imgs/Games/Selva.png`,
        colors: {
            mainColor: "#C1E899",
            complementaryColor: "#9A6735",
            textColor: "#55883B"
        },
        gameGist: "2022 Jungle Adventure 2D Platformer",
        experience: "Unity Engine Workflow, Dynamic Player Movement, Intro to C#, and Tilemapping",
        itchLink: "https://gameheads.itch.io/selva",
        platforms: "Windows, Mac, Controller Support"
    },
    {
        id: "Colorezz",
        image: `${baseUrl}Imgs/Games/Game_Colorezz.png`,
        trailerUrl: "https://www.youtube.com/embed/ULZr5-ryP3c?si=G7HqJ5HJ6TUoYi-v",
        backImg: `${baseUrl}Imgs/Games/ColorezzBack.png`,
        frontImg: `${baseUrl}Imgs/Games/Colorezz.png`,
        colors: {
            mainColor: "#219ebc",
            complementaryColor: "#fb8500",
            textColor: "#00FFFF"
        },
        gameGist: "2023 Fixed 2D First Person Shooter",
        experience: "Basic Shader Graph, Unity New Input System, Version Control, and Working with Other Programmers",
        itchLink: "https://gameheads.itch.io/colorezz",
        platforms: "Windows, Mac, Controller Support"
    },
    {
        id: "Apt510",
        image: `${baseUrl}Imgs/Games/Game_Apt510.png`,
        trailerUrl: "https://www.youtube.com/embed/jrzt0Dyz0MU?si=v5-pfKBY-LGzJQE3",
        backImg: `${baseUrl}Imgs/Games/VPVRBack.png`,
        frontImg: `${baseUrl}Imgs/Games/VPVR.png`,
        colors: {
            mainColor: "#7E5CAD",
            complementaryColor: "#EB3678",
            textColor: "#180161"
        },
        gameGist: "2024 VR Puzzle Escape Room",
        experience: "First 3D Project, Baked Lighting, Use of Static Data, and Understanding of Unity XR Interaction Framework",
        itchLink: "https://gameheads.itch.io/apartment-510",
        platforms: "Oculus Quest, Oculus Rift, HTC Vive"   
    },
    {
        id: "Spree",
        image: `${baseUrl}Imgs/Games/Game_Spree.png`,
        trailerUrl: "https://www.youtube.com/embed/4hrXlGriq44?si=FrArLTYsXC_pQLk8",
        backImg: `${baseUrl}Imgs/Games/SpreeBack.png`,
        frontImg: `${baseUrl}Imgs/Games/Spree.png`,
        colors: {
            mainColor: "#FFD166",
            complementaryColor: "#06D6A0",
            textColor: "#EF476F"
        },
        gameGist: "2025 ALT CTRL Co-op Racing",
        experience: "Advanced C# Scripting, Scriptable Object based item system, and CPU racers",
        itchLink: "https://gameheads.itch.io/spree",
        platforms: "Windows, Mac, Controller Support, Shopping Cart"
    }

]

export default cartridgeData;
