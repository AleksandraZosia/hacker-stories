const reminder = "Order dog food!";

const welcome = {
  greeting: "Hej",
  title: "Tato",
};

const getTitle = function (title) {
  return title;
};

function App() {
  return (
    <div>
      <h1>
        {" "}
        {welcome.greeting} {getTitle(welcome.title)}
      </h1>
      <p> {reminder}</p>
      <label htmlFor="search"> Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
