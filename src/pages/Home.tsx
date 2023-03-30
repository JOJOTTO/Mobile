// import PinListItem from '../components/PinListItem';
// import { useState } from 'react';
// import { Pin, getPins, addPin } from '../data/pins';
// import {
//   IonButtons,
//   IonContent,
//   IonHeader,
//   IonList,
//   IonMenu,
//   IonMenuButton,
//   IonPage,
//   IonRefresher,
//   IonRefresherContent,
//   IonTitle,
//   IonToolbar,
//   useIonViewWillEnter,
//   IonButton,
//   IonCard, 
//   IonCardContent, 
//   IonCardHeader, 
//   IonCardSubtitle, 
//   IonCardTitle
// } from '@ionic/react';
// import './Home.css';

// const Home: React.FC = () => {

//   const [pins, setPins] = useState<Pin[]>([]);

//   useIonViewWillEnter(() => {
//     const cpins = getPins();
//     setPins(cpins);
//   });

//   const refresh = (e: CustomEvent) => {
//     setTimeout(() => {
//       e.detail.complete();
//     }, 3000);
//   };

//   const [menuType, setMenuType] = useState('overlay');
//   const handleCreatePin = () => {
//     const titleInput = document.querySelector<HTMLInputElement>('#view-card-title input');
//     const textInput = document.querySelector<HTMLInputElement>('#view-card-text input');
  
//     if (titleInput && textInput) {
//       const newPin = {
//         id: Date.now(),
//         title: titleInput.value,
//         text: textInput.value,
//         author: 'John',
//         source: 'My Pins',
//         page_ref: 'p. 1',
//         tags: ['new', 'pin'],
//         preferences: 1,
//         creation_date: new Date().toISOString(),
//       };
//       const updatedPins = [...pins, newPin];
//       setPins(updatedPins);
//       // Save the updated pins array to local storage
//       localStorage.setItem('pins', JSON.stringify(updatedPins));
  
//       // Clear the input fields
//       titleInput.value = '';
//       textInput.value = '';
//     }
//   };
//   const handleDeletePin = (id: number) => {
//     const updatedPins = pins.filter(p => p.id !== id);
//     setPins(updatedPins);
//     // Save the updated pins array to local storage
//     localStorage.setItem('pins', JSON.stringify(updatedPins));
//   };
//   return (
//     <IonPage id="home-page">
//       <IonMenu contentId="main-content">
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Menu Content</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent className="ion-padding">This is the menu content.</IonContent>
//       </IonMenu>
//         <IonHeader>
//           <IonToolbar>
//             <IonButtons slot="start">
//               <IonMenuButton></IonMenuButton>
//             </IonButtons>
//             <IonTitle>Histoires</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//       <IonContent fullscreen>
//         <IonRefresher slot="fixed" onIonRefresh={refresh}>
//           <IonRefresherContent></IonRefresherContent>
//         </IonRefresher>

//         <IonHeader collapse="condense">
//           <IonToolbar>
//               <IonButtons slot="start">
//                 <IonMenuButton></IonMenuButton>
//               </IonButtons>
//               <IonTitle>Histoires</IonTitle>
//             </IonToolbar>
//         </IonHeader>

//         <IonList>
//           {pins.map(m => <PinListItem key={m.id} pin={m} onDelete={function (id: number): void {
//             throw new Error('Function not implemented.');
//           } } />)}
//         </IonList>
//       </IonContent>
//       <IonCard>
//         <IonCardHeader>
//           <IonCardTitle>Créer une nouvelle épingle</IonCardTitle>
//         </IonCardHeader>

//         <IonCardContent>
//           <div id="view-card-title">
//             <IonCardSubtitle>Titre : </IonCardSubtitle>
//             <input type="text" required></input>
//           </div>
//           <div id="view-card-citation">
//             <IonCardSubtitle>Citation : </IonCardSubtitle>
//             <input placeholder='Ex: Le ciel est beau ce matin' type="text" required></input>
//           </div>
//         </IonCardContent>

//       <IonButton fill="clear" onClick={handleCreatePin}>Créer</IonButton>
//       </IonCard>
//     </IonPage>
    
//   );
// };

// export default Home;

import PinListItem from '../components/PinListItem';
import React, { useState } from 'react';
import { Pin, getPins, addPin } from '../data/pins';
import { pinSharp, searchOutline } from 'ionicons/icons';
import {
  IonButton,
  IonContent,
  IonMenu,
  IonIcon,
  IonRefresher,
  IonMenuToggle,
  IonRefresherContent,
  IonMenuButton,
  IonButtons,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonCardTitle,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonRippleEffect
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [pins, setPins] = useState<Pin[]>([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredPins, setFilteredPins] = useState<Pin[]>([]);


  useIonViewWillEnter(() => {
    const pns = getPins();
    setPins(pns);
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
  const handleSearchInput = (e: any) => {
    setSearchTitle(e.target.value);
  };

  const handleSearch = () => {
    const filteredPins = pins.filter(pin => pin.title.toLowerCase().includes(searchTitle.toLowerCase()));
    setFilteredPins(filteredPins);
  };



  return (
    <>
      <IonMenu contentId="home-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton class="button button-block button-positive">Mes épingles</IonButton>
            <IonButton class="button button-block button-positive">Thématiques</IonButton>
            <IonButton class="button button-block button-positive">À propos</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonPage id="home-page">
        <IonHeader>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonIcon icon={pinSharp} />
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonHeader>
        <IonContent fullscreen>
          <IonRefresher slot="fixed" onIonRefresh={refresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">
                Inbox
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList>
            {searchTitle === '' ?
              pins.map(p => <PinListItem key={p.id} pin={p} onDelete={handleDeletePin} />)
              :
              filteredPins.map(p => <PinListItem key={p.id} pin={p} onDelete={handleDeletePin} />)
            }
          </IonList>

        </IonContent>
        <IonCard className='ioncard'>
          <IonCardHeader>
            <IonCardTitle>Créer une nouvelle épingle</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div id="view-card-title">
              <IonCardSubtitle>Titre : </IonCardSubtitle>
              <input type="text" value={searchTitle} onInput={handleSearchInput} />
            </div>
            <div id="view-card-text">
              <IonCardSubtitle>Citation : </IonCardSubtitle>
              <input type="text" required />
            </div>
          </IonCardContent>
          <IonButton fill="clear" onClick={handleCreatePin}>Créer</IonButton>

          <div className='wrapper-button'> <IonButton class="ion-activatable ripple-parent circle" fill="clear" onClick={handleSearch}>
            <IonIcon slot="icon-only" icon={searchOutline} />
            <IonRippleEffect></IonRippleEffect>
          </IonButton></div>


        </IonCard>


      </IonPage>
    </>
  );
}


export default Home;