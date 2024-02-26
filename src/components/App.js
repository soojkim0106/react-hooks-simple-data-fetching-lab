// create your App component here
import { useState, useEffect } from "react";

const App = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        if (!res.ok) {
          throw new Error("The json server is not running");
        }
        return res.json();
      })
      .then((data) => {
        setImage(data.message);
      });
  }, []);

  if (!image) {
    return <p>Loading...</p>;
  }
  return <img src={image} alt="A Random Dog"></img>;
};

export default App;
