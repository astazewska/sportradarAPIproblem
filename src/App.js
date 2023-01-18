import { useState } from 'react';

import Table from './components/table';

function App() {
  const [scores, setScores] = useState([]);

  async function fetchScores() {
    const response = await fetch('https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=qcgpq3fjksqavpwwu2kfhq7g', {
    method:"GET",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
    });
    const scoreData = await response.json();

     const resultsToDisplay = scoreData.schedules.map((sportEventData) => {
       return {
         teamNameHome: sportEventData.sport_event.competitors[0].name,
         teamNameAway: sportEventData.sport_event.competitors[1].name,
         scoreHome: sportEventData.schedules.sport_event_status.home_score,
         scoreAway: sportEventData.schedules.sport_event_status.away_score
       }
     });
     setScores(resultsToDisplay);
 }

   return (
     <div>
       <button onClick={fetchScores}>Fetch scores</button>
       <Table scores={scores}/>
     </div>
   );
 }

export default App;
