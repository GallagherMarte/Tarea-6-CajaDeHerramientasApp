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
  useIonToast
} from '@ionic/react';
import { useState } from 'react';

const Genero: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [probabilidad, setProbabilidad] = useState(0);
  const [colorFondo, setColorFondo] = useState('light');
  const [present] = useIonToast();

  const predecirGenero = async () => {
    if (!nombre) {
      present({ message: 'Por favor ingresa un nombre.', duration: 2000, color: 'danger' });
      return;
    }

    console.log('--->>',probabilidad)

    try {
      const respuesta = await fetch(`https://api.genderize.io/?name=${nombre}`);
      const datos = await respuesta.json();
      console.log(datos)

      if (datos.gender) {
        setGenero(datos.gender);
        setProbabilidad(datos.probability);

        // Cambiar color de fondo
        if (datos.gender === 'male') {
          setColorFondo('#aad3f3'); // azul claro
        } else {
          setColorFondo('#f7c1d1'); // rosa claro
        }
      } else {
        setGenero('No definido');
        setColorFondo('light');
      }
    } catch (error) {
      present({ message: 'Error al conectar con la API', duration: 2000, color: 'danger' });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Predicción de Género</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent style={{ backgroundColor: colorFondo }} className="ion-padding" fullscreen>
        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput
            value={nombre}
            onIonChange={(e) => setNombre(e.detail.value!)}
            placeholder="Ingresa un nombre"
          />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={predecirGenero}>
          Predecir Género
        </IonButton>

        {genero && (
          <IonText className="ion-margin-top">
            <h2>
              Género: <strong>{genero === 'male' ? 'Masculino' : 'Femenino'}</strong>
            </h2>
            <p>Probabilidad: {probabilidad * 100}%</p>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Genero;
