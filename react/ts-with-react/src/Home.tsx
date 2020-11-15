import React, { FC, useState, useMemo } from "react";

const Home: FC = () => {
  const [firstName, setFirstName] = useState("zhang");
  const [lastName, setLastName] = useState("qi");
  const [other, setOther] = useState("other");

  const fullName = useMemo(() => {
    console.log("useMemo");
    return firstName + " " + lastName;
  }, [firstName, lastName]);

  return (
    <div>
      <div>{fullName}</div>
      <button onClick={() => setFirstName("li")}>change firstName</button>
      <button onClick={() => setLastName("ruonan")}>change lastName</button>
      <button onClick={() => setOther("another")}>change other</button>
    </div>
  );
};

export default Home;
