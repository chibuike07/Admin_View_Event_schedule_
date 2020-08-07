import React, { useState } from "react";
import Styles from "./contact.module.css";
import Image from "../../Assests/cartoon3.jpeg";
import CustomInput from "../component_input/Input";
import CustomButton from "../component_button/Button";
import CustomImage from "../component_image/Image";

const Contact = () => {
  const { contact_wrapper, formField, text, form, divBg, image, btn } = Styles;
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = ({ target }) => {
    setData(() => ({ ...data, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object", data);
  };
  const { name, email, number } = data;
  return (
    <div className={contact_wrapper}>
      <div className={formField}>
        <div className={text}>
          <h1>contact us</h1>
          <em>group chat</em>
        </div>
        <form className={form}>
          <CustomInput
            type={"text"}
            name={"name"}
            id={"name"}
            placeholder={"name"}
            value={name}
            onChange={handleChange}
          />

          <CustomInput
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"email"}
            value={email}
            onChange={handleChange}
          />

          <CustomInput
            type={"number"}
            name={"number"}
            id={"number"}
            placeholder={"number"}
            value={number}
            onChange={handleChange}
          />
          <CustomButton
            text={"submit"}
            name={"button"}
            id={"number"}
            className={btn}
            click={handleSubmit}
            backgroundColor={"rgb(0, 102, 102)"}
          />
        </form>
      </div>
      <div className={divBg}></div>
      <figure className={image}>
        <CustomImage src={Image} alt={"human image"} />
      </figure>
    </div>
  );
};

export default Contact;
