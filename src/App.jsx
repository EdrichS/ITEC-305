import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescription = ['Fundamental', 'Crucial', 'Core', 'Salayka\'s'];

function genRandomInt(max){ 
  return Math.floor(Math.random() * (max + 1));
}

function Header (){
  const description = reactDescription[genRandomInt(3)];
  return(
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

const user = {
  firstName: 'Edrich',
  lastName: 'Silva',
  age: 21,
};

function UserInfo() {
  return (
    <div>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"> 
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
      <UserInfo />
    </div>
  );
}

export default App;