import React from "react";
import Watchitem from "./Watchitem";

export default function Watchlist({ watchs }) {
  console.log("Watchlist:", watchs);

  console.log("Watchlist:", watchs[0]); //

  return (
    <div>
      {watchs.length > 0
        ? watchs.map(watch => <Watchitem key={watch.id} watch={watch} />)
        : ""}
      {/* <p>{test}</p> */}
    </div>
  );
}
