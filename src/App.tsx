import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home'
import Genero from './pages/Genero';
import Edad from './pages/Edad';
import Universidades from './pages/Universidades';
import Clima from './pages/Clima';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Pokemon from './pages/pokemon';
import Noticias from './pages/Noticias';
import Abaut from './pages/abaut';



setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/Home" />
            </Route>
            <Route path="/Home" exact={true}>
              <Home />
            </Route>
            <Route path="/Genero" exact={true}>
              <Genero />
            </Route>
              <Route path="/Edad" exact={true}>
              <Edad />
            </Route>
              <Route path="/Universidaes" exact={true}>
              <Universidades />
            </Route>
              <Route path="/Clima" exact={true}>
              <Clima />
            </Route>
             <Route path="/Pokemon" exact={true}>
              <Pokemon />
            </Route>
              <Route path="/Noticias" exact={true}>
              <Noticias />
            </Route>
              <Route path="/Abaut" exact={true}>
              <Abaut />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
