import Image from "next/image";

export default function Footer() {
    return (
        <div className="container-fluid bg-dark text-light">
            <Image src="/images/location.png" alt="Ícono de ubicación" width={60} height={60}/>
            <p>ubicacion</p>
            <Image src="/images/phone-call.png" alt="Ícono de teléfono" width={60} height={60}/>
            <p>telefono</p>
            <Image src="/images/email.png" alt="Ícono de email" width={60} height={60}/>
            <p>email</p>
        </div>
    );
}