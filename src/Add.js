import React, { useState } from "react";

function Add(props) {
  const [disabled, cDisabled] = useState(false);
  // form element should keep track of what is in the form in Its state
  const [form, changeForm] = useState({ adName: "", price: "", description: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    // if parent has a currentAd in state
    if (props.currentAd) {
      // run a funciton to update that add
      result = await props.client.updateAd(props.currentAd._id, e.target.adName.value, e.target.price.value);
    } else {
      // run a function to create a new add
      result = await props.client.addAd(e.target.adName.value, e.target.price.value);
    }
    console.log(result);
    if (result.status === 200) {
      // success!
      cDisabled(false);
      props.refreshList();
      // resets the form
      // changeForm({ adName: "", price: "" })
    } else {
      // error!
      alert("an error occured, please try again");
      cDisabled(false);
    }
  };

  // handleChange function that updates the state of the component when the user adds something into the feilds

  return (
    <>
      {props.currentAd ? "Update" : "Add"}
      <br />

      <form onSubmit={(e) => submitHandler(e)} id="addForm">
        Name: <br />
        <input
          type="text"
          // when the user changes this field
          // handleChange function runs
          // onInput={() => (even) => handleChange(event)}
          defaultValue={props.currentAd?.name}
          name="adName"
          disabled={disabled}
          // value = {form.adName}
        />
        <br />
        Description: <br />
        <input type="text" defaultValue={props.currentAd?.description} name="description" disabled={disabled} />
        <br />
        Price:
        <br />
        <input
          type="number"
          // when the user changes this field
          // handleChange function runs
          // onInput={() => (even) => handleChange(event)}

          // value = {form.price}
          defaultValue={props.currentAd?.price}
          name="price"
          disabled={disabled}
        />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Add;