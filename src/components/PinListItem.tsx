import {
    IonItem,
    IonLabel,
    IonNote
    } from '@ionic/react';
import { Pin } from '../data/pins';
import './PinListItem.css';

interface PinListItemProps {
    pin: Pin;
  }

  const PinListItem: React.FC<PinListItemProps> = ({ pin }) => {
    return (
      <IonItem routerLink={`/pin/${pin.id}`} detail={false}>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h2>
            {pin.title}
            <span className="date">
              <IonNote>{pin.creation_date}</IonNote>
            </span>
          </h2>
          <p>
            {pin.text}
          </p>
        </IonLabel>
      </IonItem>
    );
  };

  export default PinListItem;