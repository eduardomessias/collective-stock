const TopVolumeTable = () => {
    const c = {
        brand: "fa-user",
        product: "Amazing Spider-man #55",
        latestPrice: 100.00,
        timestamp: "03/07/2021 11:11 am"
    }

    const topVolume = [c, c, c, c, c, c, c]

    return (
        <table className="w3-table w3-striped w3-white">
            <thead>
            <tr>
                <th>Brand</th>
                <th>Product</th>
                <th>Latest price</th>
                <th>Timestamp</th>
            </tr>
            </thead>
            <tbody>
                {topVolume.map ((c, i) => (
                    <tr>
                        <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
                        <td>{c.product}</td>
                        <td>{c.latestPrice}</td>
                        <td>{c.timestamp}</td>
                    </tr>    
                ))}
            </tbody>
        </table>
    )
}

export default TopVolumeTable