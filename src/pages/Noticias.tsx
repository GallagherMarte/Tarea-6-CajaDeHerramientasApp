import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonButton,
  IonImg,
  useIonToast
} from '@ionic/react';
import { useEffect, useState } from 'react';

// Logo del blog
const LOGO_URL = '/Noticia.png';

// URL del blog WordPress
const API_URL = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=3';

interface Noticia {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
}

const Noticias: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [present] = useIonToast();

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setNoticias(data);
      } catch (error) {
        present({ message: 'Error al cargar noticias.', duration: 2000, color: 'danger' });
      }
    };

    obtenerNoticias();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Noticias del Blog</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IonImg src={LOGO_URL} style={{ width: '200px', marginBottom: '20px' }} />
        </div>

        {noticias.map((noticia) => (
          <IonCard key={noticia.id}>
            <IonCardHeader>
              <IonCardTitle dangerouslySetInnerHTML={{ __html: noticia.title.rendered }} />
            </IonCardHeader>
            <IonCardContent>
              <IonText
                dangerouslySetInnerHTML={{ __html: noticia.excerpt.rendered }}
              ></IonText>

              <IonButton
                expand="block"
                fill="outline"
                color="primary"
                className="ion-margin-top"
                href={noticia.link}
                target="_blank"
              >
                Visitar Noticia
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Noticias;
