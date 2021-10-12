import { Button, ButtonGroup, FormControl, InputAdornment, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

export default function Location() {

    return (
        <ServicesHolder class="d-flex" variant="outline-primary">
            <InfoOutlined style={{ marginBottom: '0.5em' }}></InfoOutlined>
            <div className="controlHolder">
                <FormControl size="small">
                    <ButtonGroup variant="outlined" aria-label="outlined button group" >
                        <Button className="tab-btn">Import</Button>
                        <Button className="tab-btn">Export</Button>
                    </ButtonGroup>
                </FormControl>
                <FormControl variant="outlined" size="small" className='control'>
                    <OutlinedInput
                        id="from"
                        placeholder="From City or port"
                        startAdornment={
                            <InputAdornment position="start">
                                <LocationOnIcon className="icon" />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl variant="outlined" size="small" className='control'>
                    <OutlinedInput
                        id="to"
                        placeholder="To City or port"
                        startAdornment={
                            <InputAdornment position="start">
                                <LocationOnIcon className="icon" />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl variant="outlined" size="small" className='control'>
                    <OutlinedInput

                        id="date"
                        placeholder="Ready Date"
                        startAdornment={
                            <InputAdornment position="start">
                                <DateRangeIcon className="icon"/>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl variant="outlined" size="small" className='control'>
                    <Select
                        value={''}
                        sx={{ width: '20em', innerHeight: '1em' }}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            Incoterms
                        </MenuItem>
                    </Select>
                </FormControl>

                <TextField id="outlined-basic" className="control" variant="outlined" placeholder="Total Cargo Value" size="small" />
            </div>
        </ServicesHolder>
    );
}


var ServicesHolder = styled.div`
    margin-top: 2em;
    padding: 2em;
    background-color: #fff;

        .tab-btn{
            height: 3em !important;
            lineHeight: 1;
        }

        .icon{
            width: 0.7em;
        }

        .controlHolder{
            display: flex;
            flex-wrap: wrap;
            gap: 1.5em;
            justify-content: flex-start;
        }

        .control{
            background-color: rgb(247, 247, 247);
            width: 12em
        }
`;

