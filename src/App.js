import React from "react";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: "JQuery",
      url: "https://jquery.com/",
      author: "Unknown",
      num_comments: 2,
      points: 5,
      objectID: 2,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState("React");

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const searchStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />
      <List list={searchStories} />

      {/* and by the way: that's how you do comments in JSX */}
    </div>
  );
};

const Search = (props) => (
  <div>
    <label htmlFor="search">Search:</label>
    <input
      id="search"
      type="text"
      value={props.search}
      onChange={props.onSearch}
    />
  </div>
);

const List = (props) => (
  <ul>
    {props.list.map((el) => (
      <Item key={el.objectID} el={el} />
    ))}
  </ul>
);

const Item = (props) => (
  <li key={props.el.objectID}>
    {" "}
    <span>
      <a href={props.el.url}>{props.el.title}</a>
    </span>
    <span>{props.el.author}</span>
    <span>{props.el.num_comments}</span>
    <span>{props.el.points}</span>
  </li>
);

export default App;
