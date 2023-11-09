import Card from './Components/Card';
import './App.css';

function App() {

  const places = [
    {
      name: 'Taj Mahal1',
      id: 1,
      location: 'Agra,Uttar Pradesh',
      speciality: ' Mughal Architecture',
      description: 'The Taj Mahal is a stunning white marble mausoleum built by the Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage Site and one of the most iconic symbols of India',
      image: ' https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: "Hampi",
      location: "Karnataka",
      speciality: "Vijayanagara architecture",
      description: "Hampi is an ancient village known for its well-preserved ruins of the Vijayanagara Empire. It's a UNESCO World Heritage Site and a testament to India's rich history.",
      image: "https://images.pexels.com/photos/3936815/pexels-photo-3936815.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Khajuraho Group of Monuments",
      location: "Madhya Pradesh",
      speciality: "Erotic sculptures",
      description: "The Khajuraho Group of Monuments features intricately carved temples with erotic sculptures. It's a UNESCO World Heritage Site and a marvel of temple art and architecture.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6xcaQRnFrZ7iaUIkwEA1akWZ-wrDG_4Z6A&usqp=CAU"
    },
    {
      id: 4,
      name: "Ajanta Caves",
      location: "Maharashtra",
      speciality: "Rock-cut architecture",
      description: "The Ajanta Caves are a series of rock-cut cave monasteries with stunning paintings and sculptures, showcasing India's ancient artistic heritage.",
      image: "https://images.pexels.com/photos/2563594/pexels-photo-2563594.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      name: "Ellora Caves",
      location: "Maharashtra",
      speciality: "Rock-cut architecture",
      description: "The Ellora Caves contain rock-cut temples and monasteries representing Hindu, Buddhist, and Jain traditions, making it a UNESCO World Heritage Site.",
      image: "https://media.istockphoto.com/id/483561330/photo/ellora-caves-buddhist-temples-in-arrangabad-india.webp?b=1&s=170667a&w=0&k=20&c=5ahstoP7T-JQM_OPk2ZqiC2SdNyDrrU-pqIfeSOmLvg="
    },
    {
      id: 6,
      name: "Mehrangarh Fort",
      location: "Jodhpur, Rajasthan",
      speciality: "Rajput architecture",
      description: "Mehrangarh Fort is a massive and imposing fort known for its intricate carvings, grand palaces, and stunning views of Jodhpur.",
      image: "https://images.pexels.com/photos/5102986/pexels-photo-5102986.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      name: "Lotus Temple",
      location: "New Delhi",
      speciality: "Bahá'í House of Worship",
      description: "The Lotus Temple is a Bahá'í House of Worship known for its lotus-like architecture and serves as a place of worship and meditation.",
      image: "https://images.pexels.com/photos/4059538/pexels-photo-4059538.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      name: "Chhatrapati Shivaji Terminus",
      location: "Mumbai, Maharashtra",
      speciality: "Gothic Revival architecture",
      description: "Chhatrapati Shivaji Terminus is a historic railway station known for its Victorian Gothic architecture, ornate interiors, and intricate details.",
      image: "https://media.istockphoto.com/id/472353524/photo/chhatrapati-shivaji-terminus.jpg?b=1&s=612x612&w=0&k=20&c=7DGcjmS1XcngXS2t9yW3_KLyCc2WUSuclVDbF9_2Q0k="
    },
    {
      id: 9,
      name: "Sanchi Stupa",
      location: "Sanchi, Madhya Pradesh",
      speciality: "Buddhist architecture",
      description: "The Sanchi Stupa is a Buddhist monument with intricately carved gateways and ancient relics, representing early Buddhist architecture.",
      image: "https://images.pexels.com/photos/5204433/pexels-photo-5204433.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 10,
      name: "Mysore Palace",
      location: "Mysore, Karnataka",
      speciality: "Indo-Saracenic architecture",
      escription: "Mysore Palace is a magnificent palace with a blend of architectural styles, including Indo-Saracenic, Rajput, and Gothic elements.",
      image: "https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 11,
      name: "Qutub Minar",
      location: "New Delhi",
      speciality: "Indo-Islamic architecture",
      description: "The Qutub Minar is a UNESCO World Heritage Site and a towering minaret built with intricately carved red sandstone and marble.",
      image: "https://images.pexels.com/photos/16892575/pexels-photo-16892575/free-photo-of-qutub-minar.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 12,
      name: "Champaner-Pavagadh Archaeological Park",
      location: "Gujarat",
      speciality: "Indo-Islamic architecture",
      description: "Champaner-Pavagadh Archaeological Park is known for its well-preserved Islamic and Hindu architectural heritage.",
      image: "https://images.pexels.com/photos/5690148/pexels-photo-5690148.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 13,
      name: "Rani ki Vav",
      location: "Patan, Gujarat",
      speciality: "Stepwell architecture",
      description: "Rani ki Vav is a stepwell known for its intricate sculptures and is a UNESCO World Heritage Site.",
      image: "https://images.pexels.com/photos/6221815/pexels-photo-6221815.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 14,
      name: "Brihadeeswarar Temple",
      location: "Thanjavur, Tamil Nadu",
      speciality: "Dravidian architecture",
      description: "The Brihadeeswarar Temple is a remarkable example of Dravidian architecture and is dedicated to Lord Shiva.",
      image: "https://images.pexels.com/photos/2087322/pexels-photo-2087322.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 15,
      name: "Victoria Memorial",
      location: "Kolkata, West Bengal",
      speciality: "Indo-Saracenic architecture",
      description: "The Victoria Memorial is a grand edifice built in honor of Queen Victoria and showcases Indo-Saracenic architectural style.",
      image: "https://images.pexels.com/photos/17875111/pexels-photo-17875111/free-photo-of-sunset-sky-over-victoria-memorial-in-kolkata.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
    
  ]


  return (
    <>
      <h1>Tourist's Places in India</h1>
      <div className='container'>
        {
          places.map((place) => (
            <Card id={place.id}
              name={place.name}
              location={place.location}
              speciality={place.speciality}
              description={place.description}
              image={place.image}
            />
          ))
        }
      </div>
    </>
  );
}

export default App;
