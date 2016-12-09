import React from 'react';
import ProgressCircle from '../lib/index';

const defaultValues = {
  backgroundColor: '#404040',
  color: '#339900',
  label: '%s%',
  labelColor: '#111111',
  labelSize: '16px',
  size: 100,
  status: 0,
};

class Demo extends React.Component { // eslint-disable-line
  constructor() {
    super();

    this.state = Object.assign({}, defaultValues); // eslint-disable-line
    this.lastUpdated = '';
  }

  updateProp(propName, elementRef, callback) {
    let value = this.refs[elementRef].value; // eslint-disable-line
    if (callback) {
      value = callback(value);
    }

    this.lastUpdated = propName;
    this.setState({ [propName]: value });
  }

  displayProp(key) {
    return (
      <pre
        key={key}
        className={this.lastUpdated === key ? 'updated' : ''}
      >
        {`  ${key}="${this.state[key]}"`}
      </pre>
    );
  }

  displayConfiguration(modifiedProps) {
    let result = '';

    if (modifiedProps.length === 0) {
      result = <pre>{'<ProgressCircle />'}</pre>;
    } else {
      result = (
        <div>
          <pre>{'<ProgressCircle'}</pre>
          { modifiedProps.map(key => this.displayProp(key)) }
          <pre>{'/>'}</pre>
        </div>
      );
    }

    return result;
  }

  renderPropEntry(type, name, key, onChange, min, max, forceNumber = false) {
    return (
      <div className="prop-container" key={key}>
        <label htmlFor={key}>{name}</label>
        { type === 'range' ?
          <input
            id={key}
            type={type}
            min={min}
            max={max}
            defaultValue={forceNumber ? parseInt(this.state[key], 10) : this.state[key]}
            ref={key}
            onChange={onChange}
          /> :
          <input
            id={key}
            type={type}
            defaultValue={this.state[key]}
            ref={key}
            onChange={onChange}
          />
        }
      </div>
    );
  }

  render() {
    const { backgroundColor, color, label, labelColor, labelSize, size, status } = this.state;
    const modifiedProps = Object.keys(this.state).filter(key => this.state[key] !== defaultValues[key]);
    const propEditors = [
      this.renderPropEntry('range', 'Status', 'status', () => { this.updateProp('status', 'status'); }, 0, 100),
      this.renderPropEntry('range', 'Size', 'size', () => { this.updateProp('size', 'size'); }, 16, 800),
      this.renderPropEntry('range', 'Label size', 'labelSize', () => this.updateProp('labelSize', 'labelSize', value => `${value}px`), 4, 100, true),
      this.renderPropEntry('text', 'Label text', 'label', () => this.updateProp('label', 'label')),
      this.renderPropEntry('color', 'Color', 'color', () => this.updateProp('color', 'color')),
      this.renderPropEntry('color', 'Background color', 'backgroundColor', () => this.updateProp('backgroundColor', 'backgroundColor')),
      this.renderPropEntry('color', 'Label color', 'labelColor', () => this.updateProp('labelColor', 'labelColor')),
    ];

    return (
      <div className="main">
        <div className="props">
          <h2>Props</h2>
          { propEditors }
        </div>

        <div className="preview">
          <h2>Preview</h2>
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

        <div className="configuration">
          <h2>Configuration</h2>
          { this.displayConfiguration(modifiedProps) }
        </div>
      </div>
    );
  }
}

export default Demo;
