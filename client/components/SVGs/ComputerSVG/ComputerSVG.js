import React, { Component } from 'react';

// import styles from './ComputerSVG.css';
import svgStyles from '../SvgStyles.css';

const ComputerSVG = props => {
  let svgStyle = `pure-u-1 ${svgStyles.small}`;
  return (
    <div className={svgStyle}>
      <svg
        height="100%"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinecap: 'square',
          strokeMiterlimit: '1.5'
        }}
        width="100%"
        version="1.1"
        viewBox="0 0 1280 800"
        xmlSpace="preserve"
      >
        <g>
          <path
            style={{ fill: '#262626' }}
            d="M1272.25,798.562l-1264.5,0l0,-797.124l1264.5,0l0,797.124Zm-1260.5,-793.124l0,789.124l1256.5,0l0,-789.124l-1256.5,0Z"
          />
          <path
            style={{ fill: '#262626' }}
            d="M9.75,3.438l1260.5,0l0,48.559l-1260.5,0l0,-48.559Zm27.314,12.14c6.7,0 12.14,5.439 12.14,12.139c0,6.701 -5.44,12.14 -12.14,12.14c-6.7,0 -12.139,-5.439 -12.139,-12.14c0,-6.7 5.439,-12.139 12.139,-12.139Zm58.675,0c6.7,0 12.14,5.439 12.14,12.139c0,6.701 -5.44,12.14 -12.14,12.14c-6.7,0 -12.139,-5.439 -12.139,-12.14c0,-6.7 5.439,-12.139 12.139,-12.139Zm-29.337,0c6.7,0 12.139,5.439 12.139,12.139c0,6.701 -5.439,12.14 -12.139,12.14c-6.7,0 -12.14,-5.439 -12.14,-12.14c0,-6.7 5.44,-12.139 12.14,-12.139Z"
          />
          <g transform="matrix(4.86609,0,0,4.86609,-870.549,-1016.12)">
            <path
              style={{ fill: 'none' }}
              d="M239.123,294.405l0,-6.184l35.742,-15.092l0,6.589l-28.344,11.632l28.344,11.742l0,6.589l-35.742,-15.276Z"
            />
            <path
              style={{ fill: 'none' }}
              d="M320.914,318.92l15.644,-55.803l5.301,0l-15.607,55.803l-5.338,0Z"
            />
            <path
              style={{ fill: 'none' }}
              d="M381.724,294.405l-35.742,15.276l0,-6.589l28.306,-11.742l-28.306,-11.632l0,-6.589l35.742,15.092l0,6.184Z"
            />
            <path
              style={{ fill: '#262626', fillRule: 'nonzero' }}
              d="M239.123,294.405l0,-6.184l35.742,-15.092l0,6.589l-28.344,11.632l28.344,11.742l0,6.589l-35.742,-15.276Z"
            />
            <path
              style={{ fill: '#262626', fillRule: 'nonzero' }}
              d="M320.914,318.92l15.644,-55.803l5.301,0l-15.607,55.803l-5.338,0Z"
            />
            <path
              style={{ fill: '#262626', fillRule: 'nonzero' }}
              d="M381.724,294.405l-35.742,15.276l0,-6.589l28.306,-11.742l-28.306,-11.632l0,-6.589l35.742,15.092l0,6.184Z"
            />
          </g>
          <rect
            height="28.326"
            style={{ fill: '#262626', stroke: '#262626', strokeWidth: '1px' }}
            width="101.164"
            x="548.953"
            y="472.838"
          />
        </g>
      </svg>
    </div>
  );
};

export default ComputerSVG;
