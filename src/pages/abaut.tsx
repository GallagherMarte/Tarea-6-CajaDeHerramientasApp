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
  IonAvatar,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';

import {
  mailOutline,
  callOutline,
  logoLinkedin,
  logoGithub
} from 'ionicons/icons';

const Abaut: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Acerca de Mí</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonAvatar style={{ margin: '0 auto', width: '120px', height: '120px' }}>
              <img
                alt="Mi foto"
                src="https://i.imgur.com/yOURIMG.png" // ← cambia por tu URL real o base64
              />
            </IonAvatar>
            <IonCardTitle className="ion-margin-top">Elian Marte</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonText>
              <p><strong>Matrícula:</strong> 2021-1234</p>
              <p><strong>Carrera:</strong> Desarrollo de Software</p>
              <p><strong>Instituto:</strong> ITLA</p>
            </IonText>

            <IonItem lines="none">
              <IonIcon icon={callOutline} slot="start" />
              <IonLabel>+1 (829) 966-4092</IonLabel>
            </IonItem>

            <IonItem lines="none">
              <IonIcon icon={mailOutline} slot="start" />
              <IonLabel>20231174@itla.edu.do</IonLabel>
            </IonItem>

            <IonItem lines="none" href="https://linkedin.com/in/elianmarte" target="_blank">
              <IonIcon icon={logoLinkedin} slot="start" />
              <IonLabel>LinkedIn</IonLabel>
            </IonItem>

            <IonItem lines="none" href="https://github.com/elianmarte" target="_blank">
              <IonIcon icon={logoGithub} slot="start" />
              <IonLabel>GitHub</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Abaut;
