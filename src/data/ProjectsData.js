

const baseUrl = import.meta.env.BASE_URL

const ProjectsData = {
    games: [
        {
            id: 1,
            name: 'Metarrow',
            github: 'https://xnarwhals.itch.io/metarrow',
            thumbnail: `${baseUrl}Imgs/Thumbnails/metarrow.png`,
            events: [
                "CDM End of Year Showcase 2026"
            ]
        },
        {
            id: 2,
            name: 'Spree',
            github: 'https://gameheads.itch.io/spree',
            thumbnail: `${baseUrl}Imgs/Thumbnails/spree.png`,
            events: [
                "11th Gameheads Showcase",
                "Student Day Arcade @ GDC 2026",
                "Super Bowl Breakfest",
                "Open Sauce 2026"

            ]
        },
        {
            id: 3,
            name: 'Apartment 510',
            github: 'https://gameheads.itch.io/apartment-510',
            thumbnail: `${baseUrl}Imgs/Games/VPVR.png`,
            events: [
                "10th Gameheads Showcase",
            ]
        },
        {
            id: 4,
            name: 'Colorezz',
            github: 'https://gameheads.itch.io/colorezz',
            thumbnail: `${baseUrl}Imgs/Thumbnails/colorezz.png`,
            events: [
                "9th Gameheads Showcase",
            ]
        },
        {
            id: 5,
            name: 'Selva',
            github: 'https://gameheads.itch.io/selva',
            thumbnail: `${baseUrl}Imgs/Thumbnails/selva.png`,
            events: [
                "8th Gameheads Showcase",
            ]
        },
        {
            id: 6,
            name: 'PacPush',
            github: 'https://gameheads.itch.io/pacpush',
            thumbnail: `${baseUrl}Imgs/Thumbnails/pacpush.png`
        },
        {
            id: 7,
            name: 'Wizop',
            github: 'https://xnarwhals.itch.io/wizop',
            thumbnail: `${baseUrl}Imgs/Thumbnails/wizop.png`,
            events: [
                "CDM End of Year Showcase 2026"
            ]
        }
    ],

    codepath: [
        {
            id: 1,
            name: 'Community Board',
            github: 'https://github.com/xnarwhals/community-board',
            thumbnail: '<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/4f46e356613d47548e20b36e39c494b0-928debc93b1d93a1-full-play.gif">'
        },
        {
            id: 2,
            name: 'Flashcards',
            github: 'https://github.com/xnarwhals/flashcards',
            thumbnail: '<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/fd27c2330cf84bc89189cfc184b5f6d1-a43ff2ffc43061bc-full-play.gif">'
        },
        {
            id: 3,
            name: 'DexDive',
            github: 'https://github.com/xnarwhals/DexDive',
            thumbnail: '<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/812ca92e46344ee490441993d2851dc7-446c7a79e86ba996-full-play.gif">'
        },
        {
            id: 4,
            name: 'Data Dashboard',
            github: 'https://github.com/xnarwhals/data-dashboard',
            thumbnail: '<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/665113597bb1436a951bce689a791fe2-ac0c005a20395d30-full-play.gif">'
        },
        {
            id: 5,
            name: 'PokePals',
            github: 'https://github.com/xnarwhals/PokePals',
            thumbnail: '<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/341f37e65df14d8cbff41f41e3db943d-2c890b71126a6a0c-full-play.gif">'
        },
        {
            id: 6,
            name: 'PokeForum',
            github: 'https://github.com/xnarwhals/pokeforum',
            thumbnail: '<img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/f1cba0f803f84a28b51995cd101245de-c7693d7a2ef4c271-full-play.gif">'
        }
    ],

    personal: [
        {
            id: 1,
            name: 'First Website',
            github: 'https://github.com/xnarwhals/Xavier-Website',
            thumbnail: `${baseUrl}Imgs/Thumbnails/html.png`
        },
        {
            id: 2,
            name: 'React Portfolio V1',
            github: 'https://github.com/xnarwhals/XavierReact',
            thumbnail: `${baseUrl}Imgs/Thumbnails/react.png`
        },
        {
            id: 3,
            name: 'Portfolio V2!',
            github: 'https://github.com/xnarwhals/XavierPortfolio',
            thumbnail: `${baseUrl}Imgs/Thumbnails/react2.png`
        }
    ],

    misc: [
        {
            id: 1,
            name: 'AI Debate App',
            github: 'https://github.com/xnarwhals/DebateApp',
            thumbnail: `${baseUrl}Imgs/Thumbnails/debate.png`
        },
        {
            id: 2,
            name: 'AI Fake News Detector',
            github: 'https://github.com/xnarwhals/Fake-News-ECS-170',
            thumbnail: `${baseUrl}Imgs/Thumbnails/fakenews.png`
        }
    ]

}

export default ProjectsData
