
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const employeeData = [
    { id: 1, name: "Alice", age: 28, picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
    { id: 2, name: "Marcus", age: 34, picture: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop" },
    { id: 3, name: "Chloe", age: 22, picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
    { id: 4, name: "David", age: 41, picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" }
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