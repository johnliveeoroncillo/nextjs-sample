import { useState } from "react";

export default function Home() {

  const [query, setQuery] = useState({
    username: "",
    password: ""
  });

  // Update inputs value
  const handleParam = () => (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://tsnode-rest-api.herokuapp.com/login", {
      method: "POST",
      body: formData
    })
    .then(() => setQuery({ username: "", password: "" }))
    .catch(err => {
        console.log(err);
    });
  };

  return (
      <div>
        <h1>Home</h1>
        <form onSubmit={formSubmit}>
          <input type="text" name="username" className="border p-2" onChange={handleParam()} />
          <input type="password" name="password" className="border p-2" onChange={handleParam()} />
          <button className="bg-green-500 text-white py-2 px-4 rounded" type="submit">Login</button>
        </form>
      </div>
  )
}
