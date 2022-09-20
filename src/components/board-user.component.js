import React, { Component } from "react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import Addcomponent from "./Addcomponent";
export default class BoardUser extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
      content: "",
      currentTutorial: []
    };
  }
  
  componentDidMount() {
    UserService.getUserBoard().then(
      (response) => {
        this.setState({
          currentTutorial: response.data,
        });
        console.log(response);
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }
  


  render () {
    const { currentTutorial } = this.state;
    return (
      <div className="container">
        <header className="jumbotron">
          <Addcomponent/>
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
                  <button variant="primary" onClick={this.newTutorial}>
                    Add New Entry
                  </button>
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
                        <tr>
                          <td>{getitems.id}</td>
                          <td>{getitems.title}</td>
                          <td>{getitems.description}</td>
                          <td>{getitems.quantity}</td>
                          <td>{getitems.weight}</td>
                          <td>
                            {/*<i style={{ color: "#10ab80" }} className="material-icons">&#xE417;</i>*/}
                            <button
                              className="btn btn-light"
                              //onClick={() => setSmShow(true)}
                            >
                              <i
                                style={{ color: "#198754" }}
                                className="material-icons"
                                // onClick={() => {
                                //selectitem(getitems);
                                // }}
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
        
      </div>
    );
  }
}
