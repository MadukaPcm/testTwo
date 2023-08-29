// import logo from './logo.svg';
import './App.css';
// import Main from './Components/Main';
import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
import Card from './Components/Card';
import cardd from './Components/card_data';
// import Contact from './Components/Contact';
import card_data from './Components/card_data';

function App() {
  console.log(cardd)

  const cards = card_data.map(item=>{
    return(
      <Card 
          key={item.id}
          {...item}  // technique of spreading data to props.
          // item={item}
      />
    )
  })

  return (
    <div className='container'>
      <Navbar />
      <div className='cards'>
        {cards}
        {/* <Card 
            img="images/mmm.jpg"
            name="USA"    
            star=""
            like={7}
        /> */}
      </div>
    </div>
  );
}

export default App;
