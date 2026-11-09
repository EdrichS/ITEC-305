export default function TabButton({children, onSelect}) {
  console.log('TabButton rendering');
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}