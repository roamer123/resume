import React from 'react'
import PropTypes from 'prop-types'
import Joyride from 'react-joyride'
import {
  ACTIONS,
  EVENTS
} from 'react-joyride/es/constants'

export default class Guid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      continuous: true,
      run: true,
      stepIndex: 0,
      tooltipOptions: {
        wrapperOptions: {
          offset: -5
        }
      },
      guidSteps: props.guidSteps
    }
  }
  static propTypes = {
    joyride: PropTypes.shape({callback: PropTypes.func})
  };

  static defaultProps = {
    joyride: {}
  };

  componentDidMount() {
    // @guid
    this.setState({
      run: true
    });
  }
  handleJoyrideCallback = data => {
    const {joyride} = this.props;
    const {action, index, type} = data;
    let stepIndex = this.state.stepIndex;

    if (type === EVENTS.STEP_AFTER) {
      // Update state to advance the tour
      stepIndex = index + (action === ACTIONS.PREV
        ? -1
        : 1);
    } else if (type === EVENTS.TOOLTIP_CLOSE) {
      stepIndex = index + 1;
    } else if (type === EVENTS.TARGET_NOT_FOUND) {
      stepIndex = index + (action === ACTIONS.PREV
        ? -1
        : 1);
    }

    this.setState({stepIndex});

    if (typeof joyride.callback === 'function') {
      joyride.callback(data);
    } else {
      console.group(type);
      console.log(data); // eslint-disable-line no-console
      console.groupEnd();
    }
  };
  handleClickStart = e => {
    e.preventDefault();

    this.setState({
      run: true,
      stepIndex: 0
    });
  };

  handleClickNextButton = () => {
    const {
      stepIndex
    } = this.state;

    if (this.state.stepIndex === 1) {
      this.setState({
        stepIndex: stepIndex + 1
      });
    }
  };
  render () {
    const {
      guidSteps,
      run,
      continuous,
      stepIndex,
      tooltipOptions,
    } = this.state
    return (
      <Joyride
        scrollToFirstStep
        continuous={continuous}
        showProgress
        showSkipButton
        steps={guidSteps}
        run={run}
        stepIndex={stepIndex}
        tooltipOptions={tooltipOptions}
        callback={this.handleJoyrideCallback}
        styles={{
              options: {
                primaryColor: '#0bb27a',
                overlayColor: '#333'
              }
        }}
        locale={{
            back: '上一步',
            close: '关闭',
            last: '结束',
            next: '下一步',
            open: '开始',
            skip: '跳过'
        }}
        />
    )
  }
}
