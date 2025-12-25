import './index.scss'

function CertificateCard( { cert } ) {
    return (
        <div className="cert-card">
            <img src={cert.image} alt={cert.title} className="cert-card__image" />
            <div className="cert-card__meta">
                <p className="cert-card__title">{cert.title}</p>
                <p className="cert-card__date">{cert.date}</p>
            </div>
        </div>
    )
}


export default CertificateCard
