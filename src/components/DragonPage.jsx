import React, { useEffect, useState } from "react";
import "./DragonPage.css";

function DragonPage() {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://dragonball-api.com/api/characters?limit=58"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  if (loading) return <div>Loading...</div>;
  if (!characters) return <div>No characters found</div>;

  return (
    <div className="container">
      <div className="title" data-aos="fade-down">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Dragon_Ball_Z_Logo_B.png"
          alt="Dragon Ball Logo"
          width={300}
          height={100}
          className="logo"
        />
      </div>
      <div className="characters" data-aos="fade-up">
        {characters.items.map((character) => (
          <div className="character" key={character.id} data-aos="zoom-in">
            <img src={character.image} alt={character.name} />
            <div className="character-info">
              <div>{character.name}</div>
              <div>{character.ki}</div>
              <div>{character.race}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragonPage;
