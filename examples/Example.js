import React from 'react';
import Sociable from '../src/index';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    const url = window.location.href;
    const msg = "Share it like you've never shared before!";

    return (
      <div>
         <Sociable.FacebookButton
            url={url}
            message={msg}
            windowOptions={["", "", "width=600,height=300"]}
            appId="233201753822876"
          >
            {'Facebook'}
          </Sociable.FacebookButton> 
         <Sociable.TwitterButton
            url={url}
            message={msg}
            windowOptions={["", "", "width=600,height=300"]}
          >
            {'Twitter'}
          </Sociable.TwitterButton> 
         <Sociable.EmailButton
            url={url}
            message={msg}
          >
            {'Email'}
          </Sociable.EmailButton> 
         <Sociable.PinterestButton
            url={url}
            message={msg}
            media="some/path/to/file"
          >
            {'Pinterest'}
          </Sociable.PinterestButton> 
         <Sociable.GooglePlusButton
            url={url}
          >
            {'Google Plus'}
          </Sociable.GooglePlusButton> 
      </div>
    )
  }
}

export default Example;