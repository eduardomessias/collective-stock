import InfoCardMessages from './infoCardMessages'
import InfoCardViews from './infoCardViews'
import InfoCardShares from './infoCardShares'
import InfoCardUsers from './infoCardUsers'

const InfoCardSection = () =>
    <div className="w3-row-padding w3-margin-bottom">
        <div className="w3-quarter">
            <InfoCardMessages />
        </div>
        <div className="w3-quarter">
            <InfoCardViews />
        </div>
        <div className="w3-quarter">
            <InfoCardShares />
        </div>
        <div className="w3-quarter">
            <InfoCardUsers />
        </div>
    </div>

export default InfoCardSection