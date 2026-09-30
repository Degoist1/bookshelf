import { useState, useEffect } from "react";

function Home(props) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // runs once when the page loads (like componentDidMount)
  useEffect(() => {
    document.title = "BookShelf - Home";
    console.log("Home mounted");

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup runs when the page is left (like componentWillUnmount)
    return () => {
      clearInterval(timer);
      console.log("Home unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Welcome to BookShelf</h2>
      <p>Keep track of the books you read.</p>
      <p>You have {props.total} books on your shelf.</p>
      <p>Current time: {time}</p>
    </div>
  );
}

export default Home;