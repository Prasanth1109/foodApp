import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../SouthIndianFoods/SouthIndianFood.scss';

export default function ProductCard(props:any) {
    const {title, image01, price, desc} = props.item;
  return (
    <div>
      <div>
      {/* <div className="product__price">
        <span className='unitName'>₹</span><span className='num'>{price}</span></div> */}
        <div className='card-data'>
          <div className='image-class'>
            <img  src={image01}/>
          </div>
          <div>
            <h5 className="foodName">{title}</h5>
              <p className='desc'>{desc}</p></div>
          </div>
          <div className='addcart'><AddIcon className='addicon'/></div>         
        </div>  
        
    </div>
  )
}
