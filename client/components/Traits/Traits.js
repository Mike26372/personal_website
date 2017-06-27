import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import styles from './Traits.css';
import HighlightSub from '../HighlightSub/HighlightSub.js';

class Traits extends Component {
  constructor() {
    super();
  }

  componentWillEnter(cb) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: cb});
  }

  componentWillLeave(cb) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: cb});
  }

  render() {

    let rowsStyle = `pure-g ${styles.rows}`;

    return (
      <section className={styles.container} ref={ c => this.container = c }>
        <div className={styles.content}>
          <div className={rowsStyle}>
            <HighlightSub />
          </div>
        </div>
      </section>
    );
  }
}

export default Traits;