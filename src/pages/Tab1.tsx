import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Tab1.css';


const Tab1: React.FC = () => {
  const history = useHistory();
  const [textLines, setTextLines] = useState<string[]>(['MCD', '2FN', 'CMT', '2AET', '3AET']);
  //Timer's states:
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleObjectClick = (objectId: number) => {
    switch (objectId) {
      case 1:
        history.push('/c17');
        break;
      case 2:
        history.push('/c130');
        break;
      case 3:
        history.push('/kc135');
        break;
      default:
        break;
    }
  };

  const handleStartTimer = () => {
    if (!isRunning) {
      setStartTime(Date.now() - elapsedTime);
      setIsRunning(true);
    }
  };

  const handleStopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const handleResetTimer = () => {
    setStartTime(null);
    setElapsedTime(0);
    setIsRunning(false);
  };

  const handleTextChange = (lineIndex: number, newText: string) => {
    setTextLines((prevLines) =>
      prevLines.map((line, index) => (index === lineIndex - 1 ? newText : line))
    );
  };

  const handleAddCrewMember = () => {
    setTextLines((prevLines) => [...prevLines, '']);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - (startTime || 0));
      }, 1000);
    } else {
      clearInterval('interval');
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  //MM:SS time format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <div className="tab1-container ion-padding">
      {/* <div className="ion-text-center ion-margin-bottom"> */}
        {/* Container One */}
        <div className="ion-card objects-container">
          <div className="object-item ion-margin" onClick={() => handleObjectClick(1)}>
            <img
              src="src/pages/c17.jpg"
              alt="C-17"
              className="c17-image"
            />
          </div>
          <div className="object-item ion-margin" onClick={() => handleObjectClick(2)}>
            <img
                src="src/pages/c130.jpg"
                alt="C-130"
                className="c130-image"
              />
          </div>
          <div className="object-item ion-margin" onClick={() => handleObjectClick(3)}>
            <img
                src="src/pages/kc135.jpg"
                alt="KC-135"
                className="kc135-image"
              />
          </div>

          {/* <div className="object-item ion-margin">
            Object 4
          </div>
          <div className="object-item ion-margin">
            Object 5
          </div>
          <div className="object-item ion-margin">
            Object 6
          </div> */}

        </div>
      {/* </div> */}

      {/* Container Two and Container Three */}
      <div className="lower-container">
        <div className="ion-card timer-container">
          <h1 className="ion-text-center">Timer</h1>
            <div className="ion-text-center custom-font-size">
              {formatTime(elapsedTime)}
            </div>
            <div className="ion-padding">
            <div className="ion-text-center">
              <button onClick={handleStartTimer} className="button-css">Start</button>
              <button onClick={handleStopTimer} className="button-css" >Stop</button>
              <button onClick={handleResetTimer} className="button-css">Reset</button>
            </div>
            </div>
          </div>
          
          <div className="ion-card text-list-container ion-text-center ion-justify-content-center">
            {textLines.map((line, index) => (
              <div key={index} className="text-line-item">
                <input
                  value={line} onChange={(e) => handleTextChange(index + 1, e.target.value)}>
                </input>
              </div>
            ))}
          <div className="add-crewmember-button ion-padding">
            <button onClick={handleAddCrewMember} className="button-css">Add Crewmember</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;






// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './Tab1.css';


// const Tab1: React.FC = () => {
//   const history = useHistory();
//   const [textLines, setTextLines] = useState<string[]>(['MCD', '2FN', 'CMT', '2AET', '3AET']);
//   //Timer's states:
//   const [startTime, setStartTime] = useState<number | null>(null);
//   const [isRunning, setIsRunning] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);

//   const handleObjectClick = (objectId: number) => {
//     switch (objectId) {
//       case 1:
//         history.push('/c17');
//         break;
//       case 2:
//         history.push('/c130');
//         break;
//       case 3:
//         history.push('/kc135');
//         break;
//       default:
//         break;
//     }
//   };

//   const handleStartTimer = () => {
//     if (!isRunning) {
//       setStartTime(Date.now() - elapsedTime);
//       setIsRunning(true);
//     }
//   };

//   const handleStopTimer = () => {
//     if (isRunning) {
//       setIsRunning(false);
//     }
//   };

//   const handleResetTimer = () => {
//     setStartTime(null);
//     setElapsedTime(0);
//     setIsRunning(false);
//   };

//   const handleTextChange = (lineIndex: number, newText: string) => {
//     setTextLines((prevLines) =>
//       prevLines.map((line, index) => (index === lineIndex - 1 ? newText : line))
//     );
//   };

//   const handleAddCrewMember = () => {
//     setTextLines((prevLines) => [...prevLines, '']);
//   };

//   useEffect(() => {
//     let interval: NodeJS.Timeout;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setElapsedTime(Date.now() - (startTime || 0));
//       }, 1000);
//     } else {
//       clearInterval('interval');
//     }

//     return () => clearInterval(interval);
//   }, [isRunning, startTime]);

//   //MM:SS time format
//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60000);
//     const seconds = Math.floor((time % 60000) / 1000);
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   }

//   return (
//     <div className="tab1-container ion-padding">
//       {/* <div className="ion-text-center ion-margin-bottom"> */}
//         {/* Container One */}
//         <div className="ion-card objects-container">
//           <div className="object-item ion-margin" onClick={() => handleObjectClick(1)}>
//             <img
//               src="src/pages/c17.jpg"
//               alt="C-17"
//               className="c17-image"
//             />
//           </div>
//           <div className="object-item ion-margin" onClick={() => handleObjectClick(2)}>
//             <img
//                 src="src/pages/c130.jpg"
//                 alt="C-130"
//                 className="c130-image"
//               />
//           </div>
//           <div className="object-item ion-margin" onClick={() => handleObjectClick(3)}>
//             <img
//                 src="src/pages/kc135.jpg"
//                 alt="KC-135"
//                 className="kc135-image"
//               />
//           </div>

//           {/* <div className="object-item ion-margin">
//             Object 4
//           </div>
//           <div className="object-item ion-margin">
//             Object 5
//           </div>
//           <div className="object-item ion-margin">
//             Object 6
//           </div> */}

//         </div>
//       {/* </div> */}

//       {/* Container Two and Container Three */}
//       <div className="lower-container">
//         {/* <div className="ion-row"> */}
//           {/* <div className="ion-col ion-col-6 ion-margin-end"> */}
//             <div className="ion-card timer-container">
//               <h1 className="ion-text-center">Timer</h1>
//               <div className="ion-text-center">
//                 {formatTime(elapsedTime)}
//               </div>
//               <div className="ion-text-center ion-padding">
//                 <button className="ion-button ion-margin" onClick={handleStartTimer}>Start</button>
//                 <button className="ion-button ion-margin" onClick={handleStopTimer}>Stop</button>
//                 <button className="ion-button ion-margin" onClick={handleResetTimer}>Reset</button>
//               </div>
//             </div>
//           {/* </div> */}
//           <div className="ion-col ion-col-6">
//             <div className="ion-card text-list-container">
//               {textLines.map((line, index) => (
//                 <div key={index} className="text-line-item">
//                   <input
//                   value={line} onChange={(e) => handleTextChange(index + 1, e.target.value)}
//                   ></input>

//                 </div>
//               ))}
//               <div className="add-crewmember-button">
//                 <button onClick={handleAddCrewMember}>Add Crewmember</button>
//               </div>
//             </div>
//           </div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default Tab1;