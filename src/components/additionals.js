import { Stack } from '@mui/material';
import styled from 'styled-components';
import Switch from './switch';

export default function Additional() {
    return (
        <ServicesHolder class="d-flex" variant="outline-primary">
            <div className="titleHolder">
                <h5>Additional Services</h5>
            </div>
            <div className="options-holder">
                <Stack direction="row"
                    justifyContent="start"
                    alignItems="center"
                    spacing={2}>
                    <Switch ></Switch>
                    <div className="details-holder">
                        <h6>Export Forwarding</h6>
                        <p>We handle customs clearance and delivery</p>
                    </div>
                </Stack>
                <Stack direction="row"
                    justifyContent="start"
                    alignItems="center"
                    spacing={2}>
                    <Switch ></Switch>
                    <div className="details-holder">
                        <h6>Export Forwarding</h6>
                        <p>We handle customs clearance and delivery</p>
                    </div>
                </Stack>
                <Stack direction="row"
                    justifyContent="start"
                    alignItems="center"
                    spacing={2}>
                    <Switch ></Switch>
                    <div className="details-holder">
                        <h6>Export Forwarding</h6>
                        <p>We handle customs clearance and delivery</p>
                    </div>
                </Stack>
                <Stack direction="row"
                    justifyContent="start"
                    alignItems="center"
                    spacing={2}>
                    <Switch ></Switch>
                    <div className="details-holder">
                        <h6>Export Forwarding</h6>
                        <p>We handle customs clearance and delivery</p>
                    </div>
                </Stack>
            </div>
        </ServicesHolder>
    );
}

var ServicesHolder = styled.div`
    padding: 2em;
    margin-top: 2em;
    background-color: #fff;

        .details-holder{
            h6{
                margin: 0.2em;
            }
        }

        .options-holder{
            display: flex;
            flex-wrap: wrap;
            gap: 2em;
            justify-content: space-between;
            margin-top: 1.2em;
        }

        
        .titleHolder{
            h5{
                margin: 0;
                margin-bottom: 1em;
            }
        }

        p{
            font-size: 0.8em;
            color: #929292;
            margin: 0;
        }
`;

