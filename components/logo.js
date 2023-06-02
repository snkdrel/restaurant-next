import Image from "next/image";

export default function Logo() {
    return (
        <div className="container text-center">
            <div className="card" >
                <Image className='card-img-top' src="/images/logo.jpeg" width={1200} height={300} alt="Logo"/>
                <div className="card-body">
                    <h4 className="card-title">Restaurante</h4>
                    <p className="card-test">Este es mi slogan</p>
                </div>
            </div>
        </div>
    );
}