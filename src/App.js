import React, { Component } from 'react';
import './App.css';
import Radios from './components/Radios';
import Flag from './components/Flag';
import AnswerStatus from './components/AnswerStatus';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateButtons = this.updateButtons.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      countries: [],
      fetched: false,
      ids: [],
      luckyId: null,
      flagUrl: null,
      showAnswer: false,
      answerStatus: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = 'https://restcountries.eu/rest/v2/all';

    fetch(url)
      .then(data => data.json())
      .then(data => {
        let countries = [],
            ids = [],
            luckyIndex,
            luckyId,
            flagUrl;

        for (let i = 0; i < 4; i++) {
          let randomIndex = Math.floor(Math.random() * data.length);

          // checks if all the values are unique
          if (ids.includes(randomIndex)) {
            while (ids.includes(randomIndex)) {
              randomIndex = Math.floor(Math.random() * data.length);
            }
          }

          ids.push(randomIndex);
          countries.push(data[randomIndex]);
        }

        // gets the winner country id
        luckyIndex = Math.floor(Math.random() * ids.length);
        luckyId = ids[luckyIndex];
        flagUrl = countries[luckyIndex].flag;

        this.updateButtons(countries, ids, luckyId, flagUrl);
      });
  }

  updateButtons(countries, ids, luckyId, flagUrl) {
    this.setState({countries, fetched: true, ids, luckyId, flagUrl});
  }

  checkAnswer(id) {
    id === this.state.luckyId ? this.setState({showAnswer: true, answerStatus: true}) : this.setState({showAnswer: true, answerStatus: false});
    this.reset();
  }

  reset() {
    setTimeout(() => {
      this.setState({
        countries: [],
        fetched: false,
        ids: [],
        luckyId: null,
        flagUrl: null,
        showAnswer: false,
        answerStatus: null
      });
      this.fetchData();
    }, 600);
  }

  render() {
    const load = <div style={{textAlign: 'center', marginTop: '40px'}}>Loading...</div>;

    return (
      <div className="App">
        <h1 className="app-title">Guess the flag</h1>
        {this.state.fetched ?
          <div>
            <Radios countries={this.state.countries} ids={this.state.ids} checkAnswer={this.checkAnswer} />
            <AnswerStatus show={this.state.showAnswer} status={this.state.answerStatus} />
            <Flag url={this.state.flagUrl} />
          </div> :
          load
        }
      </div>
    );
  }
}

export default App;
