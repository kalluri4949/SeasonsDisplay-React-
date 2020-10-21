import React from 'react';
import ReactDom from 'react-dom';

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
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMsg: '' };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMsg: error.message });
      }
    );
  }
  componentDidMount() {
    console.log('component did mount called');
  }
  componentDidUpdate() {
    console.log('component did update called');
  }
  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error:{this.state.errorMsg}</div>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return <div>Latitude:{this.state.lat}</div>;
    }
    return <div>Loading..</div>;
  }
}
ReactDom.render(<App />, document.querySelector('#root'));
