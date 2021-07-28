export default function Formulario({ onFormSubmit }) {
  function handleFormSubmit(event) {
    event.preventDefault();

    const peso = event.currentTarget.elements.input_peso.value;
    const altura = event.currentTarget.elements.input_altura.value;

    onFormSubmit(altura, peso);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <section className="flex flex-col">
        <label htmlFor="input_altura">
          Altura
          <font color="gray" size="2">
            (ex:1,70)
          </font>
        </label>
        <input
          id="input_altura"
          className="border border-gray-700"
          type="number"
          step="0.01"
          defaultvalue="Quilos"
        />
      </section>

      <section className="flex flex-col">
        <label htmlFor="input_peso">
          Peso
          <font color="gray" size="2">
            (ex:69,200)
          </font>
        </label>
        <input
          id="input_peso"
          className="border border-gray-700"
          type="number"
          step="0.001"
        />
      </section>

      <section className="flex flex-row justify-end">
        <button className="bg-gray-200 p-1 mt-2 rounded-lg hover:bg-gray-300">
          Calcular
        </button>
      </section>
    </form>
  );
}
