import React from 'react';
import ProgressCircle from '../lib/index.js';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <ProgressCircle status={99} />
            </div>
        );
    }
}

export default Demo;
