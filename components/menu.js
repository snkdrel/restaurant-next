import Link from "next/link";

export default function Menu () {
    return (
        <nav className="navbar  navbar-expand-sm">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/sobre-nosotros" className="nav-link">Sobre nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/menu" className="nav-link">Menú</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/reservaciones" className="nav-link">Reservaciones</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/facturacion" className="nav-link">Facturación</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/ubicacion" className="nav-link">Ubicación</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}