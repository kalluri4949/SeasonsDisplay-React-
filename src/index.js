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
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
    return <div>Latitude:</div>;
  }
}
ReactDom.render(<App />, document.querySelector('#root'));
