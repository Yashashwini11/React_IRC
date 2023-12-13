import { useState } from "react";
const Welcome=()=>
{
    const[visible,setVisible]=useState(true);

    const toggle=()=>
    {
        setVisible(!visible);
    }
    setTimeout(()=>
    {
        setVisible(false)
    },5000)
    return(
        <>
        {visible ? (
            <div className="card-wrapper">
                <div className="card">
                    <p className="cookieHeading">WELCOME</p>
                    <p className="description">Accept the necessary cookies.</p>
                    <div className="button">
                        <button className="accept" onClick={toggle}>Allow</button>
                        <button className="decline" onClick={toggle}>Decline</button>
                    </div>
                </div>
            </div>
        ):(
            <button onClick={toggle}>
                Manage Cookies
            </button>
        )

        }
        </>
    )
}
export default Welcome;