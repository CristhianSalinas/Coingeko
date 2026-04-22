import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface TeamData {
  team: {
    name: string;
    info: {
      city: string;
      founded: string;
      stadium: string;
      president: string;
      last_title: string;
    };
    ranking: {
      position: string;
      competition: string;
    };
    social: {
      facebook: string;
      instagram: string;
      x: string;
    };
    links: {
      store: string;
      tickets: string;
    };
  };
}


function Equipo() {
const { equipo } = useParams<{ equipo: string }>();

  const [data, setData] = useState<TeamData | null>(null);

  useEffect(() => {
  if (!equipo) return;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://raw.githubusercontent.com/sdtibata/dataliga/main/${equipo}.json`
      );

      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };

  fetchData();
}, [equipo]);

    if (!data) return <p>Cargando...</p>;

    return (
        <> 
            <p>{data.team.name}</p>
            <p>{data.team.info.city}</p>
            
        </>
    )
}

export default Equipo