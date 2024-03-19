import {Label, TextInput } from "flowbite-react";


const Login = () => {
  return (
    <div className="bg-[#E5C8C0] min-h-screen flex flex-col items-center justify-center">
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              value="Username"
              className="text-[#813F3D] text-xl"
            />
          </div>
          <TextInput
            id="username"
            type="text"
            placeholder="erf or mary?"
            sizing="lg"
            required
            shadow
            color="warning"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Password"
              className="text-[#813F3D] text-xl"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required
            sizing="lg"
            color="warning"
          />
        </div>
        <button
          type="submit"
          className="bg-[#813F3D] text-white py-2 px-6 rounded-lg cursor-pointer text-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
