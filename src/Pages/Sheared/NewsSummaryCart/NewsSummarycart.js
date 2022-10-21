import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt,FaStar,FaEye } from "react-icons/fa";
const NewsSummarycart = ({news}) => {
        console.log(news)
        const {title,_id, total_view,rating, image_url, details,author} = news
    return (
        <Card className="mb-3">
        <Card.Header className = 'd-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image roundedCircle src= {author?.img} style ={{height : '60px'}} />
                <div className='ms-2'>
                    <p className='mb-0'> {author?.name} </p>
                    <p> {author?.published_date} </p>
                </div>
            </div>
            <div className='me-2'>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>

            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Img src= {image_url} alt="Card image" variant='top' />
          <Card.Text>
            {
            details.length > 250 ? 
            <p> {details.slice(0,250) + '...'} <Link to = {`/news/${_id}`}>Read More</Link> </p>
            :
            <p> {details} </p>
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className='text-warning me-2' />
            <span> {rating?.number} </span>
          </div>
          <div>
            <FaEye className='me-2'/>
            <span> {total_view} </span>
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsSummarycart;