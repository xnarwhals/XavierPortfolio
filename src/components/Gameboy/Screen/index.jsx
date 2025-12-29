import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItchIo, faWindows, faApple } from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Screen({ screenContent, curCartridge }) {
    if (!screenContent) { return (<p style={{ color: "white" }}>Screen Error</p>); }
    if (screenContent === "static") { return (<div className="static-container" />); }

    const platformIcons = {
        Windows: faWindows,
        Mac: faApple,
        "Controller Support": faGamepad,
        "Oculus Quest": faVrCardboard,
    };

    const renderers = {
        home: () => (
            <div className="home-container">
                <img className="home-img" src={curCartridge.frontImg} alt={curCartridge.id} />
            </div>
        ),
        trailer: () => (
            <div className="trailer-container">
                <iframe
                    width="100%"
                    height="100%"
                    src={curCartridge.trailerUrl}
                    title={`${curCartridge.id} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        ),
        itchio: () => (
            <div className="itchio-container">
                <a
                    href={curCartridge.itchLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open itch.io page"
                    className="icon"
                >
                    <FontAwesomeIcon
                        icon={faItchIo}
                        color={curCartridge.colors.mainColor}
                    />
                </a>
                <p className="itchio-text">Click To Play!</p>
            </div>
        ),
        credits: () => (
            <div className="credits-container">
                <p style={{ color: curCartridge.colors.mainColor }}>
                    <br /> Lead Programmer <br /> {curCartridge.gameGist}
                </p>
                <img src={curCartridge.backImg} alt={curCartridge.id} />
            </div>
        ),
        design: () => (
            <div className="design-container">
                <h3 style={{ marginTop: "-5px" }}>Design Tools</h3>
                <ul>
                    <li>
                        <i className="devicon-photoshop-plain" title="Photoshop" />
                    </li>
                    <li>
                        <i className="devicon-illustrator-plain" title="Illustrator" />
                    </li>
                    <li>
                        <i className="devicon-premierepro-plain" title="Premier Pro" />
                    </li>
                </ul>
            </div>
        ),
        frameworks: () => (
            <div className="frameworks-container">
                <h3 style={{ marginTop: "-5px" }}>Frameworks</h3>
                <ul>
                    <li>
                        <i className="devicon-unity-plain" title="Unity" />
                    </li>
                    <li>
                        <i className="devicon-react-original" title="React.js" />
                    </li>
                    <li>
                        <i className="devicon-unrealengine-original" title="Unreal" />
                    </li>
                </ul>
            </div>
        ),
        languages: () => (
            <div className="languages-container">
                <h3 style={{ marginTop: "-5px" }}>Languages</h3>
                <ul>
                    <li>
                        <i className="devicon-c-plain" title="C" style={{ fontSize: "35px" }} />
                    </li>
                    <li>
                        <i className="devicon-cplusplus-plain" title="C++" style={{ fontSize: "35px" }} />
                    </li>
                    <li>
                        <i className="devicon-csharp-plain" title="C#" style={{ fontSize: "35px" }} />
                    </li>
                    <li>
                        <i className="devicon-javascript-plain" title="JavaScript" style={{ fontSize: "35px" }} />
                    </li>
                    <li>
                        <i className="devicon-python-plain" title="Python" style={{ fontSize: "35px" }} />
                    </li>
                    <li>
                        <i className="devicon-html5-plain" title="HTML5" style={{ fontSize: "35px" }} />
                    </li>
                    <li>
                        <i class="devicon-swift-plain"></i>
                    </li>
                </ul>
            </div>
        ),
        extra: () => (
            <div className="extra-container">
                <h3>Extra</h3>
                <ul>
                    <li>
                        <i className="devicon-github-original" title="Github" />
                    </li>
                    <li>
                        <i className="devicon-sass-original" title="Sass" />
                    </li>
                    <li>
                        <i className="devicon-json-plain" title="JSON" />
                    </li>
                </ul>
            </div>
        ),
        experience: () => (
            <div className="experience-container">
                <h3>Experience</h3>
                <p>{curCartridge.experience}</p>
            </div>
        ),
        platforms: () => {
            let platformsArray = curCartridge.platforms.split(", ");
            if (curCartridge.id === "Apt510") {
                platformsArray = platformsArray.slice(0, -2);
            }

            return (
                <div className="platforms-container">
                    <h3>Platforms</h3>
                    <p>{curCartridge.platforms}</p>
                    <ul>
                        {platformsArray.map((platform) => (
                            <li key={platform}>
                                <FontAwesomeIcon
                                    icon={platformIcons[platform]}
                                    color={curCartridge.colors.mainColor}
                                    className="b-icon"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            );
        },
    };

    const requiresCartridge = new Set([
        "home",
        "trailer",
        "itchio",
        "credits",
        "experience",
        "platforms",
    ]);

    if (!curCartridge && requiresCartridge.has(screenContent)) {
        return (
            <div className="empty-screen">
                <p>Drag and Drop!</p>
                <p>Short on Time?</p>
                <Link to="/quick-portfolio" className="quick-link">Quick Portfolio</Link>
            </div>
        );
    }

    const renderContent = renderers[screenContent];
    if (!renderContent) { return (<p style={{ color: "white" }}>Screen Error</p>); } // safety first
    return renderContent();
}

export default Screen
