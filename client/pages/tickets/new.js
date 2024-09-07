import React, { useState } from "react";
import UseRequest from "../../hooks/use-request";
import Router from 'next/router';

const NewTicket = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const { doRequest, errors } = UseRequest({
    url: "/api/tickets",
    method: "post",
    body: { title, price },
    onSuccess: (ticket) => {
      alert("Ticket created successfully!");
      console.log(ticket);
      setTitle("");
      setPrice("");
      Router.push('/');
    }    
  });

  const onBlurHandler = () => {
    const value = parseFloat(price);
    if (isNaN(value)) {
      setPrice("");
    } else {
      setPrice(value.toFixed(2));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    doRequest();
  };

  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            onBlur={onBlurHandler}
          />
        </div>
        {errors}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTicket;
