export default function Reservations() {
    return(
        <div className="container-fluid">
            <form action="#" method="post">
                <fieldset>
                    <div>
                        <label className="form-label">Fecha:
                            <input type="date" className="form-control" id="date" name="date"></input>
                        </label>
                    </div>
                    <div>
                        <label className="form-label">Personas:
                            <input type="number" className="form-control" id="num-people" name="num-people" min={1} max={10}></input>
                        </label>
                    </div>
                    <div>
                        <label className="form-label">Hora:
                            <select id="time" name="time" className="form-select">
                                <option value="12">12:00 pm</option>
                                <option value="1">1:00 pm</option>
                                <option value="2">2:00 pm</option>
                                <option value="3">3:00 pm</option>
                                <option value="4">4:00 pm</option>
                                <option value="5">5:00 pm</option>
                                <option value="6">6:00 pm</option>
                                <option value="7">7:00 pm</option>
                                <option value="8">8:00 pm</option>
                                <option value="9">9:00 pm</option>
                            </select>
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label className="form-label">Nombre:
                            <input type="text" className="form-control" id="nombre" name="nombre"></input>
                        </label>
                    </div>
                    <div>
                        <label className="form-label">Apellidos:
                            <input type="text" className="form-control" id="apellidos" name="apellidos"></input>
                        </label>
                    </div>
                    <div>
                        <label className="form-label">Email:
                            <input type="email" className="form-control" id="email" name="email"></input>
                        </label>
                    </div>
                    <div>
                        <label className="form-label">Teléfono:
                            <input type="tel" className="form-control" id="telefono" name="telefono"></input>
                        </label>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}