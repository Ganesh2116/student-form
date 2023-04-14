import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [uservalues, setUservalues] = useState([]);

  const onSubmit = (data) => {
    setUservalues([...uservalues, data]);
    reset();
  };
  return (
    <>
      <div className="text-center gap-4">
        <p className="text-8xl font-extrabold p-5">SAMPLE</p>
        <p className="text-2xl font-medium p-3 bg-emerald-500">
          Student Enrollment Form
        </p>
      </div>
      <div className="flex justify-around bg-slate-600">
        <div className="font-serif text-2xl p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1>Name </h1>
              <input
                className="rounded-lg hover:bg-violet-100 indent-2 h-10 w-96"
                type="text"
                placeholder="Enter your name"
                required
                {...register("name", {
                  required: "This is requried",
                  minLength: {
                    value: 4,
                    message: "min length is 4",
                  },
                  maxLength: {
                    value: 18,
                    message: "max length is 18",
                  },
                })}
              />
              <ErrorMessage errors={errors} name="name" />

              <h1>Email</h1>
              <input
                className="rounded-lg hover:bg-violet-100 indent-2 h-10 w-96"
                type="Email"
                placeholder="Enter the Email"
                {...register("email", {
                  required: "This is requried",
                })}
              />
              <h1>Github</h1>
              <input
                className="rounded-lg hover:bg-violet-100 indent-2 h-10 w-96 "
                type="url"
                placeholder="Enter github url"
                {...register("website", {
                  required: "This is requried",
                })}
              />
              <h1>Image link</h1>
              <input
                className="rounded-lg hover:bg-violet-100 indent-2 h-10 w-96"
                type="link"
                placeholder="Enter the url"
                {...register("image-link", {
                  required: "This is requried",
                })}
              />
            </div>
            <div className="py-5 gap-5">
              <h1>Gender</h1>
              <select
                id="gender"
                className="rounded-lg"
                {...register("gender")}
              >
                <option value="">select the option</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </div>
            <div>
              <h1>Skills</h1>
              <input
                type="checkbox"
                value="html"
                id="html"
                {...register("html")}
              />
              <label htmlFor="">HTML </label>
              <input
                type="checkbox"
                value="css"
                id="css"
                {...register("css")}
              />
              <label htmlFor="">CSS </label>
              <input
                type="checkbox"
                value="javascript"
                id="javascript"
                {...register("javascript")}
              />
              <label htmlFor="">Javascript </label>
              <input
                type="checkbox"
                value="react"
                id="react"
                {...register("react")}
              />
              <label htmlFor="">React </label>
            </div>
            <div className="p-10 flex ">
              <input
                className="w-44 h-10 bg-blue-600 rounded-md "
                type="submit"
              />
              <input
                className="w-44 h-10 bg-red-600 rounded-md "
                type="reset"
                value="Clear"
              />
            </div>
          </form>
        </div>

        <div className="font-serif text-4xl p-10">
          <div className="py-10">
            <h1>Enrolled Students</h1>
          </div>
          {uservalues.map((data, i) => (
            <div key={i} className="font-mono text-xl flex">
              <div>
                <h1>Name:{data.name}</h1>
                <h1>Email:{data.email}</h1>
                <p>web-link:{data.website}</p>
                <p>Gender:{data.gender}</p>
                <p>
                  skills:{data.html} {data.css} {data.javascript} {data.react}
                </p>
              </div>
              <div >
                <img 
                className="w-48 h-40 px-2 rounded-lg py-3"
                src={data["image-link"]} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Form;
