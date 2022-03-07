import { useState } from 'react';
// import mainLogo from './person-1.jpeg';
import Data from './data';
const Reviews = ()=>{
    const initialData = Data();
    const [data,setData] = useState(initialData);
    // console.log(data);
    // console.log(initialData);
    let [index,setIndex] = useState(0);
    const prevHandler = () => {
        let i = index;
        if(index === 0){
            i = data.length - 1;
        } else {
            i--;
        }
        setIndex(i);
    }
    const nextHanlder = () => {
        let i = index;
        if(index === data.length - 1){
            i = 0;
        } else {
            i++;
        }
        setIndex(i);
    }
    const randomHandler = () => {
        let i = Math.floor(Math.random() * 4);
        setIndex(i);
    }
    
    return(
        <article className="review">
          <div className="img-container">
            <img src={data[index].img} id="person-img" alt=""/>
          </div>
          <h4 id="author">{data[index].name}</h4>
          <p id="job">{data[index].job}</p>
          <p id="info">
          {data[index].text}
          </p>
         
          <div className="button-container">
            <button onClick={prevHandler} className="prev-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={nextHanlder} className="next-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
         
          <button onClick={randomHandler} className="random-btn">surprise me!</button>
        </article>
    )
}
export default Reviews;