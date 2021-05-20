import React, {useState} from 'react';
import '../styles/Banner.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Banner({all}) {
    const [img, setImg ] = useState(0);
    const prev = (e) => {
        const imageBanner = document.querySelector('.banner__image');
        if(img === 0){
            setImg(3)
        }
        else{
            setImg(prev => prev - 1);
        }
    }
    const next = (e) => {
        const imageBanner = document.querySelector('.banner__image');
        if(img === 3){
            setImg(0);
        }
        else{
            setImg(prev => prev + 1);
        }
    }
    return (
        <div className="banner">
            <button  className="arrow left-a" onClick={prev}><ArrowBackIosIcon style={{fontSize: "40px"}}/></button>
            <img src={all[img].image} alt="" className="banner__image"/>
            <button  className="arrow right-a" onClick={next}><ArrowForwardIosIcon style={{fontSize: "40px"}}/></button>
        </div>
    )
}

export default Banner
