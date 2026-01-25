import './Services.scss'
import PageLayout from '../components/PageLayout'
import Header from '../components/Header'

function Services() {
    return (
        <PageLayout
            kicker="A portfolio doesn't have to be boring!"
            title="Interest Form"
            className="page--services"
            feature={
                <div className="info-text-box">
                    <Header title="Services" />
                    <div className="info-text-box__text">
                        <h2 className="info-text-box__title">Key Service Information</h2>
                        <h3 className="info-text-box__subtitle">Purpose</h3>
                        <p>
                            I love practicing my web development and design skills. My goal with this is to work alongside clients to
                            create something they feel truly captures their essence!
                        </p>
                        <h3 className="info-text-box__subtitle">How it works</h3>
                        <p>
                            I am a college student with many responsibilities, so if you are in need of an instant website, I might not be
                            your guy. That being said, my model is <strong>pay what you think the final product is worth</strong>. I'm not
                            trying to be a millionaire, at least yet. I do this for the love of the game.
                        </p>
                        <p>
                            I reserve the right to refuse service and will likely only handle one client at a time.
                        </p>
                    </div>
                </div>
            }
            children={
                <form
                    className="services-form"
                    action="https://formspree.io/f/mwvopakv"
                    method="POST"
                >
                    <div className="services-form__field">
                        <label htmlFor="fullName">Full Name</label>
                        <input id="fullName" name="fullName" type="text" autoComplete="name" required />
                    </div>
                    <div className="services-form__field">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" autoComplete="email" required />
                    </div>
                    <div className="services-form__field">
                        <label htmlFor="purpose">Portfolio purpose</label>
                        <select id="purpose" name="purpose" required>
                            <option value="" disabled>Choose one</option>
                            <option value="Tech">Tech</option>
                            <option value="3D Modeling">3D modeling</option>
                            <option value="Art">Art</option>
                            <option value="Liberal Arts">Liberal arts</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="services-form__field">
                        <label htmlFor="personality">Level of Personality in Design</label>
                        <select id="personality" name="personality" required>
                            <option value="" disabled>Choose one</option>
                            <option value="1 - Standard">1 - Standard</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5 - Unique and quirky">5 - Unique and quirky</option>
                        </select>
                    </div>
                    <div className="services-form__field">
                        <label htmlFor="features">Any key features you know you will need?</label>
                        <textarea id="features" name="features" rows="3" />
                    </div>
                    <div className="services-form__field">
                        <label htmlFor="comments">Other comments</label>
                        <textarea id="comments" name="comments" rows="4" />
                    </div>
                    <input className="services-form__bot" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                    <button className="services-form__submit" type="submit">Send Interest</button>
                </form>
            }
        />
    )
}

export default Services
