import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
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
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

function Example() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
        </IonContent>
      </IonPage>
    </>
  );
}
export default Example;

// const Home: React.FC = () => {

//   const [messages, setMessages] = useState<Message[]>([]);

//   useIonViewWillEnter(() => {
//     const msgs = getMessages();
//     setMessages(msgs);
//   });

//   const refresh = (e: CustomEvent) => {
//     setTimeout(() => {
//       e.detail.complete();
//     }, 3000);
//   };

//   return (
//     <IonPage id="home-page">
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Inbox</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonRefresher slot="fixed" onIonRefresh={refresh}>
//           <IonRefresherContent></IonRefresherContent>
//         </IonRefresher>

//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">
//               Inbox
//             </IonTitle>
//           </IonToolbar>
//         </IonHeader>

//         <IonList>
//           {messages.map(m => <MessageListItem key={m.id} message={m} />)}
//         </IonList>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Home;
