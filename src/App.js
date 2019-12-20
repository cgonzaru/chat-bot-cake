import React from 'react';
import ChatBot from './components/ChatBot';
import chessecake from './images/chessecake.jpeg';
import coffe from './images/coffe.jpeg';
import banana from './images/banana.jpeg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cake: [
        'chesse cake',
        'latte coffe',
        'banana toffee',
        'sugar donut',
        'chocolate muffin',
        'strawberry cookie',
        'carrot cake'
      ]
    }

  }

  componentDidMount() {
    /* fetch('https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery')
      .then(response => response.json())
      .then(data => {
        console.log(data)
         this.setState({
          cake: data
        }) 
      }) */
  }

  generateRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  render() {
    let myRandomNumber = this.generateRandomNumber(6);
    const result = this.state.cake[myRandomNumber];
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="title">Cristina's Bakery</h1>
        </header>

        <main className="app-main">
          <div className="container section">
            <div className="row">
              <div className="col s12">
                <div className="carousel carousel-slider">
                  <a href="#" className="carousel-item"><img src={chessecake} alt="chessecake"/></a>
                  <a href="#" className="carousel-item"><img src={coffe} alt="coffe"/></a>
                  <a href="#" className="carousel-item"><img src={banana} alt="banana"/></a>
                </div>
              </div>
            </div>
          </div>
          <ChatBot
            result={result}
          />
        </main>

      </div>
    );
  }
}

export default App;
