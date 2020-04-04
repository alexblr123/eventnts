import "./css.css";
import React from "react";

const CheckView = () => {
  return (
    <>
      <div>
        <input
          type="checkbox"
          class="custom-checkbox"
          id="check"
          class="checks"
          value="yes"
        />
        <label for="check"></label>{" "}
      </div>
      <div>
        <input
          type="checkbox"
          class="custom-checkbox"
          id="check1"
          class="checks"
          value="yes"
        />
        <label for="check1"></label>{" "}
      </div>
      <div>
        <input
          type="checkbox"
          class="custom-checkbox"
          id="check2"
          class="checks"
          value="yes"
        />
        <label for="check2"></label>{" "}
      </div>{" "}
      <div>
        <input
          type="checkbox"
          class="custom-checkbox"
          id="check3"
          class="checks"
          value="yes"
        />
        <label for="check3"></label>{" "}
      </div>{" "}
      <div>
        <input
          type="checkbox"
          class="custom-checkbox"
          id="check4"
          class="checks"
          value="yes"
        />
        <label for="check4"></label>{" "}
      </div>
    </>
  );
};

export default CheckView;
