import { useState, useEffect } from "react";
import "./style.css";

interface Coin {
  id: string;
  symbol: string;
  name: string;
}

function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState<"todos" | "a" | "b" | "c">("todos");
  const [selected, setSelected] = useState<Coin | null>(null);

  const filtros = ["todos", "a", "b", "c"];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error("Error cargando coins:", error);
      }
    };

    fetchData();
  }, []);


  const coinsFiltradas = coins
    .filter((coin) =>
      busqueda.length < 2
        ? true
        : coin.name.toLowerCase().includes(busqueda.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter((coin) => {
      if (filtro === "todos") return true;
      return coin.name.toLowerCase().startsWith(filtro);
    });

  return (
    <>

      <div className="filtros">
        {filtros.map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f as any)}
            className={filtro === f ? "activo" : ""}
          >
            {f}
          </button>
        ))}
      </div>


      <input
        type="text"
        placeholder="Buscar coin..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />


      <div className="tabla-container">
        <h2>Cryptos</h2>

        <table className="tabla-posiciones">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Símbolo</th>
            </tr>
          </thead>

          <tbody>
            {coinsFiltradas.map((coin, index) => (
              <tr
                key={coin.id}
                className={
                  busqueda.length >= 2 &&
                  coin.name.toLowerCase().includes(busqueda.toLowerCase())
                    ? "resaltado"
                    : ""
                }
              >
                <td>{index + 1}</td>

                <td onClick={() => setSelected(coin)}>
                  {coin.name}
                </td>

                <td>{coin.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="modal">
          <h2>{selected.name}</h2>
          <p>ID: {selected.id}</p>
          <p>Símbolo: {selected.symbol}</p>

          <button onClick={() => setSelected(null)}>
            cerrar
          </button>
        </div>
      )}
    </>
  );
}

export default Home;