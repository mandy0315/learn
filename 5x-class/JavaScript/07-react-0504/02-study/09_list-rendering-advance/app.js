

function CategoryItem(props){
  // TODO2
  return(
    <div className="category-item">
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  )
}

function List(){
  // TODO1
  const [list, setList] = React.useState([]);
  React.useEffect(() =>{
    fetch('./categories.json')
      .then((res) => res.json())
      .then((categories) =>{
        setList(categories);
      })
  }, [])

  return(
    <div>
      <div className="category-wrap">
        {
          list.map((data) =>{
            return(
              <CategoryItem
                key={data.id}
                name={data.name}
                image={data.image}
              />
            )
          })
        }
      </div>
    </div>
  )
}

ReactDOM.render(
  <List />,
  document.getElementById('app')
);