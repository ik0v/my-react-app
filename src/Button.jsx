function Button() {
  const buttonStyle = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>Click me</button>;
}

export default Button;
