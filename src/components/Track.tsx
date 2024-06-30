import { TrackInfo } from "../types/track"

interface TrackProp {
  data : TrackInfo
}

const Track : React.FC<TrackProp>  = ({data}) => {
  return (
    <div>
      <img width={100} className="rounded cursor-pointer"  src={data.track_image} alt="track-img" />
      {/* {data.track_image} */}
    </div>
  )
}

export default Track
