import React, { Component } from 'react';
import styles from './index.less';
import video from '../static/1.mp4'

class Index extends Component {
  state = {
  };
  componentDidMount() {
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className={styles.container}>
        {/* <video className={styles.myVideo} src={video} muted autoplay loop></video> */}
        <video className={styles.myVideo}  muted autoplay loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}
export default Index;
