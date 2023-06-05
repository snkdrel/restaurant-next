export default function MenuRestaurant() {
    return (
        <div className="m-5">
            <object type="aplication/pdf" data="/menu.pdf">
                <p>No se pudo visualizar el archivo PDF. Puedes descargarlo <a href="/menu.pdf">aquí</a>.</p>
            </object>
        </div>
    );
}