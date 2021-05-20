import React from 'react';
import '../styles/BottomHeader.css';
import MenuIcon from '@material-ui/icons/Menu';

function BottomHeader({showNavbarPopup}) {
    return (
        <div className="bottomHeader">
            <div className="all" onClick={() => showNavbarPopup()}>
                <MenuIcon/>
                <span>All</span>
            </div>
            <ul className="bottomHeader__collection">
                <li className="bottomHeader__collectionItem"><span>Today's Deals</span></li>
                <li className="bottomHeader__collectionItem"><span>Customer Service</span></li>
                <li className="bottomHeader__collectionItem"><span>Gift Cards</span></li>
                <li className="bottomHeader__collectionItem"><span>Registry</span></li>
                <li className="bottomHeader__collectionItem"><span>Sell</span></li>
            </ul>
            <span className="covid-19">
                Amazon's response to COVID-19
            </span>
        </div>
    )
}

export default BottomHeader
