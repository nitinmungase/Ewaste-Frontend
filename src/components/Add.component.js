import React, { useEffect, useState } from "react";
import authService from "../services/auth.service";
import userService from "../services/user.service";

const Addcomponent = () => {
  const currentUser = authService.getCurrentUser();
  const [currentTutorial, setcurrentTutorial] = useState([]);
  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    userService.getUserBoard(currentUser.username).then((response) => {
      setcurrentTutorial(response.data);
      //console.log(response);
    });
  }, [currentTutorial]);

  
  //creating func to post data on server
  const [item, setItem] = useState({
    title: "",
    description: "",
    quantity: "",
    weight: "",
    username: currentUser.username,
  });
  function submit(e) {
    e.preventDefault();
    userService.create(item).then((response) => {
      console.log(response.item);
    });
  }

  //handle for add new item
  function handle(e) {
    const newitem = { ...item };
    newitem[e.target.id] = e.target.value;
    setItem(newitem);
  }

  return (
    <div className="alert alert-success p-1" role="alert">
      <div className="register-container p-1">
        <form onSubmit={(e) => submit(e)}>
        <label htmlFor="username">E Waste Name</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter E-Waste Name"
              onChange={(e) => handle(e)}
              value={item.title}
              required
            />
          </div>
          <div className="form-group ">
          <label htmlFor="username">Pick-Up Date</label>
            <input
              type="date"
              className="form-control"
              id="description"
              placeholder="Enter Description"
              onChange={(e) => handle(e)}
              value={item.description}
              required
            />
          </div>
          <div className="form-group">
          <label htmlFor="username">Quantity</label>
            <input
              type="Number"
              className="form-control"
              id="quantity"
              placeholder="Enter Quantity"
              onChange={(e) => handle(e)}
              value={item.quantity}
              required
            />
          </div>
          <div className="form-group">
          <label htmlFor="username">Weight</label>
            <input
              type="Number"
              className="form-control"
              id="weight"
              placeholder="Enter Weight in grams"
              onChange={(e) => handle(e)}
              value={item.weight}
              required
            />
          </div>
          <button type="submit" className="btn btn-success my-1 mx-1">
            Add Record
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcomponent;
