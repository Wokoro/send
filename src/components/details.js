import { InputAdornment, Stack, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from 'styled-components';
import Switch from './switch';

export default function Details() {
    return (
        <ServicesHolder class="d-flex" variant="outline-primary">
            <Stack className="titleHolder" spacing={{sm: 1, md: 4}} sx={{mb: 2}} direction="row">
                <h5>Cargo Details</h5>
                <Stack direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}>
                    <Switch defaultChecked ></Switch>
                    <p>Dangerous Cargo(ex. Chemicals, Battery)</p>
                </Stack >
            </Stack>
            <div>
                <ToggleButtonGroup
                    color="primary"
                    value={''}
                    exclusive
                    size="small"
                    className="toggleBtnHolder"
                >
                    <ToggleButton value="web" className={{"active": true, "tab-btn": true}}>Total Dimensions</ToggleButton>
                    <ToggleButton value="android" className={{ "no-border": true, "tab-btn": true }} disabled>Package Details</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <Stack direction="row"
                justifyContent="start"
                alignItems="center"
                spacing={2}
                sx={{mt: 5}}>
                <TextField
                    label="Total Volume"
                    id="total_volume"
                    sx={{ width: '25ch' }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">cbm</InputAdornment>,
                    }}
                    size="small"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Total Weight"
                    id="total_weight"
                    sx={{ width: '25ch' }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    }}
                    size="small"
                    InputLabelProps={{ shrink: true }}
                />
            </Stack>

        </ServicesHolder>
    );
}

var ServicesHolder = styled.div`
    padding: 2em;
    margin-top: 2em;
    background-color: #fff;

        .tab-btn{
            height: 2.5em;
        }

        .toggleBtnHolder{
            border: 1px solid rgba(0, 0, 0, 0.12);
            padding: 0.2em;
            background-color: #f7f7f7;
        }

        .active{
            border: none;
            box-shadow: rgb(0 0 0 / 16%) 0px 0px 3px;
            background-color: #fff;
            border-radius: 4px;
            font-size: 0.7em;
            color: #0746a6;
        }

        .no-border{
            border: none;
            font-size: 0.7em;
        }

        .titleHolder{
            display: flex;
            justify-content: space-between;

            h5{
                margin: 0;
            }
        }

        h5{
            margin-bottom: 2em;
        }

        p{
            margin: 0;
            font-size: 0.9em
        }
`;

