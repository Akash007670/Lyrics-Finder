import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    heading: "",
    // dispatch: action => this.setState(state => reducer(state, action))
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(
        `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        // console.log(res.data);
        setState({
          track_list: res.data.message.body.track_list,
          heading: "Top 10 Tracks",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
