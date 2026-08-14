import PageLayout from '../components/PageLayout'
import Header from '../components/Header'
import './Download.scss'


function Download() {
    return (
        <PageLayout
            kicker="Download"
            title="Download My Stuff"
            className="page--download"
            feature={(
                <div className='download-feature'>
                    <Header title="Timeline"/>
                </div>
            )}
            children={<></>}
        />
    )
}

export default Download