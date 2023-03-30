import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote, 
  IonChip,
  IonButton
} from '@ionic/react';
import { Pin } from '../data/pins';
import './PinListItem.css';

interface PinListItemProps {
  pin: Pin;
  onDelete: (id: number) => void;
}

const PinListItem: React.FC<PinListItemProps> = ({ pin, onDelete }) => {
  const handleDelete = (event: React.MouseEvent<HTMLIonButtonElement, MouseEvent>, id: number) => {
    event.preventDefault();
    onDelete(id);
  };
  

  return (
    <IonItem routerLink={`/pin/${pin.id}`} detail={false} onClick={(e) => e.stopPropagation()}>
  <div slot="start" className="dot dot-unread"></div>
  <IonLabel className="ion-text-wrap">
    <div className="message-header">
      <h1>{pin.title}</h1>
      <div className="chip-container">
        {pin.tags.map((tag, index) => (
          <IonChip key={index} outline={true}>
            #{tag}
          </IonChip>
        ))}
      </div>
    </div>
    <IonNote>{pin.text}</IonNote>
  </IonLabel>
  <IonButton slot="end" color="danger" onClick={(event) => handleDelete(event, pin.id)}>Delete</IonButton>
</IonItem>

  );
};

export default PinListItem;