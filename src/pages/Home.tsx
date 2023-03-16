import MessageListItem from '../components/MessageListItem';
import PinListItem from '../components/PinListItem';
import { useState } from 'react';
import { Pin, getPins } from '../data/pins';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonButton,
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [pins, setPins] = useState<Pin[]>([]);

  useIonViewWillEnter(() => {
    const cpins = getPins();
    setPins(cpins);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Histoires</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>Histoires</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonList>
          {pins.map(m => <PinListItem key={m.id} pin={m} />)}
        </IonList>
      </IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Créer une nouvelle épingle</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <div>Titre :</div>
          <div>Citation :</div>
        </IonCardContent>

      <IonButton fill="clear">Créer</IonButton>
      </IonCard>
    </IonPage>
    
  );
};

export default Home;
