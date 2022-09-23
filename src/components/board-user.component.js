import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserService from "../services/user.service";
import Addcomponent from "./Add.component";
import authService from "../services/auth.service";

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
    UserService.update(item).then((response) => {});
    setSmShow(false);
  }
  const [smShow, setSmShow] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div style={{ paddingTop: 94 }}>
      <div className="container">
        <header className="jumbotron pt-4">
          <div className="container ">
            <div className="crud shadow-lg p-5 mb-3 mt-3 bg-body rounded">
              <div
                className="text-center"
                style={{ color: "#198754" }}
              >
                <h2>
                  <b>Ewaste Record Details</b>
                </h2>
              </div>
              <div className="text-end m-3">
              <Button variant="primary" onClick={() => setShow(true)}>
                Schedule Ewaste Pickup
              </Button>
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

                            <button className="btn btn-light">
                              <i
                                style={{ color: "red" }}
                                onClick={() => {
                                  UserService.delete(getitems.id);
                                }}
                                className="material-icons"
                              >
                                &#xE872;
                              </i>
                            </button>
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
          <Modal.Body className="p-2">
            <div className="alert alert-success" role="alert">
              <div className="register-container">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">E Waste Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="username">Pick-Up Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="username">Quantity</label>
                    <input
                      type="Number"
                      className="form-control"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="username">Weight</label>
                    <input
                      type="Number"
                      className="form-control"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required="required"
                    />
                  </div>
                  <Button
                    type="button"
                    className="btn btn-success my-1 mx-1"
                    onClick={updateRecord}
                  >
                    Update Record
                  </Button>
                </form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="p-1">
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
          <Modal.Body className="p-2">
            <Addcomponent />
          </Modal.Body>
          <Modal.Footer className="p-1">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Ewaste Add Modal Finish*/}
      </div>
    </div>
  );
};

export default BoardUser;
