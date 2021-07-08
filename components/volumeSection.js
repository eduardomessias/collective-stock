import Image from 'next/image'

import VolumeTable from './volumeTable'

const VolumeSection = () =>
    <div className="w3-panel">
        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>

            <div className="w3-third">
                <h5>Volume per region</h5>
                <Image src="/images/region.jpg" width={525} height={389} style={{ width: 100 + '%' }} alt="Google Regional Map" />
            </div>

            <div className="w3-twothird">
                <h5>Volume</h5>
                <VolumeTable />
            </div>
        </div>
    </div>
export default VolumeSection