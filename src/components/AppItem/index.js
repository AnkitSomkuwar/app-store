import './index.css'

const TabItem = props => {
  const {tabDetails, onClickupdateTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabBtn = () => {
    onClickupdateTab(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''

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
}
export default TabItem

