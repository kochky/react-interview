import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';


function Loading(){

    return(
        Array.from(new Array(6)) : data).map((item, index) => (
            <Box className="card" key={index} sx={{ width:345, height:345, margin:0 }}>
                <Skeleton variant="rectangular" width={345} height={140} />
                <Skeleton variant="rectangular" width={345} height={140} />
                <Box sx={{height:65}}>
                    <Skeleton height={65}/>
                </Box>
            </Box>
        )
    )
}

export default Loading