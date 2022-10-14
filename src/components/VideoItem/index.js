import {Link} from 'react-router-dom'
import {FontColorDiv} from './styledComponents'
import './index.css'

const VideoItem = props => {
  const {each, isTheme} = props
  const {
    id,
    publishedAt,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
  } = each
  console.log(isTheme)
  return (
    <FontColorDiv outline={isTheme}>
      <Link to={`/videos/${id}`} className="link-item">
        <li className="cardDiv">
          <img src={thumbnailUrl} className="img8" alt="video thumbnail" />
          <div className="cardDiv5">
            <img src={profileImageUrl} className="img9" alt="channel logo" />
            <div className="cardDiv3">
              <p className="p3">{title} </p>
              <p className="p3">{name}</p>
              <div className="cardDiv4">
                <p className="p4">{viewCount}</p>
                <p className="p4">. {publishedAt}</p>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </FontColorDiv>
  )
}
export default VideoItem
