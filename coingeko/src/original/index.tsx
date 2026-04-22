function Original() {
  const random = () => {
    const msg = ["Hola", "Crypto", "React", "Examen"];
    alert(msg[Math.floor(Math.random() * msg.length)]);
  };

  return (
    <div>
      <h2>Original</h2>
      <button onClick={random}>
        Generar
      </button>
    </div>
  );
}

export default Original;