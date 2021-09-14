import React from 'react';

const App = () => {
  return(
    <div className="container">
      <div className="valid-keys">
        <span className="matched">Die</span>
        <span className="remainder">go</span>
      </div>
      <div className="typed-keys">asdfsadf</div>
      <div className="completed-words">
        <ol>
          <li>asdjfhaksljdhf</li>
          <li>sdfgsdfgsdfg</li>
          <li>sdfgsdf</li>
        </ol>
      </div>
    </div>
  );
}

export default App;