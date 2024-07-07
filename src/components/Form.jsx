import axios from "axios";
import React, { useState } from "react";
import { Dots } from "react-activity";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BASE_URL =
  "https://accredian-backend-task-tx9w.onrender.com/api/referral";
// const BASE_URL="http://localhost:4000/api/referral"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    axios
      .post(BASE_URL, data)
      .then((res) => {
        toast.success(res.data.message);
        setLoading(false);

        console.log(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
        console.log(err.response.data.error);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <div>
        <label className="block text-gray-700">Your Name</label>
        <input
          type="text"
          {...register("referrerName", { required: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
        />
        {errors.referrerName && (
          <span className="text-red-500">Your name is required</span>
        )}
      </div>
      <div>
        <label className="block text-gray-700">Your Email</label>
        <input
          type="email"
          {...register("referrerEmail", { required: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
        />
        {errors.referrerEmail && (
          <span className="text-red-500">Your email is required</span>
        )}
      </div>
      <div>
        <label className="block text-gray-700">Friend's Name</label>
        <input
          type="text"
          {...register("refereeName", { required: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
        />
        {errors.refereeName && (
          <span className="text-red-500">Friend's name is required</span>
        )}
      </div>
      <div>
        <label className="block text-gray-700">Friend's Email</label>
        <input
          type="email"
          {...register("refereeEmail", { required: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
        />
        {errors.refereeEmail && (
          <span className="text-red-500">Friend's email is required</span>
        )}
      </div>
      <div>
        <label className="block text-gray-700">Course</label>
        <input
          type="text"
          {...register("course", { required: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
        />
        {errors.course && (
          <span className="text-red-500">Course is required</span>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
      >
        {loading ? <Dots /> : "Submit"}
      </button>
    </form>
  );
};

export default Form;
