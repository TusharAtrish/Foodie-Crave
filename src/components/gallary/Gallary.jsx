import React from 'react'
import './gallary.css'
import Article from '../article/Article';
import pager1 from '../../asset/pager1.svg'
import pager2 from '../../asset/pager2.svg'
const Gallary = () => {
    return(<div className="foodie-gallary">
        <div className="foodie-gallary-title">
            Latest Articles
        </div>
        <div className="foodie-gallary-container">
            <Article/>
            <Article/>
            <Article/>
        </div>
        <div className="foodie-gallary-containerpager">
           <img src={pager1} alt="pager1" />
            <p>1/2</p>
            <img src={pager2} alt="pager2" />
        </div>
    </div> 
        
        )
}

export default Gallary;