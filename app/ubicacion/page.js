export default function Location() {
    return(
        <div className="card my-4 mx-auto py-3 px-5 w-75">
            <div className="row">
                <div className="card-body col-md-7">
                    <h4 className="card-title">Nos ubicamos en:</h4>
                    <p>Ángel de la Independencia, Avenida Paseo de la Reforma, Juárez, Ciudad de México, CDMX</p>
                </div>
                <iframe className="col-md-5" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C3%81ngel%20de%20la%20Independencia,%20Avenida%20Paseo%20de%20la%20Reforma,%20Ju%C3%A1rez,%20Ciudad%20de%20M%C3%A9xico,%20CDMX+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="320" height="350"></iframe>
            </div>
        </div>
    );
}