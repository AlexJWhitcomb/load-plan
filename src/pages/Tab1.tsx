import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonInput } from '@ionic/react';

const Tab1: React.FC = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerValue, setTimerValue] = useState(0);
  const [textList, setTextList] = useState([
    "Line 1",
    "Line 2",
    "Line 3",
    "Line 4",
    "Line 5",
    "Line 6",
    "Line 7",
    "Line 8",
  ]);

  const handleTimerClick = () => {
    setTimerRunning((prevState) => !prevState);
    // Implement timer logic here (start/stop the timer)
  };

  const handleObjectClick = (object: string) => {
    // Implement navigation to the new page using the selected object
    console.log(`Clicked on object: ${object}`);
  };

  const handleTextChange = (index: number, newText: string) => {
    setTextList((prevList) => {
      const newList = [...prevList];
      newList[index] = newText;
      return newList;
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {/* Container 1: List of Objects */}
          {textList.map((object, index) => (
            <IonItem key={index} button onClick={() => handleObjectClick(object)}>
              <IonLabel>{object}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        {/* Container 2: Timer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <div>{timerValue} seconds</div>
          <IonButton onClick={handleTimerClick}>{timerRunning ? 'Stop Timer' : 'Start Timer'}</IonButton>
        </div>

        {/* Container 3: List of Editable Text Lines */}
        <IonList>
          {textList.map((line, index) => (
            <IonItem key={index}>
              <IonInput
                value={line}
                onIonChange={(e) => handleTextChange(index, e.detail.value!)}
              ></IonInput>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

