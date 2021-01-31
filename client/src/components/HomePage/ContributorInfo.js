import React from 'react'
import './ContributorInfo.css'

function ContributorInfo(props) {
    return (
        <div className = {"contributor " + props.size}>
            <div id = "rank">#1</div>
            <div id = "name">
                <i class="fas fa-user"></i>
                Username
            </div>
            <div id = "badge">Badge</div>
            <div id = "contribution-points">1234</div>
        </div>
    )
}

export default ContributorInfo
