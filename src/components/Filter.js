import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { filterMovie, noFilterEnable } from '../constants/actions';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Filter(){
    const dispatch = useDispatch()
    const props= useSelector(state=>state)

    const [filters,setFilters]=useState([])
    const [filterActivated, setFilterActivated] = useState([]);

    const handleChange = (event: SelectChangeEvent<typeof filterActivated>) => {
      const {
        target: { value },
      } = event;
      setFilterActivated(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    useEffect(() => {   
        dispatch(filterMovie(filterActivated))  
    }, [filterActivated])

    useEffect(() => {
        let allFilters=[]
        props.data.map(movie=>allFilters.push(movie.category))
        setFilters([...new Set(allFilters)]) 
    }, [props.data])

    useEffect(() => {
        let newFilterActivate=[]
        filterActivated.map(filter=>filters.includes(filter) && newFilterActivate.push(filter))
        {props.filteredData.length===0 && props.filterOn ? setTimeout(()=>{setFilterActivated(newFilterActivate)},4000): setFilterActivated(newFilterActivate)}
    }, [filters])
    
    
    
    
    return(
        <div className="container__filter">
            <div>
                <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel color="flop" id="demo-multiple-checkbox-label">Filtres</InputLabel>
                        <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={filterActivated}
                        onChange={handleChange}
                        input={<OutlinedInput label="Filtres" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        color="top"
                        >
                        {filters.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox color="top" checked={filterActivated.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                </div>
            </div>
        </div>
        )
}

export default Filter