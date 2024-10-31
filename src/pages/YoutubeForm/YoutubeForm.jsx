import React from "react";
import MUITextField from "../../components/TextField/MUITextField";
import MUIButton from "../../components/Button/MUIButton";
import "../YoutubeForm/YoutubeForm.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

const YoutubeForm = () => {
  const form = useForm();
  renderCount++;
  const { register, control, handleSubmit } = form;
  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='register-form'
        noValidate>
        <h1>Register Form ({renderCount / 2})</h1>
        <MUITextField
          id='username'
          type='text'
          label='Username'
          variant='filled'
          placeholder='Enter a username'
          {...register("username", {
            value: true,
            required: "Username is required",
          })}
        />
        <MUITextField
          id='email'
          type='email'
          label='Email'
          variant='filled'
          placeholder='Enter a email'
          {...register("email", {
            pattern: {
              value:
                / ^[a - zA - Z0 -9_. + -] + @[a - zA - Z0 - 9 -] +\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email format ",
            },
          })}
        />

        <MUITextField
          id='channel'
          type='channel'
          label='Channel'
          variant='filled'
          placeholder='Enter a channel name'
          {...register("channel")}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MUIButton type='submit' className='submit-button' text='Register' />
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
