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
  useIonToast,
} from '@ionic/react';
import { useState } from 'react';

const Edad: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState<number | null>(null);
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [present] = useIonToast();

  const obtenerEdad = async () => {
    console.log('Nombre actual:', nombre); // Para depurar

    if (!nombre.trim()) {
      present({
        message: 'Por favor escribe un nombre.',
        duration: 2000,
        color: 'danger',
      });
      return;
    }

    try {
      const res = await fetch(`https://api.agify.io/?name=${nombre}`);
      const data = await res.json();

      if (data.age !== null) {
        setEdad(data.age);

        if (data.age < 18) {
          setCategoria('Joven');
          setImagen('https://cdn-icons-png.flaticon.com/512/2922/2922688.png');
        } else if (data.age <= 60) {
          setCategoria('Adulto');
          setImagen('https://cdn-icons-png.flaticon.com/512/2922/2922510.png');
        } else {
          setCategoria('Anciano');
          setImagen('https://cdn-icons-png.flaticon.com/512/2922/2922561.png');
        }
      } else {
        setEdad(null);
        setCategoria('Edad no determinada');
        setImagen('');
      }
    } catch (err) {
      present({
        message: 'Error al conectar con la API.',
        duration: 2000,
        color: 'danger',
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Predicción de Edad</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput
            value={nombre}
            onIonChange={(e) => {
              const nuevoNombre = e.detail.value!;
              setNombre(nuevoNombre);

              // Limpia resultados anteriores al cambiar el nombre
              setEdad(null);
              setCategoria('');
              setImagen('');
            }}
            placeholder="Ingresa un nombre"
          />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={obtenerEdad}>
          Predecir Edad
        </IonButton>

        {edad !== null && (
          <>
            <IonText className="ion-margin-top">
              <h2>Edad estimada: <strong>{edad} años</strong></h2>
              <h3>Clasificación: <strong>{categoria}</strong></h3>
            </IonText>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <IonImg src={imagen} style={{ width: '150px', height: '150px' }} />
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Edad;
