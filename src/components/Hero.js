
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Hero(){

    return (
        <div className="hero">
            <Card variant="outlined" className="hero__techno" sx={{ maxWidth: 345 }}>
                <CardContent> 
                <p>Créé avec :</p>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Sass</li>
                </ul>
                </CardContent>
            </Card>
          
        </div>
    )

}

export default Hero