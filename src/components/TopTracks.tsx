import { topTracks } from "../data"
import Track from "./Track"

const TopTracks = () => {
  return (
    <div>
      <h1 className="mb-3 ml-5 text-xl ">Top Tracks</h1>
      <div className="grid grid-cols-2  gap-2 grid-flow-row ml-5 ">
        {
          topTracks.map((track,index)=>{
            return <Track key={index} data={track} />
          })
        }
      </div>
      
    </div>
  )
}

export default TopTracks
