import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Display = (props) => {
  const [author, setAuthor] = useState([]);
  const [successfulDeleteBoolen, setSuccessfulDeleteBoolean] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => {
        setAuthor(res.data);
      })
      .catch((err) => console.log(err));
  }, [successfulDeleteBoolen]);
  const handleDeleteRestaurant = (id) => {
    console.log("handle delete", id);
    axios
      .delete(`http://localhost:8000/api/author/${id}`)
      .then((response) => {
        console.log(response);
        setSuccessfulDeleteBoolean(!successfulDeleteBoolen);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <div className="container">
        <h1>Favorite Authors</h1>
        <div className="row">
          <Link to="/new">Add an Author</Link>
          <div className="col-10">
            <h6 className="purple-text">We have quotes by:</h6>
            <table className="table">
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Author Image</th>
                  <th>Actions Available</th>
                </tr>
              </thead>
              <tbody>
                {author.map((element, index) => (
                  <tr key={index}>
                    <td>{element.name}</td>
                    {/* <td>{element.authorimg}</td> */}
                    <td>
                      {element.authorimg && (
                        <img
                          className="table-img"
                          src={element.authorimg}
                          alt=""
                        />
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleEdit(element._id)}
                        type="button"
                        className="btn btn-warning"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDeleteRestaurant(element._id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
