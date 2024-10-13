export const Form = () => {
  return (
    <>
      <section className="form-container">
        <h1>Registrar Nueva Oferta</h1>
        <form className="form-offer">
          <label htmlFor="title">Título de la oferta</label>
          <input id="title" type="text" required />

          <label htmlFor="description">Descripción</label>
          <textarea id="description" required></textarea>

          <label>Categoría</label>
          <div className="category-options">
            <label>
              <input type="radio" value="Producto" />
              Producto
            </label>
            <label>
              <input type="radio" value="Servicio" />
              Servicio
            </label>
          </div>

          <button className="button-form" type="submit">Registrar oferta</button>
        </form>
      </section>
    </>
  );
};
