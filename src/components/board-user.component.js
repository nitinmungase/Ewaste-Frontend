import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserService from "../services/user.service";
//import EventBus from "../common/EventBus";
import Addcomponent from "./Addcomponent";
import authService from "../services/auth.service";
import { Link } from "react-router-dom";
//import Editcomponent from "./Editcomponent";
const BoardUser = () => {
  const [currentTutorial, setcurrentTutorial] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    UserService.getUserBoard(currentUser.username).then((response) => {
      setcurrentTutorial(response.data);
      //console.log(response);
    });
  }, []);

  const selectitem = (getitems) => {
    setTitle(getitems.title);
    setDescription(getitems.description);
    setQuantity(getitems.quantity);
    setWeight(getitems.weight);
    setId(getitems.id);
  };

  function updateRecord() {
    const currentUser = authService.getCurrentUser();
    let username = currentUser.username;
    //let address=currentUser.address
    console.log(username);
    let item = { title, description, quantity, weight, id, username };
    console.log("item", item);
    UserService.update(item).then((response) => {
    });
  }
  const [smShow, setSmShow] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <header className="jumbotron pt-4">
        <div className="container ">
          <div className="crud shadow-lg p-5 mb-3 mt-3 bg-body rounded">
            <div className="row ">
              <div className="col-sm-3 mt-5 mb-4 text-gred"></div>
              <div
                className="col-sm-3 offset-sm-2 mt-3 mb-3 text-gred"
                style={{ color: "#198754" }}
              >
                <h2>
                  <b>Ewaste Details</b>
                </h2>
              </div>
              <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
               <Button variant="primary" onClick={() => setShow(true)}>
                  Add New Entry
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="table-responsive ">
                <table className="table table-striped table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>E-Name</th>
                      <th>E-Description</th>
                      <th>Quantity</th>
                      <th>Weight</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTutorial.map((getitems) => (
                      <tr key={getitems.id}>
                        <td>{getitems.id}</td>
                        <td>{getitems.title}</td>
                        <td>{getitems.description}</td>
                        <td>{getitems.quantity}</td>
                        <td>{getitems.weight}</td>
                        <td>
                          {/*<i style={{ color: "#10ab80" }} className="material-icons">&#xE417;</i>*/}
                          <button
                            className="btn btn-light"
                            onClick={() => setSmShow(true)}
                          >
                            <i
                              style={{ color: "#198754" }}
                              className="material-icons"
                              onClick={() => {
                                selectitem(getitems);
                              }}
                            >
                              &#xE254;
                            </i>
                          </button>
                          <Link to="/user">
                          <button className="btn btn-light" >
                            <i
                              style={{ color: "red" }}
                              onClick={() => {
                                UserService.delete(getitems.id);
                              }}
                              className="material-icons"
                            >
                              &#xE872;
                            </i>
                          </button> </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Ewaste Edit Modal*/}
      <Modal show={smShow} onHide={() => setSmShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="Number"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="Number"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <Button
              type="button"
              className="btn btn-success my-4 mx-2"
              onClick={updateRecord}
            >
              Update Record
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSmShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Ewaste Edit Modal Finish*/}

      {/* Ewaste Add Modal*/}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addcomponent />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Ewaste Add Modal Finish*/}
    </div>
  );
};

export default BoardUser;
