import React, {Fragment, useEffect} from "react"
import {Container, Stack, useTheme, useMediaQuery} from "@mui/material"
import {Link, Element} from "react-scroll"

import useStyles from "./style"

import ExtraInformation from "./ExtraInformation"

type Props = {
    infoHtml: string
    mobile?: boolean
}

export default function ExtraInformationModule(props: Props) {
    const {infoHtml, mobile} = props
    const classes = useStyles()
    const tabs: string[] = ["상품상세정보", "배송/교환 및 반품안내"]

    return (
        <Container maxWidth="md">
            <Stack
                className={classes.tabWrapper}
                sx={{
                    top: mobile ? 60 : 76,
                    my: mobile ? 3 : 6,
                }}
            >
                {tabs.map((tabName, index) => (
                    <Fragment key={"link" + index}>
                        <Link
                            activeClass={classes.active}
                            className={classes.tab}
                            to={`move${index}`}
                            spy
                            smooth
                            offset={-150}
                            duration={500}
                        >
                            {tabName}
                        </Link>
                        {!(tabs.length - 1 === index) && <div className={classes.bar} />}
                    </Fragment>
                ))}
            </Stack>

            <Element name="move0" className="element">
                <Stack minHeight="200vh">
                    <div dangerouslySetInnerHTML={{__html: infoHtml}} className={classes.htmlContainer} />
                </Stack>
            </Element>
            <Element name="move1" className="element">
                <ExtraInformation />
            </Element>
        </Container>
    )
}
