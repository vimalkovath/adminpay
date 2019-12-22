import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonRow, IonCol, IonButton } from '@ionic/react';




const Signup: React.FC= () => {

 

  return (
    <IonPage id="signup-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
        <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
        </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>

      <IonRow>  
      <IonCol>
        <IonButton routerLink="/phone" className="next" color="success" expand="block">Grab food</IonButton>
      </IonCol>
    </IonRow>

    <IonRow>  
    <IonCol>
      <IonButton routerLink="/phone" className="next" color="success" expand="block">Grab Express</IonButton>
    </IonCol>
  </IonRow>

  <IonRow>  
  <IonCol>
    <IonButton routerLink="/phone" className="next" color="success" expand="block">Grab Bike</IonButton>
  </IonCol>
</IonRow>

<IonRow>  
<IonCol>
  <IonButton routerLink="/signupcamera" className="next" color="success" expand="block">New User </IonButton>
</IonCol>
</IonRow>

      </IonContent>

    </IonPage>
  );
};

export default Signup;
