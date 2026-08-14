import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import Header from '../components/Header'
import { Download as DownloadIcon, FileArchive, Monitor, ShieldCheck } from 'lucide-react'
import GoldButton from '../components/GoldButton'
import DOWNLOADS from '../data/DownloadsData'
import './Download.scss'

function Download() {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeDownload = DOWNLOADS[activeIndex]
    const appInfo = activeDownload.appInfo ?? {}
    const isPdf = activeDownload.previewType === 'pdf'

    return (
        <PageLayout
            kicker="Download"
            title="Download My Stuff"
            className="page--download"
            feature={(
                <div className="download-feature">
                    <Header title="Download" />
                    <ul className="download-list">
                        {DOWNLOADS.map((download, index) => (
                            <li key={download.id}>
                                <GoldButton
                                    label={download.title}
                                    selected={activeIndex === index}
                                    onSelect={() => setActiveIndex(index)}
                                    width="100%"
                                    aria-pressed={activeIndex === index}
                                />
                                {activeIndex === index && (
                                    <div className="download-list__gist">
                                        <span className="download-list__type">{download.type}</span>
                                        <p>{download.description}</p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            children={(
                <div className="download-showcase">
                    <figure className="download-preview">
                        <div className="download-preview__frame">
                            {isPdf ? (
                                <iframe
                                    className="download-preview__pdf"
                                    src={activeDownload.previewDocument}
                                    title={`${activeDownload.title} PDF viewer`}
                                />
                            ) : (
                                <img src={activeDownload.previewImage} alt={`${activeDownload.title} preview`} />
                            )}
                        </div>
                        <figcaption>
                            <span>Preview</span>
                            <span>{activeDownload.type}</span>
                        </figcaption>
                    </figure>

                    <section className={`download-info ${isPdf ? 'download-info--resume' : ''}`} aria-labelledby="download-info-title">
                        {isPdf ? (
                            <>
                                <h2 id="download-info-title">{activeDownload.infoTitle}</h2>
                                <p className="download-poem">
                                    {activeDownload.poem.map((line) => (
                                        <span key={line}>{line}</span>
                                    ))}
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="download-info__eyebrow">
                                    <ShieldCheck size={18} aria-hidden="true" />
                                    <span>Release information</span>
                                </div>
                                <h2 id="download-info-title">{activeDownload.title}</h2>
                                <p className="download-info__description">{activeDownload.description}</p>

                                <dl className="download-meta">
                                    <div>
                                        <dt><Monitor size={16} aria-hidden="true" /> Platform</dt>
                                        <dd>{appInfo.systemRequirements ?? activeDownload.type}</dd>
                                    </div>
                                    <div>
                                        <dt><FileArchive size={16} aria-hidden="true" /> Package size</dt>
                                        <dd>{appInfo.size ?? 'Not listed'}</dd>
                                    </div>
                                    <div>
                                        <dt>Version</dt>
                                        <dd>{appInfo.version ?? 'Current release'}</dd>
                                    </div>
                                    <div>
                                        <dt>Permissions</dt>
                                        <dd>{appInfo.permissions?.join(', ') ?? 'Not listed'}</dd>
                                    </div>
                                </dl>
                            </>
                        )}

                        <div className="download-safe-note">
                            <ShieldCheck size={20} aria-hidden="true" />
                            <p>Its safe, trust me bro</p>
                        </div>

                        <a className="download-action" href={activeDownload.downloadLink} download>
                            <DownloadIcon size={19} aria-hidden="true" />
                            <span>Safe download</span>
                        </a>
                    </section>
                </div>
            )}
        />
    )
}

export default Download