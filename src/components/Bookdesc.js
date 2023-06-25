import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Bookdesc = ({show, item, onClose}) => {
    if(!show){
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
     <div className="deschead">
        <div className="deschead_inner">
            <button className='close' onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
            <div className="innerbox">
                <img src={thumbnail} alt='book'/>
                <div className="bookinfo">
                    <h1>{item.volumeInfo.title}</h1>
                    <h3>{item.volumeInfo.authors}</h3>
                    <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4>
                    <a href={item.volumeInfo.previewLink}><button>More</button></a>
                </div>
            </div>
            <h4 className='detaildescription'>
               {item.volumeInfo.description}
            </h4>
        </div>
    </div> 
    </>
  )
}

export default Bookdesc
