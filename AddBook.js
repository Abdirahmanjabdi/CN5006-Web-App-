import React, { useState } from "react";
import axios from "axios";

export default function BookForm() {
  const url = "http://localhost:5000/";
  const [state, setState] = useState({
    bookTitle: "",
    author: "",
    format: "",
    topic: "",
    pubYear: 1990,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      bookTitle: state.bookTitle,
      pubYear: state.pubYear,
      author: state.author,
      topic: state.topic,
      format: state.format,
    };

    axios
      .post(`${url}addbooks`, bookData)
      .then((res) => console.log("Book added:", res.data))
      .catch((err) => console.error("Error adding book:", err));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit} method="POST">
        {/* Book Title Input */}
        <div className="form-group">
          <label>Book Title:</label>
          <input
            type="text"
            name="bookTitle"
            value={state.bookTitle}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Author Input */}
        <div className="form-group">
          <label>Book Author:</label>
          <input
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Topic Dropdown */}
        <div className="form-group">
          <label>Pick Book Topic:</label>
          <select
            name="topic"
            value={state.topic}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">-- Select Topic --</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        {/* Format Radio Buttons */}
        <div className="form-group">
          <label>Format:</label>
          <div className="form-check">
            <input
              type="radio"
              name="format"
              value="Hard Copy"
              checked={state.format === "Hard Copy"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label">Hard Copy</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="format"
              value="Electronic Copy"
              checked={state.format === "Electronic Copy"}
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label">Electronic Copy</label>
          </div>
        </div>

        {/* Publication Year Range */}
        <div className="form-group">
          <label>
            Publication Year (1980-2025):
            <input
              type="range"
              name="pubYear"
              min="1980"
              max="2025"
              value={state.pubYear}
              onChange={handleChange}
              className="form-control-range"
            />
          </label>
          <p>Selected Year: {state.pubYear}</p>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <center>
            <button type="submit" className="btn btn-primary">
              Add this Book
            </button>
          </center>
        </div>
      </form>
    </div>
  );
}

