import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"
import '../App.css';

function Header({cartItemCount,onSearch}){
    return(
        <header>
        <div className="logo">
        <Link to="/">
            <h1>리엑트 쇼핑몰</h1>
        </Link>
        </div>
        
        <nav>
            <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/category">의류</Link></li>
            <li><Link to="/category">전자기기</Link></li>
            <li><Link to="/category">액세서리</Link></li>
            </ul>
        </nav>

        <div>
            <SearchBar onSearch={onSearch}/>

            <div className="cart-icon">
                <Link to="/cart">
                    <span className="material-icons"></span>
                    {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </Link>
            </div>
        </div>
    </header>
    )
}
export default Header;