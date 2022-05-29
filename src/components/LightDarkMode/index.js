// Write your code here
import Component from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttons = isDarkMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="mode-bg-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click to Change mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttons}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
