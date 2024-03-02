// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
}

const onClickTabBtn = () => {
  updateActiveTabId(tabId)
}

const activeClassName = isActive ? 'active-tab-item' : ''

return (
  <li className="tab-item-container">
    <button
      type="button"
      className={`tab-btn ${activeClassName}`}
      onClick={onClickTabBtn}
    >
      {displayText}
    </button>
  </li>
)
export default TabItem
