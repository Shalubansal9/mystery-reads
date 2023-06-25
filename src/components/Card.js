import React, { useState } from 'react'
import Bookdesc from './Bookdesc';

const Card = ({ book }) => {
  //console.log(book);
const  [show, setShow] = useState(false);
const [bookitem, setBookitem] = useState();
  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount= item.saleInfo.listPrice && item.saleInfo.listPrice.amount; 
          if (thumbnail != undefined && amount != undefined) {
            return (
              <>
                <div className="card" >
                  <img src={thumbnail} alt='book' onClick={()=>{setShow(true);setBookitem(item)}}/>
                  <div className="cardbottom">
                    <h3 className='cardtitle'>{item.volumeInfo.title}</h3>
                    <p className="cardamount">&#8377;{amount}</p>
                  </div>
                </div>
                <Bookdesc show={show} item={bookitem} onClose={()=>setShow(false)}/>
              </>
            )
          }

        })
      }

    </>
  )
}

export default Card
