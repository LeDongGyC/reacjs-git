import React from 'react';

const RegisterFormik = () => {
    return (
        <div>
             <form
      className="max-w-[300px] mx-auto py-10"
      onSubmit={handleSubmit(onSubmitHandler)}
      autoComplete="off"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        </div>
    );
};

export default RegisterFormik;