import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonText,
  IonImg,
  useIonToast
} from '@ionic/react';
import { useState, useRef } from 'react';

interface PokemonData {
  sprites: { front_default: string };
  base_experience: number;
  abilities: { ability: { name: string } }[];
}

const sonidos: { [key: string]: string } = {
  pikachu:
    'https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/mhfmlxhx/025%20-%20Pikachu%20Cry.mp3',
  // Puedes agregar más sonidos con nombre en minúscula
};

const Pokemon: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [error, setError] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);
  const [present] = useIonToast();

  const buscarPokemon = async () => {
    if (!nombre) {
      present({ message: 'Ingresa el nombre de un Pokémon', duration: 2000, color: 'danger' });
      return;
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
      if (!res.ok) throw new Error('Pokémon no encontrado');

      const data: PokemonData = await res.json();
      setPokemon(data);
      setError('');

      // Reproducir sonido si existe
      const sonidoUrl = sonidos[nombre.toLowerCase()];
      if (sonidoUrl && audioRef.current) {
        audioRef.current.src = sonidoUrl;
        audioRef.current.play();
      }
    } catch (err) {
      setPokemon(null);
      setError('Pokémon no encontrado o error en la búsqueda.');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Buscar Pokémon</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonItem>
          <IonLabel position="floating">Nombre del Pokémon</IonLabel>
          <IonInput
            value={nombre}
            onIonChange={(e) => setNombre(e.detail.value!)}
            placeholder="Ej: Pikachu"
          />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={buscarPokemon}>
          Buscar
        </IonButton>

        {error && (
          <IonText color="danger" className="ion-margin-top">
            {error}
          </IonText>
        )}

        {pokemon && (
          <>
            <IonText className="ion-margin-top">
              <h2>{nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h2>
              <p>Experiencia base: {pokemon.base_experience}</p>
              <p>Habilidades:</p>
              <ul>
                {pokemon.abilities.map((hab, idx) => (
                  <li key={idx}>{hab.ability.name}</li>
                ))}
              </ul>
            </IonText>

            <IonImg
              src={pokemon.sprites.front_default}
              alt={nombre}
              style={{ width: '150px', height: '150px', marginTop: '15px' }}
            />

            {/* Reproductor de audio oculto */}
            <audio ref={audioRef} />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Pokemon;
