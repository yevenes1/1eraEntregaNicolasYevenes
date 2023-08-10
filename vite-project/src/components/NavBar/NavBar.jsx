import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">TIENDA</a>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Otros</a>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;