import Image from "next/image";

export default function Footer() {
    return (
        <div className="container-fluid bg-dark text-light fixed-bottom py-4 px-5">
            <div className="row w-75 mx-auto">
                <div className="col-6 text-end">
                    <p><Image src="/images/location.png" alt="Ícono de ubicación" width={30} height={30} /> Ángel de la Independencia, Avenida Paseo de la Reforma, Juárez, Ciudad de México, CDMX</p>
                </div>
                <div className="col-6 text-start">
                    <p><Image src="/images/phone-call.png" alt="Ícono de teléfono" width={30} height={30}/> 55555555</p>
                    <p><Image src="/images/email.png" alt="Ícono de email" width={30} height={30}/> restaurante@mail.com</p>
                </div>
            </div>
        </div>
    );
}