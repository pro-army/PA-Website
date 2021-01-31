import React from 'react'
import Header from './Header'
import './Contributors.css'
import ContributorInfo from './ContributorInfo'

function Main() {
    return (
        <div id = "contributors-parent">
            <div id = "contributors">
                {/* <div id = "makeSticky">
                    hello there
                </div> */}
                    <Header />

                <div id = "body-part">
                    <ContributorInfo size = "medium" />
                    <ContributorInfo size = "medium" />
                    <ContributorInfo size = "medium" />
                    <ContributorInfo size = "small" />
                    <ContributorInfo size = "small" />
                    <ContributorInfo size = "small" />
                    <ContributorInfo size = "small" />
                    <ContributorInfo size = "small" />
                    <ContributorInfo size = "small" />
                    <ContributorInfo size = "small" />
                    <ContributorInfo size = "small" />
                </div>
            </div>

            <div id = "current-contributor">
                <ContributorInfo size = "large"/>
            </div>
        </div>
    )
}

export default Main
