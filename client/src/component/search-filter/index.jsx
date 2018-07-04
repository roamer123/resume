import React from 'react'
import {Button, Icon, Input} from 'components'

export default class SearchFilter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filterVisible: false
    }
  }
  handleClick = () => {
    this.setState((state, props) => {
      return {
        filterVisible: !state.filterVisible
     }
})
  }
  render () {
    const { columns, data, className } = this.props

    return (
      <div className={className}>
        <Button onClick={this.handleClick}>
          <Icon type='left-circle-o' />
          {this.state.filterVisible ? '收起' : '筛选'}
        </Button>
      </div>
    )
  }
}
