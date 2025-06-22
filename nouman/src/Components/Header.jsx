
function Header(){
    return(
     <header>
       <div className="navbar">
        <div className="brand"><i><b>Flipmart</b></i></div>
        <div className="categories">
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Electronics</a>
          <a href="#">Furniture</a>
          <a href="#">Pages</a>
          <a href="#">Custom</a>
        </div>
        <div className="search">
          <div className="searchicon">
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <input placeholder="Search" className="searchbar" />
          <div className="menus">
            <div className="cart">
              <i className="fa-solid fa-cart-shopping" style={{color: 'white'}} />
            </div>
            <div className="menu">
              <i className="fa-solid fa-bars" style={{color: 'white'}} />
            </div>
          </div>
        </div>
      </div>
     </header>
    );
}
export default Header;