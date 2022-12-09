import React, { useState, useEffect } from "react";
import Add from "./Add";

function Showcase(props) {
  const [ads, cAds] = useState([]);
  const [current, cCurrent] = useState(undefined);

  const refreshList = () => {
    props.client.getAds().then((response) => cAds(response.data));
  };

  const removeAdvert = (id) => {
    props.client.removeAd(id).then(() => refreshList());
  };

  const updateAdvert = (ad) => {
    current(ad);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const buildrows = () => {
    return ads.map((current) => {
      return (
        <tr key={current._id}>
          <td>{current.name}</td>
          <td>£{current.price}</td>
          <td>
            <button onClick={() => removeAdvert(current._id)}> remove</button>
            {/* <button onClick={() => updateAdvert(current._id)}> update</button> */}
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      Event Add:
      <br />
      <table>
        <thead>
          <tr>
            <th>Events</th>
            <th>Ticket Price</th>
          </tr>
        </thead>
        <tbody>{buildrows()}</tbody>
      </table>
      <br />
      <br />
      <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentAd={current}
      />
    </>
  );
}

export default Showcase;
