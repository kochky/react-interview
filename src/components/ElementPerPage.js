import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux'
import { numberOfElementsPerPage}  from '../constants/actions'

function ElementsPerPage(){
    const props= useSelector(state=>state)
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(numberOfElementsPerPage(event.target.value))
      };

    return(
        <Box className="container__inputs__elements-per-page"sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel color="flop" id="demo-simple-select-label">Films par page</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.elementsPerPage}
                label="Films par page"
                onChange={handleChange}
                color="top"
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default ElementsPerPage