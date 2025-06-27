import React from 'react';
import './navbarBanner.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {Link} from 'react-router-dom';

const NavbarBanner = () => {

  const options = [
    { "name": "Fresh" },
    { "name": "MX Player" },
    { "name": "Sell" },
    { "name": "Best Sellers" },
    { "name": "Prime" }, 
    { "name": "Mobiles" }, 
    { "name": "Today's Deals" },
    { "name": "Customer Service" },
    { "name": "New Releases" },
    { "name": "Fashion" },
    { "name": "Amazon Pay" },
    { "name": "Electronics" },
    { "name": "Home & Kitchen" }
  ]
    return(
    <div className="navbarBanner">
        <div className="navbarBannerOptionsLeft">

            <div className="optionsNavbarBanner">
                <MenuOutlinedIcon sx={{fontSize:"24px"}} />
                <div className="allOptionsNavbarBanner">All</div>
            </div>

            {
                options.map((item,ind) => {
                    return(
                        <Link to={'/products'} className="optionsNavbarBanner" key={ind}>
                            <div className="allOptionsNavbarBanner">{item.name}</div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
    )
}

export default NavbarBanner;