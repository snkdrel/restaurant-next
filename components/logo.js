import Image from "next/image";

export default function Logo() {
    return (
        <div className="container text-center">
            <div className="card align-items-center" >
                <Image className='card-img-top w-25 h-auto' src="/images/logo.png" alt="Logo" width={0} height={0} sizes="100vw"/>    
                <div className="card-body">
                    <h4 className="card-title">Restaurante</h4>
                    <p className="card-test">Este es mi slogan</p>
                </div>
            </div>
        </div>
    );
}