
import  React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ClearIcon from '@mui/icons-material/Clear';
import GaugeChart from 'react-gauge-chart'
import { connect } from "react-redux";
import { addLike } from "../constants/actions"
import { useSelector } from 'react-redux'

function ImgMediaCard (state) {

  //Calcule un pourcentage à afficher dans la jauge selon le nombre de like par rapport au nombre total des notes. Si il y a 0 note, le pourcentage sera de 50%
  const gaugePercent=()=>{
    if (state.data.likes+state.data.dislikes ===0){
      return 0.5
    }
    return state.data.likes/(state.data.likes+state.data.dislikes)
  }
  
  return (
    <div className='card-wrapper'>
      <Card id={state.data.id} className="card" sx={{ maxWidth: 345, maxHeight:345}}>
        <CardMedia
          component="img"
          alt="movie picture"
          height="140"
          image="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {state.data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {state.data.category}
          </Typography>
        </CardContent>
        <CardContent className="card__second-content">
          <GaugeChart
            animate={false}
            id={state.data.id+' '+state.data.title}
            percent={gaugePercent()}
            nrOfLevels={3}
            colors={["#CF5C78", "#F5DF4D", "#00A0B0"]}
            hideText={true}
            style={{width:"150px"}}
          />
        </CardContent>
        <CardActions className='card__buttons-container'>
          <Button color="top"size="small" onClick={()=>state.incrementLike(state.data.id)}><ThumbUpIcon/>{state.data.likes}</Button>
          <Button color="flop" size="small"><ThumbDownIcon/>{state.data.dislikes}</Button>
          <Button color="gray" size="small"><ClearIcon/>Supprimer</Button>
        </CardActions>
      </Card>
      
    </div>
  );
}
const mapStateToProps= function(state,props) { 
  return {
    state,
    }
}

const mapDispatchToProps= dispatch=>{
  return {
    incrementLike:(id)=>dispatch(addLike(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImgMediaCard)