import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (success) => {
//       console.log(success);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//   return <div>Hi there</div>;
// };
class App extends React.Component {
  state = {
    lat: null,
    errorMsg: '',
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMsg: error.message });
      }
    );
  }
  renderContent() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error:{this.state.errorMsg}</div>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return (
      <div>
        <Spinner message="Please accept the Location" />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
ReactDom.render(<App />, document.querySelector('#root'));
