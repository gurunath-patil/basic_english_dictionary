import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "../dic_ui/searchBox.jsx";


let def_username = "gurunath"
let def_password = "123"
console.log(`username : ${def_username}, pass : ${def_password}`);
export function LogIN() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    let history = useNavigate()
    let path = "/display"


    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center container vh-100 ">
                <div className="">
                    <h2 className="text-capitalize fw-bold text-info">welcome</h2>
                </div>
                <div className="p-0">
                    <img className="rounded-circle h-75" src="https://i.pinimg.com/236x/d1/59/cb/d159cbe4f6ba5a6599217f693e4459ac.jpg" alt="image" />
                </div>
                <div className="">
                    <div className="p-2">
                        <input className="form-control" type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="mt-2 p-2">
                        <input className="form-control" type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-success" onClick={() => {
                            if (username == def_username && password == def_password) {
                                console.log("yes");
                                history(path)
                            } else {
                                alert("credition incorrect !")
                                location.reload()
                            }
                        }}>login</button>
                    </div>
                </div>
            </div>
        </>
    )
}