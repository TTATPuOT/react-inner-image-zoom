import React, { Component } from 'react';
import { render } from 'react-dom';
import InnerImageZoom from '../../src';
import '../../src/InnerImageZoom/styles.css';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-inner-image-zoom Demo</h1>
        <div style={{ marginBottom: '30px' }}>
          <h2>Pan Example</h2>
          <InnerImageZoom src="unsplash.jpg" zoomSrc="unsplash-large.jpg" fullscreenOnMobile={true} />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <h2>Hover Example</h2>
          <InnerImageZoom src="unsplash2.jpg" zoomSrc="unsplash2-large.jpg" zoomType="hover" />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <h2>Drag Example</h2>
          <InnerImageZoom src="unsplash2.jpg" zoomSrc="unsplash2-large.jpg" fullscreenOnMobile={true} moveType="drag" />
        </div>
      </div>
    );
  }
}

render(
  <Demo />,
  document.querySelector('#demo')
);
