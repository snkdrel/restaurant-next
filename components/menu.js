import Link from "next/link";

export default function Menu () {
    return (
        <ul>
            <li>
                <Link href="/">Inicio</Link>
            </li>
            <li>
                <Link href="/sobre-nosotros">Sobre nosotros</Link>
            </li>
            <li>
                <Link href="/menu">Menú</Link>
            </li>
            <li>
                <Link href="/reservaciones">Reservaciones</Link>
            </li>
            <li>
                <Link href="/facturacion">Facturación</Link>
            </li>
            <li>
                <Link href="/ubicacion">Ubicación</Link>
            </li>
        </ul>
    );
}