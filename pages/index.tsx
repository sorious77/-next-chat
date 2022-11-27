import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();

  const [id, setId] = useState<string>();
  const [submitStyle, setSubmitStyle] = useState<string>("bg-rose-200");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setId(value);

    if (!value) {
      setSubmitStyle("bg-rose-200");
    } else {
      setSubmitStyle("cursor-pointer bg-rose-400");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) {
      return;
    }

    router.push("/chats");
  };

  return (
    <div className="flex justify-center items-center flex-col h-full relative -top-16">
      <h1 className="text-3xl mb-10">Login to your account</h1>
      <form className="flex flex-col w-1/3" onSubmit={handleSubmit}>
        <div className="flex text-lg items-center border border-gray-400 rounded-lg">
          <div className=" bg-gray-200 rounded-l-lg border-r-gray-400 border p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <input
            className="py-2 w-full outline-rose-400 outline-offset-2 transition-colors ease-in pl-2 rounded-r-lg"
            placeholder="Your name"
            value={id}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className={`mt-6 text-white rounded p-2 ${submitStyle}`}
        />
      </form>
    </div>
  );
};

export default Home;
