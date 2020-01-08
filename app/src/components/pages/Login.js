import React from "react";

function Login() {
    return (
        <div class="container">
            <div class="row">
                <div class="loginPage">
                    <form>
                        <h1 id="textTop"> Login Page </h1>
                        <label>
                            Name:
            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            {" "}
                            Email:
            <input type="text" name="email" />
                        </label>
                        <br />
                        <label>
                            Phone:
            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            Position:
            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            Highest level played:
            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            Preferred Rinks:
            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            Availability:
            <input type="text" name="name" />
                        </label>
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
