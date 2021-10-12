import styled from 'styled-components';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import { Stack } from '@mui/material';

export default function Services() {
    return (
        <ServicesHolder class="d-flex" variant="outline-primary">
            <h5>Select Service</h5>
            <Stack className="service-wrapper" direction="row" flex-wrap sx={{ flexWrap: 'wrap', gap: '20px' }}>
                <div className="service dark-bg">
                    <p>Air Freight</p>
                    <AirplanemodeActiveIcon className="icon" style={{ color: '#fff' }} />
                </div>
                <div className="service">
                    <p>Sea Freight</p>
                    <DirectionsBoatFilledIcon className="icon" />
                </div>
                <div className="service">
                    <p>Inland <br />(Truck and Barge)</p>
                    <LocalShippingIcon className="icon"/>
                </div>
                <div className="service">
                    <p>Customs <br />Clearance</p>
                    <PersonIcon className="icon"/>
                </div>
            </Stack>
        </ServicesHolder>
    );
}

var ServicesHolder = styled.div`
    padding: 2em;
    background-color: #fff;

        .service-wrapper{
           display: flex;
           justify-content: space-between;
        }

        h5{
            margin-bottom: 2em;
            margin-top:0;
        }

        .dark-bg{
            background-color: #0747a6;
            color: #ffff;
        }

        .service {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
            height: 4em;
            width: 10em;
            position: relative;
            padding: 0 0.55em;
            border: 1px solid rgba(0, 0, 0, 0.37);
            border-radius: 2px;
            font-size: 0.9em;
        }

        p{
            margin: 0;
        }

        .icon{
            width: 30%;
            max-width: 50px;
            position: absolute;
            right: -10px;
            top: 20px;
            height: 2em;
            color: #99999b;
        }
`;

