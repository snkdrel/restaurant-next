export default function Billing() {
    return(
        <div className="container">
            <div className="mb-3">
                <h3>Solicita tu factura:</h3>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">RFC:
                        <input type="text" className="form-control" id="rfc" name="rfc"></input>
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Ticket ID:
                        <input type="text" className="form-control" id="ticketid" name="ticketid"></input>
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Monto:
                        <input type="text" className="form-control" id="monto" name="monto"></input>
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Soy Extranjero
                        <span> </span>
                        <input type="checkbox" className="form-check-input" id="extranjero" name="extranjero"></input>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Enviar</button>
            </form>
        </div>
    );
}