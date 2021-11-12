import React from 'react';
import {Link} from 'react-router-dom';

function Pin(props) {
    return (
      <div 
      className="portfolio-item"
      style={{
          ...styles.card,
          ...styles[props.size],
          backgroundImage: props.tutorial.image
      }}>
        <Link to={`/tutoriais/${props.tutorial.id}`}>
        <div className="portfolio-wrap"  style={{
          borderRadius: '16px',
          width: '100%',
          height: '100%',
        }}>
          
        <img 
          src={props.tutorial.image} 
          className="img-fluid"
          style={{
            borderRadius: '16px',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            boxShadow: '1px 1px 4px 2px rgba(0,0,0,0.3)'
          }} 
          alt={props.tutorial.title}
        />
        <div className="portfolio-info">
          <h4 style={{color: "#1bb1dc", lineHeight: '24px', maxWidth: '250px', display: 'flex', flexWrap: 'wrap'}}>{props.tutorial.title}</h4>
          <p>{props.tutorial.tag}</p>
        </div>
        </div>
        </Link>
      </div>
      
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default Pin;