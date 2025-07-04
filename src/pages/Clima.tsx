import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  useIonToast
} from '@ionic/react';
import { useEffect, useState } from 'react';

const API_KEY = 'TU_API_KEY'; // ← reemplaza con tu API Key

const Clima: React.FC = () => {
  const [clima, setClima] = useState<any>(null);
  const [present] = useIonToast();

  const obtenerClima = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Santo+Domingo,DO&appid=${API_KEY}&units=metric&lang=es`
      );
      const data = await res.json();
      setClima(data);
    } catch (error) {
      present({ message: 'Error al obtener el clima', duration: 2000, color: 'danger' });
    }
  };

  useEffect(() => {
    obtenerClima();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Clima en República Dominicana</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        {clima ? (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{clima.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                <h2>🌡 Temperatura: {clima.main.temp} °C</h2>
                <p>📅 Fecha: {new Date().toLocaleDateString()}</p>
                <p>🌥 Clima: {clima.weather[0].description}</p>
              </IonText>
              <IonImg
                src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
                alt="Icono del clima"
                style={{ width: '100px', marginTop: '10px' }}
              />
            </IonCardContent>
          </IonCard>
        ) : (
          <IonText>
            <p>Cargando clima...</p>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Clima;