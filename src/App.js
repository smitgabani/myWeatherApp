import { useEffect } from "react";

function App() {
    if (
      process.env.REACT_APP_API_KEY_APPID === undefined ||
      process.env.REACT_APP_API_KEY_UNSPLASH === undefined
    ) {
      return (
        <h4>
          Please add .env and add follow REACT_APP_API_KEY_APPID &
          REACT_APP_API_KEY_UNSPLASH in the .env file
        </h4>
      );
    }  else {
      return (
        <div className="App">
          <h4>The apis are configured</h4>
        </div>
      )
    }
}

export default App;
