function Food({ favorite, sort }) {
  return (
    <div>
      <h1>
        I love {sort} .st {favorite} food{" "}
      </h1>
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    sort: 10,
  },
  {
    name: "orange",
    sort: 20,
  },
  {
    name: "chicken",
    sort: 30,
  },
  {
    name: "ggukumi",
    sort: 40,
  },
];
function renderFood(dish){
  console.log(dish);
  return <Food favorite={dish.name} sort={dish.sort}/>
}
function App() {
  return (
    <div>
      {foodILike.map(renderFood)};
    </div>
    
  );
}

export default App;
