import PinListItem from '../components/PinListItem';
import { useState } from 'react';
import { Pin, getPins, getPinByTitle, addPin } from '../data/pins';
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
    const cpins = getPins() || getPinByTitle('');
    setPins(cpins);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const [menuType, setMenuType] = useState('overlay');
  const handleCreatePin = () => {
    const titleInput = document.querySelector<HTMLInputElement>('#view-card-title input');
    const textInput = document.querySelector<HTMLInputElement>('#view-card-text input');
  
    if (titleInput && textInput) {
      const newPin = {
        id: Date.now(),
        title: titleInput.value,
        text: textInput.value,
        author: 'John',
        source: 'My Pins',
        page_ref: 'p. 1',
        tags: ['new', 'pin'],
        preferences: 1,
        creation_date: new Date().toISOString(),
      };
      const updatedPins = [...pins, newPin];
      setPins(updatedPins);
      // Save the updated pins array to local storage
      localStorage.setItem('pins', JSON.stringify(updatedPins));
  
      // Clear the input fields
      titleInput.value = '';
      textInput.value = '';
    }
  };
  const handleDeletePin = (id: number) => {
    const updatedPins = pins.filter(p => p.id !== id);
    setPins(updatedPins);
    // Save the updated pins array to local storage
    localStorage.setItem('pins', JSON.stringify(updatedPins));
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
          {pins.map(m => <PinListItem key={m.id} pin={m} onDelete={function (id: number): void {
            throw new Error('Function not implemented.');
          } } />)}
        </IonList>
      </IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Créer une nouvelle épingle</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <div id="view-card-title">
            <IonCardSubtitle>Titre : </IonCardSubtitle>
            <input type="text" required></input>
          </div>
          <div id="view-card-citation">
            <IonCardSubtitle>Citation : </IonCardSubtitle>
            <input placeholder='Ex: Le ciel est beau ce matin' type="text" required></input>
          </div>
        </IonCardContent>

      <IonButton fill="clear" onClick={handleCreatePin}>Créer</IonButton>
      </IonCard>
    </IonPage>
    
  );
};

export default Home;
