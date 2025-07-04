import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonText,
  IonButton
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* Encabezado de la página */}
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Bienvenido</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Contenido principal */}
      <IonContent className="ion-padding" fullscreen>
        <IonText>
          <h2>Esta es tu caja de herramientas</h2>
        </IonText>

        {/* Imagen de la caja de herramientas */}
        <IonButton
        //  routerLink='https://youtu.be/XVgkQpv13vs?si=ZILSOexJPPKLYEgO'
        href='https://youtu.be/XVgkQpv13vs?si=ZILSOexJPPKLYEgO'
        >
            <IonImg
          src="/caja-de-herramientas.png"
          alt="Caja de herramientas"
        />
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
