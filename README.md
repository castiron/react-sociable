# Simple social sharing buttons as react components.

For example:

```
import React from 'react';
import Sociable from 'react-sociable';

class Example extends React.Component {

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
```

____
### Credit
This module is heavily inspired by the [react-social-share module](https://github.com/gsuveti/react-social). It takes a similar approach, opting for higher order components and ES2015 syntax rather than mixins. As such, it should be compatible with React 15.5 and up.