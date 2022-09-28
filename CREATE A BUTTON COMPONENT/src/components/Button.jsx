function Button(props) {
  // destructring
  const { name, onClick } = props;
  return (
    <button className="Button" onClick={onClick}>
      {name} click me
    </button>
  );
}
// export
export default Button;
