// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {
// not entirely sure why this is import React from 'react' and not import React, { Component }
// but clearly the distinction is important! 
// and the extends React.Component is distinct from import React, { Component }. Maybe has something to do with props?

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
            // initial state
            // this is the format you need
            // remember the key passes through the value to the other methods/functions/etc.
        }
    }

    render() {
        return(
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}

export default ImageSlider
// don't forget to export!