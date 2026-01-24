import PageLayout from '../components/PageLayout'
import Header from '../components/Header'
import ProjectsData from '../data/ProjectsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './QuickPortfolio.scss'

function QuickPortfolio() {
  return (
    <PageLayout
      kicker="No Time, No Problem"
      title="Quick Portfolio"
      className="page--quick-portfolio"
      feature={
      <div className='scroll-list'>
          <Header title='Skillset' /> 
          <ul>
              <li>
                  <h2>Languages</h2>
                  <i class="devicon-c-plain" title="C">
                      <span>C</span>
                  </i>
                  <i class="devicon-cplusplus-plain" title="C++">
                      <span>C++</span>
                  </i>
                  <i class="devicon-csharp-plain" title="C#">
                      <span>C#</span>
                  </i>
                  <i class="devicon-javascript-plain" title="JavaScript">
                      <span>JavaScript</span>
                  </i>
                  <i class="devicon-python-plain" title="Python">
                      <span>Python</span>
                  </i>
                  <i class="devicon-html5-plain" title="HTML5">
                      <span>HTML5</span>
                  </i>
                  <i class="devicon-swift-plain  ift-plain" title="Swift">
                      <span>Swift</span>
                  </i>
              </li>
              <li>
                  <h2>Frameworks</h2>
                  <i class="devicon-unity-plain" title="Unity">
                      <span>Unity</span>
                  </i>    
                  <i class="devicon-react-original" title="React.js">
                      <span>React.js</span>
                  </i>
                  <i class="devicon-unrealengine-original" title="Unreal">
                      <span>Unreal</span>
                  </i>
              </li>
              <li>
                  <h2>Tools</h2>
                  <i class="devicon-visualstudio-plain" title="Visual Studio Code">
                      <span>Visual Studio Code</span>
                  </i>
                  <i class="devicon-photoshop-plain" title="Photoshop">
                      <span>Photoshop</span>
                  </i>
                  <i class="devicon-illustrator-plain" title="Illustrator">
                      <span>Illustrator</span>
                  </i>
                  <i class="devicon-premierepro-plain" title="Premier Pro">
                      <span>Premier Pro</span>
                  </i>
              </li>
              <li>
                  <h2>Misc</h2>
                  <i class="devicon-github-plain" title="Github">
                      <span>Github</span>
                  </i>
                  <i class="devicon-sass-original" title="Sass">
                      <span>Sass</span>
                  </i>
                  <i class="devicon-json-plain" title="JSON">
                      <span>JSON</span>
                  </i>
              </li>
              <li>
                  <h2>Game Projects</h2>
                  <div className="game-text">
                      <div className="project">
                          <h3>
                              Spree
                              <h4>2025 Alt Crtl Co-op Racer</h4>
                          </h3>
                          <p>Advanced C# Scripting, Scriptable Object based item system, and CPU racers</p>
                          <img src='/Imgs/Games/Game_Spree.png' alt="Spree" />
                      </div>
                      <div className="project">
                          <h3>
                              Apartment 510
                              <h4>2024 VR Puzzle Escape Room</h4>
                          </h3>
                          
                          <p>First 3D Project, Baked Lighting, Use of Static Data, and Understanding of Unity XR Interaction Framework</p>
                          <img src='/Imgs/Games/Game_Apt510.png' alt="Apt510" />
                      </div>
                      <div className="project">
                          <h3>
                              Colorezz
                              <h4>2023 Fixed 2D First Person Shooter</h4>
                          </h3>
                          <p>Basic Shader Graph, Unity New Input System, Version Control, and Working with Other Programmers</p>
                            <img src='/Imgs/Games/Game_Colorezz.png' alt="Apt510" />
                      </div>
                      <div className="project">
                          <h3>
                              Selva
                              <h4>2022 Jungle Adventure 2D Platformer</h4>
                          </h3>
                          <p>Unity Engine Workflow, Dynamic Player Movement, Intro to C#, and Tilemaping</p>
                            <img src='/Imgs/Games/Game_Selva.png' alt="Apt510" />
                      </div>
                  </div>
              </li>
            </ul>
        </div>
      }
      children={
        <div className='project-preview-grid'>
          <div className='section codepath'>
            <div className="section-heading">
              <h3>Codepath Projects</h3>
              <FontAwesomeIcon icon={faArrowRight} className="scroll-hint" />
            </div>
            <div className="project-row">
              {ProjectsData.codepath.map((project) => (
                <div key={project.id} className='project-card'>
                  <h4>{project.name}</h4>
                  <div dangerouslySetInnerHTML={{ __html: project.thumbnail }} />
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><b>GitHub Repo</b></a>
                </div>
              ))}
            </div>
          </div>
          <div className='section personal'>
            <div className="section-heading">
              <h3>Personal Projects</h3>
              <FontAwesomeIcon icon={faArrowRight} className="scroll-hint" />
            </div>
            <div className="project-row">
              {ProjectsData.personal.map((project) => (
                <div key={project.id} className='project-card'>
                  <h4>{project.name}</h4>
                  <img src={project.thumbnail} alt={project.name} />
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><b>GitHub Repo</b></a>
                </div>
              ))}
            </div>
          </div>
          <div className='section misc'>
            <div className="section-heading">
              <h3>Misc Projects</h3>
              <FontAwesomeIcon icon={faArrowRight} className="scroll-hint" />
            </div>
            <div className="project-row">
              {ProjectsData.misc.map((project) => (
                <div key={project.id} className='project-card'>
                  <h4>{project.name}</h4>
                  <img src={project.thumbnail} alt={project.name} />
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><b>GitHub Repo</b></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  )
}

export default QuickPortfolio
