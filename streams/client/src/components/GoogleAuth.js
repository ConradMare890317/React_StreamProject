import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '375160563385-9l1fdp0b470a3549cqv9bs71h27kgiab.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
