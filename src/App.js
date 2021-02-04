import { render } from '@testing-library/react';
import React from 'react';

function Food(props){
  return(<div>
    <h3>I love {props.name}
  </h3>
  <img src={props.image}  height="150" width="auto" alt={props.name+"_image"}></img>
  </div>
  );
}
const foodList=[
  {id:1,name: "kimchi",rating:3, image: "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg" },
  {id:2,name: "Ramen", rating:4,image: "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg"},
  {id:3,name: "Noodle", rating:5,image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/0fd69039751d2e9d6649ae63bca07cd2.jpg"}
]
function renderFood(item){
  return <Food name={item.name} image={item.image} key={item.id}/>
}
function App() {
  return (
    <div className="App">
      <h1>
        Food List
      </h1>
      {/* {console.log(foodList.map(renderFood))}  */}
      {/* {foodList.map(renderFood)}  */}
      {foodList.map((item)=> <Food key={item.id} name={item.name} image={item.image} />)}
    </div>
  );
}

export default App;
