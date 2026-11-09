import reactImg from './assets/react-core-concepts.png';

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
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <UserInfo />
    </div>
  );
}

export default App;