import React from "react"
import {Container, Stack, Typography} from "@mui/material"
import {Link, Element} from "react-scroll"

import useStyles from "./style"

import ExtraInformation from "./ExtraInformation"

type Props = {
    infoHtml: string
}

export default function ExtraInformationModule(props: Props) {
    const {infoHtml} = props
    const classes = useStyles()
    const tabs: string[] = ["상품상세정보", "배송/교환 및 반품안내"]

    return (
        <Container maxWidth="md" sx={{backgroundColor: "white"}}>
            <Stack className={classes.tabWrapper} my={6}>
                {tabs.map((tabName, index) => (
                    <>
                        <Link
                            key={"link" + index}
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
                        {!(tabs.length - 1 === index) && <div className={classes.bar} key={"bar" + index} />}
                    </>
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
