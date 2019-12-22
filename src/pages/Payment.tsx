import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonButton, IonIcon, IonRow, IonCol, IonPopover } from '@ionic/react';
import {  more } from 'ionicons/icons';
import AboutPopover from '../components/AboutPopover';
import './payment.css';



const Payment: React.FC = (props) => {

    const [showPopover, setShowPopover] = useState(false);
    const [popoverEvent] = useState();





  return (
    <IonPage id="about-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
          </IonButtons>
          
          <IonTitle>  <div className="mobileheader">Bill</div></IonTitle>
          <IonButtons slot="end">
            <IonButton icon-only >
              <IonIcon slot="icon-only" icon={more}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>



        <div>
        <img src="assets/g_400x400.png" className="gimage" alt="Ionic logo" />
        </div>
        <div className="about-info">
          <h4 className="ion-padding-start center">Your bill amount is 109 Rs</h4>

      

        <p className="ion-padding-start ion-padding-end">
        
          </p>
        </div>
      </IonContent>

      <IonRow>
           
      <IonCol>
        <IonButton routerLink="/phone" className="next" color="success" expand="block">Next</IonButton>
      </IonCol>
    </IonRow>

      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} /> 
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(Payment);