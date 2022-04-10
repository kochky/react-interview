
import  React, {useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ClearIcon from '@mui/icons-material/Clear';
import GaugeChart from 'react-gauge-chart'
import { addLike, addDislike, deleteMovie } from "../constants/actions"
import { useSelector, useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
};

function ImgMediaCard (props) {
  const nodeRef = React.useRef(null)

  //Spécification pour épargner le render des autres cards si les likes changent (dans le cas si juste state choisi)
  const movie= useSelector(state=>state.data.find(el=>el.id===props.id))
  const likes= useSelector(state=>movie !==undefined && movie.likes)
  const dislikes= useSelector(state=>movie !==undefined && movie.dislikes)

  const dispatch = useDispatch()
  const [deletedCard,setDeletedCard]=useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //Calcule un pourcentage à afficher dans la jauge selon le nombre de like par rapport au nombre total des notes. Si il y a 0 note, le pourcentage sera de 50%
  const gaugePercent=()=>{
    if (movie.likes+movie.dislikes ===0){
      return 0.5
    }
    return movie.likes/(movie.likes+movie.dislikes)
  }
  //ferme la modale, lance l'animation de suppression, et supprime du state le movie
  function handleClickRemove(){
    handleClose()
    setDeletedCard(true)
    setTimeout(() => {dispatch(deleteMovie(props.id))},200)
  }

  return (
    <>
    {movie !==undefined ? (
    <CSSTransition
      nodeRef={nodeRef}
      in={!deletedCard}
      timeout={200}
      classNames="alert"
      unmountOnExit
    >
      <div ref={nodeRef}className='card-wrapper'>

        <Card id={props.id} className="card" sx={{ maxWidth: 345, maxHeight:355}}>
          <CardMedia
            component="img"
            alt="movie picture"
            height="140"
            image="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {movie.category}
            </Typography>
          </CardContent>
          <CardContent className="card__second-content">
            <GaugeChart
              animDelay={0}
              animate={true}
              id={props.id+' '+props.title}
              percent={gaugePercent()}
              nrOfLevels={3}
              colors={["#CF5C78", "#F5DF4D", "#00A0B0"]}
              hideText={true}
              style={{width:"150px"}}
            />
          </CardContent>
          <CardActions className='card__buttons-container'>
            <Button color="gray" size="small" onClick={handleOpen}><ClearIcon/>Supprimer</Button>
            {movie.disliked ? (<Button color="flop" size="small" onClick={()=>dispatch(addDislike(props.id))}><ThumbDownAltIcon fontSize="large" style={{marginRight:'5px'}} /> {movie.dislikes}</Button>):(<Button color="flop" size="small" onClick={()=>dispatch(addDislike(props.id))}><ThumbDownOffAltIcon style={{marginRight:'5px'}} /> {movie.dislikes}</Button> )}
            {movie.liked ? (<Button color="top"size="small" onClick={()=>dispatch(addLike(props.id))}><ThumbUpAltIcon fontSize="large" style={{marginRight:'5px'}}/>{movie.likes}</Button>): (<Button color="top"size="small" onClick={()=>dispatch(addLike(props.id))}><ThumbUpOffAltIcon  style={{marginRight:'5px'}}/>{movie.likes}</Button>)}

          </CardActions>
        </Card>
  
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box className="modal"sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Confirmer la suppression de "{movie.title}"
              </Typography>
              <div className="modal__buttons-container">
                <Button color="flop" size="small" onClick={handleClose}>Annuler</Button>
                <Button color="top" size="small" onClick={handleClickRemove}>Confirmer</Button>
              </div>
            </Box>
          </Fade>
        </Modal>        
      </div>
    </CSSTransition> ):("")}
    </>
  )
}

export default ImgMediaCard