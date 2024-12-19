import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Book_UpDateForm() {
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const url = "http://localhost:5000/";
  const params = useParams();

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  // Fetch the book details when the component mounts
  useEffect(() => {
    axios
      .get(`${url}getbook/${params.id}`)
      .then((res) => {
        console.log("Update Function Response:", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log("Error occurred while fetching book details:", err);
      });
  }, [params.id]);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${url}updatebook/${params.id}`, state)
      .then((res) => {
        console.log("Book updated successfully:", res.data);
      })
      .catch((err) => {
        console.log("Error occurred while updating the book:", err);
      });
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Book {params.id}</h3>
      <form onSubmit={onSubmit} method="Post">
        {/* Book Title */}
        <div className="form-group">
          <label>Book Title: </label>
          <input
            className="form-control"
            type="text"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>

        {/* Book Authors */}
        <div className="form-group">
          <label>Book Authors: </label>
          <input
            className="form-control"
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
          />
        </div>

        {/* Book Topic */}
        <div className="form-group">
          <label>Pick Book Topic:</label>
          <select
            className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
          >
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        {/* Book Format */}
        <div className="form-group">
          <label>Format:</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="formate"
              value="Hard Copy"
              checked={state.formate === "Hard Copy"}
              onChange={handleChange}
            />
            <label className="form-check-label">Hard Copy</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="formate"
              value="Electronic Copy"
              checked={state.formate === "Electronic Copy"}
              onChange={handleChange}
            />
            <label className="form-check-label">Electronic Copy</label>
          </div>
        </div>

        {/* Publication Year */}
        <div className="form-group">
          <label>Publication Year (between 1980 and 2025):</label>
          <input
            type="range"
            name="PubYear"
            min="1980"
            max="2025"
            value={state.PubYear}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <center>
            <input
              type="submit"
              value="Update Book"
              className="btn btn-primary"
            />
          </center>
        </div>
      </form>
    </div>
  );
}

export default Book_UpDateForm;
