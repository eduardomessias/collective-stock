const InfoCard = ({ caption, value, color, icon }) =>    
    <div className={"w3-container w3-"+color+" w3-padding-16"}>
        <div className="w3-left"><i className={"fa fa-"+icon+" w3-xxxlarge"}></i></div>
        <div className="w3-right">
            <h3>{value}</h3>
        </div>
        <div className="w3-clear"></div>
        <h4>{caption}</h4>
    </div>

export default InfoCard