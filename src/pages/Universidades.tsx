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
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  useIonToast
} from '@ionic/react';
import { useState } from 'react';

interface Universidad {
  name: string;
  domains: string[];
  web_pages: string[];
}

const Universidades: React.FC = () => {
  const [pais, setPais] = useState('');
  const [universidades, setUniversidades] = useState<Universidad[]>([]);
  const [present] = useIonToast();

  const buscarUniversidades = async () => {
    if (!pais) {
      present({ message: 'Por favor ingresa un país en inglés.', duration: 2000, color: 'danger' });
      return;
    }

    try {
      const respuesta = await fetch(`http://universities.hipolabs.com/search?country=${encodeURIComponent(pais)}`);
      const datos = await respuesta.json();
      setUniversidades(datos);
    } catch (error) {
      present({ message: 'Error al consultar las universidades.', duration: 2000, color: 'danger' });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Buscar Universidades</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        {/* Input para país */}
        <IonItem>
          <IonLabel position="floating">Nombre del país (en inglés)</IonLabel>
          <IonInput
            value={pais}
            onIonChange={(e) => setPais(e.detail.value!)}
            placeholder="Ej: Dominican Republic"
          />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={buscarUniversidades}>
          Buscar Universidades
        </IonButton>

        {/* Lista de resultados */}
        {universidades.length > 0 && (
          <IonList className="ion-margin-top">
            {universidades.map((uni, index) => (
              <IonCard key={index}>
                <IonCardHeader>
                  <IonCardTitle>{uni.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p><strong>Dominio:</strong> {uni.domains[0]}</p>
                    <p>
                      <strong>Sitio Web:</strong>{' '}
                      <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">
                        {uni.web_pages[0]}
                      </a>
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Universidades;
