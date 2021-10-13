import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Edit = (props) => {
  const { id } = props;
  const [name, setName] = useState("");
  const [authorimg, setAuthorImg] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.data));
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const newAuthor = {
      name,
      authorimg,
    };
    axios
      .put(`http://localhost:8000/api/author/${id}`, newAuthor)
      .then((res) => {
        console.log(res);
        console.log("success");
        setName(res.data.name);
        setAuthorImg(res.data.authorimg);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <h1>Favorite Authors</h1>
      <div className="row">
        <div className="col-6 col-form-styling">
          <form onSubmit={submitHandler}>
            <h6 className="purple-text">Edit the Author:</h6>
            <div>
              <label className="form-label">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors && errors.name && (
                <p className="error-text">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="form-label">AuthorImage URL:</label>
              <input
                type="text"
                value={authorimg}
                onChange={(e) => setAuthorImg(e.target.value)}
              />
              {errors && errors.authorimg && (
                <p className="error-text">{errors.authorimg.message}</p>
              )}
            </div>
            <div>
              <button onClick={handleCancel}>Cancel</button>
              <button className="submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Edit;
