import axios from 'axios';
import React, {useEffect, useState} from 'react';

import Pin from './Pin';

function PinterestLayout() {
    const sizes = ['small', 'medium', 'large']
    const [tutoriais, setTutoriais] = useState([])

    useEffect(() => {
      async function fetchTutoriais() {
        const {data} = await axios.get('/api/courses/');
        console.log(data)
        setTutoriais(data)
      }
      fetchTutoriais();
    }, [])


    return (
        <div style={styles.pin_container}>
          {tutoriais.map(tutorial => {
            const size = sizes[Math.floor(sizes.length * Math.random())]; 
            return (
              <Pin key={tutorial.id} size={size} tutorial={tutorial}/>
            )
          })}
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 330px)',
        gridAutoRows: '10px',
        justifyContent: 'center',
        // backgroundColor: 'black'
    }
}

export default PinterestLayout;