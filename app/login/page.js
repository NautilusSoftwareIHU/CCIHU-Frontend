import React from "react";

const loginPage = () => {
    return (
        <>
        <h1>Log in</h1>
        <form>
            <input type="email" name="email" placeholder="Enter your email"></input>
            <input type="password" name="password" placeholder="Enter your password"></input>
            <a>Forgot password?</a>
            <button>Log in</button>
        </form>
        <p>OR</p>
        <p>Continue using IEE IHU Apss</p>
        <button>Register / Log in</button>
        </>
    );
}

export default loginPage;