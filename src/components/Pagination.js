import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { setCurrentPage } from '../constants/actions';

function PaginationMovie({scrollToElement}){
    const props= useSelector(state=>state)
    const dispatch = useDispatch()
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value))
        scrollToElement()
      };
    return(
        <div className='pagination-container'>
                <Stack spacing={2}>
                    <Pagination color="top" count={props.numberOfPages} variant="outlined" page={props.currentPage} onChange={handleChangePage}shape="rounded" />
                </Stack>
        </div>
    )

}

export default PaginationMovie