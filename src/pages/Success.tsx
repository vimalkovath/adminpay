import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonRow, IonCol, IonButton} from '@ionic/react';



const Success: React.FC = () => {


  
  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
        <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
        </IonButtons>
          <IonTitle>Success</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo" >
        <img src="assets/tk.png" className="tikimage" alt="Ionic logo" />
        </div>

      </IonContent>
      <IonRow>
      <IonCol>
        <IonButton routerLink="/" className="next" color="success" expand="block">Return</IonButton>
      </IonCol>
    </IonRow>

    </IonPage>
  );
};

export default Success;

