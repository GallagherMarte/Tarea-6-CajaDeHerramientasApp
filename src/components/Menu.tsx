import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  transgender,
  hourglass,
  transgenderOutline,
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  homeOutline,
  homeSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  hourglassOutline,
  bookOutline,
  rainyOutline,
  rainy,
  gameControllerOutline,
  gameController,
  earOutline,
  earth,
  helpBuoyOutline,
  help,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "genero",
    url: "/Genero",
    iosIcon: transgenderOutline,
    mdIcon: transgender,
  },
  {
    title: "Edad",
    url: "/Edad",
    iosIcon: hourglassOutline,
    mdIcon: hourglass,
  },
  {
    title: "Universidaes",
    url: "/Universidaes",
    iosIcon: bookOutline,
    mdIcon: bookOutline,
  },
  {
    title: "Clima",
    url: "/Clima",
    iosIcon: rainyOutline,
    mdIcon: rainy,
  },
  {
    title: "pokemon",
    url: "/Pokemon",
    iosIcon: gameControllerOutline,
    mdIcon: gameController,
  },
  {
    title: "Noticias",
    url: "/Noticias",
    iosIcon: earOutline,
    mdIcon: earth,
  },
   {
    title: 'Aserca de',
    url: '/Abaut',
    iosIcon: helpBuoyOutline,
    mdIcon: help,
  }
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
