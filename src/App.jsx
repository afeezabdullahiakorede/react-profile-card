
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const employeeData = [
    { id: 1, name: "Tariq", age: 28, picture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" },
    { id: 2, name: "Omar", age: 34, picture: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=200&h=200&fit=crop" },
    { id: 3, name: "Zayn", age: 22, picture: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&h=200&fit=crop" },
    { id: 4, name: "Kareem", age: 41, picture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
    { id: 5, name: "Bilal", age: 29, picture: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop" },
    { id: 6, name: "Yusuf", age: 36, picture: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&h=200&fit=crop" }
  ];
  return (
    <div>
      <Header />

      <div className="card-container">
        {employeeData.map(person => (
          <ProfileCard 
            key={person.id} 
            picture={person.picture} 
            name={person.name} 
            age={person.age} 
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}   