export default function Reservations() {
    return(
        <form action="#" method="post">
            <fieldset>
                <label>Fecha:
                    <input type="date"></input>
                </label>
                <label>Personas:
                    <select>
                        <value>1 persona</value>
                        <value>2 personas</value>
                    </select>
                </label>
                <label>
                    <select>
                        <value>1</value>
                        <value>2</value>
                    </select>
                </label>
            </fieldset>
            <fieldset>
                <label>Nombre:
                    <input type="text"></input>
                </label>
                <label>Apellidos:
                    <input type="text"></input>
                </label>
                <label>Email:
                    <input type="email"></input>
                </label>
                <label>Teléfono:
                    <input type="tel"></input>
                </label>
            </fieldset>
            <input type="submit" value="Reservar"></input>
        </form>
    );
}