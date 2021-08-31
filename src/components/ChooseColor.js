import React from "react";
import { theme1, theme2, theme3, theme4, theme5, theme6 } from "../theme";
function ChooseColor({ changeTheme }) {
  return (
    <>
      <div
        onClick={() => changeTheme("theme1")}
        style={{ backgroundColor: `${theme1.color1}` }}
      ></div>
      <div
        onClick={() => changeTheme("theme2")}
        style={{ backgroundColor: `${theme2.color1}` }}
      ></div>
      <div
        onClick={() => changeTheme("theme3")}
        style={{ backgroundColor: `${theme3.color1}` }}
      ></div>
      <div
        onClick={() => changeTheme("theme4")}
        style={{ backgroundColor: `${theme4.color1}` }}
      ></div>
      <div
        onClick={() => changeTheme("theme5")}
        style={{ backgroundColor: `${theme5.color1}` }}
      ></div>
      <div
        onClick={() => changeTheme("theme6")}
        style={{ backgroundColor: `${theme6.color1}` }}
      ></div>
    </>
  );
}

export default ChooseColor;
