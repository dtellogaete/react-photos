import './App.css';

import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const data = [
    {
      title: 'Ocelote',
      desc: 'Mamífero',
      photo: 'https://cdn.pixabay.com/photo/2022/12/25/22/00/belize-7677975_960_720.jpg'
    },
    {
      title: "Ajolote",
      desc: "Anfibio",
      photo: "https://cdn.pixabay.com/photo/2017/04/01/10/32/axolotl-2193331_960_720.jpg"
    },
    {
      title: "Flamenco",
      desc: "Ave",
      photo: "https://cdn.pixabay.com/photo/2019/10/15/21/52/bird-4553025_960_720.jpg"
    },
    {
      title: "Cocodrilo",
      desc: "Reptil",
      photo: "https://cdn.pixabay.com/photo/2014/01/14/18/31/nile-crocodile-245013_960_720.jpg"
    },
    {
      title: "Coatí",
      desc: "Mamífero",
      photo: "https://cdn.pixabay.com/photo/2014/04/18/17/01/coati-327379_960_720.jpg"
    },
    {
      title: "Mariposa",
      desc: "Insecto",
      photo: "https://cdn.pixabay.com/photo/2018/12/20/13/56/butterfly-3886065_960_720.jpg"
    },
  ]
  return (    
    <div className="App">
      <Header title= "Galería de Imágenes con React"/>
      <div className="row" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
        {data.map((item) =>(       
          <Card
            key={item.title}
            title={item.title}
            desc={item.desc}
            photo={item.photo}
          /> 
        ))}
      </div>
      <Footer desc="Galería de animales"></Footer>
    </div>
  );
}

export default App;
