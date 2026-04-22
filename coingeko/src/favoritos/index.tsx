import { useEffect, useState } from "react";

interface Coin {
  id: string;
  symbol: string;
  name: string;
}

function Favoritos() {
  const [favorites, setFavorites] = useState<Coin[]>([]);

  // 🔁 cargar desde localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(stored);
  }, []);

  // ❌ eliminar favorito
  const removeFavorite = (id: string) => {
    const updated = favorites.filter((c) => c.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Favoritos</h2>

      {favorites.length === 0 ? (
        <p>No tienes criptomonedas favoritas</p>
      ) : (
        <ul>
          {favorites.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol})

              <button onClick={() => removeFavorite(coin.id)}>
                eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;