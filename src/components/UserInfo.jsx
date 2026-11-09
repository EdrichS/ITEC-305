const user = {
  firstName: 'Edrich',
  lastName: 'Silva',
  age: 21,
};

export default function UserInfo() {
  return (
    <div>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}