import React, {useEffect, useState } from "react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Button, Modal } from "react-bootstrap";
//import authService from "../services/auth.service";
//import userService from "../services/user.service";

const BoardAdmin = () => {
  const [currentDetails, setcurrentDetails] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [show, setShow] = useState(false);
  
 
  useEffect(() => {
    
    UserService.getAdminBoard().then(
      (response) => {
        setcurrentDetails(response.data);
        //console.log(response);
      },
      (error) => {
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  function submit(username) {
    /*username.preventDefault();
    userService.getUserDetails(username).then((response) => {
      setUserDetails(response.data);
    });
  setShow(true)*/
  }

    return (
      <div  style={{paddingTop: 94 }} > 
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
              </div>
              <div className="row">
                <div className="table-responsive ">
                  <table className="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>E-Name</th>
                        <th>E-Description</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentDetails.map((getitems) => (
                        <tr key={getitems.id}>
                          <td>{getitems.id}</td>
                          <td><button onClick={() => {
                                  show(getitems.username);
                                }}>
                            {getitems.username}
                            </button> </td>
                          <td>{getitems.title}</td>
                          <td>{getitems.description}</td>
                          <td>{getitems.quantity}</td>
                          <td>{getitems.weight}</td>
                          <td>
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

        {/* See User Details Modal*/}
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Record</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-2">
          <div>{userDetails.username}</div>
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
  }
  export default BoardAdmin;

