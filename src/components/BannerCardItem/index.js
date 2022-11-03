// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  console.log(bannerCardsList)
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={`${className} bg-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <br />
        <button type="button" className="btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
