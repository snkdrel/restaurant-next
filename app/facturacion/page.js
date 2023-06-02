export default function Billing() {
    return(
        <div className="container-fluid">
            <form>
                <div>
                    <label className="form-label">RFC:
                        <input type="text" className="form-control" id="rfc" name="rfc"></input>
                    </label>
                </div>
                <div>
                    <label className="form-label">Ticket ID:
                        <input type="text" className="form-control" id="ticketid" name="ticketid"></input>
                    </label>
                </div>
                <div>
                    <label className="form-label">Monto:
                        <input type="text" className="form-control" id="monto" name="monto"></input>
                    </label>
                </div>
                <div>
                    <label className="form-label">Soy Extranjero
                        <input type="checkbox" className="form-check-input" id="extranjero" name="extranjero"></input>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}