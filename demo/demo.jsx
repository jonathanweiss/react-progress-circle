import React from 'react';
import ProgressCircle from '../lib/index.js';

class Demo extends React.Component {
  constructor() {
    super();

    this.state = {
      backgroundColor: '#404040',
      color: '#339900',
      label: '%s%',
      labelColor: '#111111',
      labelSize: '16px',
      size: 100,
      status: 0,
    };
  }

  updateProp(propName, elementRef, callback) {
    let value = this.refs[elementRef].value;
    if (callback) {
      value = callback(value);
    }

    this.setState({ [propName]: value});
  }

  render() {
    const {backgroundColor, color, label, labelColor, labelSize, size, status} = this.state;

    return (
      <div>
        <div className="attribute">
          <label>Status</label>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue={this.state.status}
            ref="status"
            onChange={event => { this.updateProp('status', 'status') } }
          />
        </div>

        <div className="attribute">
          <label>Size</label>
          <input
            type="range"
            min="16"
            max="800"
            defaultValue={this.state.size}
            ref="size"
            onChange={event => { this.updateProp('size', 'size') } }
          />
        </div>

        <div className="attribute">
          <label>Label size</label>
          <input
            type="range"
            min="4"
            max="100"
            defaultValue={parseInt(this.state.labelSize, 10)}
            ref="labelSize"
            onChange={event => { this.updateProp('labelSize', 'labelSize', value => `${value}px`) } }
          />
        </div>

        <div className="attribute">
          <label>Label Text</label>
          <input
            type="text"
            defaultValue={this.state.label}
            ref="labelText"
            onChange={event => { this.updateProp('label', 'labelText') } }
          />
        </div>

        <div className="attribute">
          <label>Color</label>
          <input
            type="color"
            defaultValue={this.state.color}
            ref="color"
            onChange={event => { this.updateProp('color', 'color') } }
          />
        </div>

        <div className="attribute">
          <label>Background Color</label>
          <input
            type="color"
            defaultValue={this.state.backgroundColor}
            ref="backgroundColor"
            onChange={event => { this.updateProp('backgroundColor', 'backgroundColor') } }
          />
        </div>

        <div className="attribute">
          <label>Label color</label>
          <input
            type="color"
            defaultValue={this.state.labelColor}
            ref="labelColor"
            onChange={event => { this.updateProp('labelColor', 'labelColor') } }
          />
        </div>

        <ProgressCircle
          backgroundColor={backgroundColor}
          color={color}
          label={label}
          labelColor={labelColor}
          labelSize={labelSize}
          size={size}
          status={status}
        />
        </div>
      );
  }
}

export default Demo;
