import React from 'react';
import Form from './Form';
import Display from './Display';
import Description from './Description';

export default class App extends React.Component {
  state = {
    country: undefined,
    isoCode: undefined,
    rating: undefined,
    advice: undefined,
    error: undefined
  };

  getAdvice = async countryCode => {
    const api = await fetch(
      `https://www.travel-advisory.info/api?countrycode=${countryCode}`
    );
    const data = await api.json();
    const info = data.data[`${countryCode}`];
    if (info) {
      this.setState({
        country: info.name,
        isoCode: countryCode,
        rating: info.advisory.score,
        advice: info.advisory.message,
        error: undefined
      });
    } else {
      this.setState({
        country: undefined,
        isoCode: undefined,
        rating: undefined,
        advice: undefined,
        error: 'We have no advice to offer for this country'
      });
    }
  };

  handleChange = event => {
    event.preventDefault();
    const code = event.target.value;
    this.getAdvice(code);
  };

  render() {
    const { country, isoCode, rating, advice, error } = this.state;
    return (
      <div className="container">
        <div className="gtc">
          <div className="gtc-children">
            <Description />
          </div>
          <div className="gtc-children">
            <Form handleChange={this.handleChange} />
            <Display
              country={country}
              isoCode={isoCode}
              rating={rating}
              advice={advice}
              error={error}
            />
          </div>
        </div>
      </div>
    );
  }
}
