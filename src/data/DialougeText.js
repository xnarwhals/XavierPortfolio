// Binary tree structure:
// - Each node has `lines` (display these in order)
// - Then either:
//   - `choices.left` and `choices.right` (two buttons)
//   - OR `end: true`
// - Button labels live on the edge: `choices.left.label`, `choices.right.label`
const DialougeText = {
    root: {
        // Forced intro lines
        lines: [
            "One of my core memories is watching my brother play Pokémon on the Nintendo 64. As I grew, I realized that the ability to create worlds and stories was something that I wanted to do. In order to do that, I started to learn how to code and create video games.",
            "I am now a junior at UC Davis studying computer science and cinema & digital media. In my free time, I enjoy honing my skills with game/website development and filmmaking. As a student, I am always looking for new ways to learn and grow outside of academics, such as with my roles as a peer advisor and ambassador for my college!",
            "I live by the saying 'invest in yourself,' and I believe that the best way to do that is to grow and learn from the people around you!",
        ],

        // First 2 choices
        choices: {
            left: {
                label: "What's your favorite game?",
                node: {
                    lines: [
                        "I’m a bit of an Overwatch enthusiast, I picked up the game in 2017 and now have 2614 hours on it…",
                        "My mains are Hanzo and Genji, when I pop a dragon blade the whole lobby understands why I’m grandmaster (I get slept and ulted on).",
                        "Aside from Overwatch I love different genre games like Celeste, Pokemon Emerald, and Phasmaphobia!",
                    ],
                    choices: {
                        left: {
                            label: "Fun fact",
                            node: {
                                id: 'leaf-fun-fact-left',
                                lines: [
                                    "As much as I love to look at screens for hours a day, you might be surprised to know that I am very physically active.",
                                    "I am a casual walker, the most miles I’ve covered on foot in a day is 51. It’s amazing what being bored and having spare time can lead to.",
                                    "Someday I will break 100 miles!",
                                    "Just kidding.",
                                    "Unless…",
                                ],
                                end: true,
                            },
                        },
                        right: {
                            label: "Describe a time you failed and what you learned",
                            node: {
                                id: 'leaf-failure-left',
                                lines: [
                                    "While building my first React website, I failed in the planning stage—not in defining features or content, but in accounting for mobile responsiveness.",
                                    "I designed primarily for desktop and treated mobile adaptation as an afterthought.",
                                    "This resulted in significant rework, requiring me to revisit and refactor multiple style files to ensure the site functioned and displayed correctly on smaller screens.",
                                    "I learned the importance of establishing a clear blueprint before execution, especially adopting a mobile-first design approach.",
                                    "Thoughtful upfront planning can prevent wasted effort later and lead to more scalable, user-centered design decisions.",
                                ],
                                end: true,
                            },
                        },
                    },
                },
            },

            right: {
                label: "Tell me about a challenging technical problem you solved",
                node: {
                    lines: [
                        "Oh, are you a recruiter or something?",
                        "Well, my team's VR game was tanking in performance, running at 20fps; this was a fundamental issue because it increased the intrinsic risk of motion sickness that comes with VR.",
                        "Recognizing a critical performance issue, I consulted my mentor to confirm the best diagnostic tools. He recommended the Unity Profiler, which I then used to spearhead the investigation and realized that rendering was taking a significant amount of resources.",
                        "After activating the wireframe view, I was able to identify that one singular donut model had an absurd amount of polygons. My simple solution was to delete it, as it did not add anything significant to the game, which, when combined with occlusion culling and baking lightmaps, resulted in a jump to a stable 90 fps, reducing motion sickness.",
                    ],
                    choices: {
                        left: {
                            label: "Favorite Dessert",
                            node: {
                                id: 'leaf-dessert-right',
                                lines: [
                                    "This is a very important question",
                                    "I like donuts",
                                ],
                                end: true,
                            },
                        },
                        right: {
                            label: "Tell me about a time you learned a new technology",
                            node: {
                                id: 'leaf-learning-right',
                                lines: [
                                    "Believe it or not, I wasn't always the pro front-end developer I am now.",
                                    "When I was learning HTML and CSS, I was so confused yet determined to learn these foundations of web development.",  
                                    "Before using any sort of Javascript framework, I made my first portfolio website with pure HTML and CSS so that when I eventually leveled up I actually understood what was going on behind the scenes.",
                                    "Alongside constant practice, through CodePath and personal projects, I have reinforced concepts of web development in a way that is meaningful to me, helping me quickly pick up new frameworks or evolving technologies!",
                                ],
                                end: true,
                            },
                        },
                    },
                },
            },
        },
    },
}

export default DialougeText
