import React from 'react'
import './Header.css'

function Header() {
    return (
        <div id = "header">
            <div id = "top-header">
                <div class = "current-contributor-rank">
                    Your contributor rank : 1234
                </div>
                <div class="search">
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search fa-lg"></i>
                    </button>
                    <input type="text" class="searchTerm" />
                </div>
            </div>
            <div id = "bottom-header">
                <div>Rank</div>
                <div>Name</div>
                <div>Badge</div>
                <div>Contributor Points</div>
            </div>
        </div>
    )
}

export default Header
