const COMICS_API = 'https://collective-stock.vercel.app/api/ebay/comics'
const loadVolume = async () => {
    let vol = await fetch(COMICS_API)
    if (vol) {
        console.dir(vol)
    }
}
const VolumeTable = () => { 
    const t = loadVolume()

    const volume = [{
        brand: "fa-user",
        product: "Amazing Spider-man #55",
        latestPrice: 100.00,
        timestamp: "03/07/2021 11:11 am"
    }]

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
                {volume.map ((collectible, index) => (
                    <tr key={index}>
                        <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
                        <td>{collectible.product}</td>
                        <td>{collectible.latestPrice}</td>
                        <td>{collectible.timestamp}</td>
                    </tr>    
                ))}
            </tbody>
        </table>
    )
}

export default VolumeTable