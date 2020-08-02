import React from 'react';
import Header from './Header';

class SongBird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <Header score={0} />
        <main className="main">
          
        </main>
      </div>
    );
  }
}

export default SongBird;
