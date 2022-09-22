import React, { useState } from "react";
import authService from "../services/auth.service";
import userService from "../services/user.service";

const Addcomponent = () => {
  const currentUser = authService.getCurrentUser();

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
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter E-Waste Name"
          onChange={(e) => handle(e)}
          value={item.title}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Enter Description"
          onChange={(e) => handle(e)}
          value={item.description}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="Number"
          className="form-control"
          id="quantity"
          placeholder="Enter Quantity"
          onChange={(e) => handle(e)}
          value={item.quantity}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="Number"
          className="form-control"
          id="weight"
          placeholder="Enter Weight"
          onChange={(e) => handle(e)}
          value={item.weight}
        />
      </div>

      <button
        type="button"
        className="btn btn-success my-4 mx-2"
        onClick={(e) => submit(e)}
      >
        Add Record
      </button>
    </form>
  );
};

export default Addcomponent;
