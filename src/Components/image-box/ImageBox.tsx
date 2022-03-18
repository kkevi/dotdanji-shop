import clsx from "clsx"
import {CSSProperties} from "styled-components"
import useStyles from "./styles"

type Props = {
    width?: number | string
    height: number | string
    src: string
    brightness?: number
    hoverEffects?: boolean
    children?: React.ReactNode
    style?: CSSProperties
}

export default function ImageBox(props: Props) {
    const {width = "100%", height, src, brightness, hoverEffects = false, children, style} = props
    const classes = useStyles()

    return (
        <div className={classes.root} style={{...style, width: width, height: height}}>
            <img
                src={src}
                alt=""
                style={{filter: `brightness(${brightness})`}}
                className={clsx({[classes.image]: true, [classes.hover]: hoverEffects})}
            />
            {children}
        </div>
    )
}
