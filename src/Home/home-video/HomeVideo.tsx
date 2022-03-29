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
                url="https://youtu.be/Lo8NiyPMn98"
                onError={() => console.log("Video Load Failed")}
            />
        </div>
    )
}
