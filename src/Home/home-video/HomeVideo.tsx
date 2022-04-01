import React from "react"
import ReactPlayer from "react-player"

export default function HomeVideo() {
    return (
        <div>
            <ReactPlayer
                playing
                loop
                volume={0}
                muted
                width={800}
                height={450}
                light={false}
                url="https://youtu.be/5_qpqZCJDPo"
                onError={() => console.log("Video Load Failed")}
            />
        </div>
    )
}
