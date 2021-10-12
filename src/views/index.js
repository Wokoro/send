import InAppNav from "../components/navigation";
import Services from "../components/services";
import Location from '../components/location'
import Details from "../components/details";
import Additional from '../components/additionals';

import styled from "styled-components";
import { ArrowBack } from "@mui/icons-material";
import { Stack } from "@mui/material";

export default function BookingView(props) {
    return (
        <>
            <Stack direction="row">
                <Wrapper>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconHolder style={{ display: 'absolute' }}><ArrowBack style={{ fontSize: '1.5em' }} /></IconHolder>
                        <InAppNav></InAppNav>
                    </div>
                    <Services></Services>
                    <Location></Location>
                    <Details></Details>
                    <Additional></Additional>
                </Wrapper>
            </Stack>
        </>
    )
}

var Wrapper = styled.div`
    padding: 0px 8%;
    max-width: 870px;
    margin: auto;
`;

var IconHolder = styled.div`
    cursor: pointer;
    width: 4.5em;
    margin-left: -4.5em;
`;