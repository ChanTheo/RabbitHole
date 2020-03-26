import React from "react";

export default function Logitem({ watch }) {
  const { id, user_id, is_public, created_at } = watch;
  console.log("Watchitem", watch);
  return (
    <li>
      id: {id}, user_id: {user_id},{" "}
    </li>
  );
}

// id: 5
// user_id: 3
// is_public: true
// created_at: "2020-03-26T01:40:25.709Z"
// updated_at: "2020-03-26T01:40:25.709Z"
// __proto__: Object
