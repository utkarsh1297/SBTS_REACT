import React,  { useState } from 'react';
import { db }  from "../Config/fire";
import "../App.css";
  
 const Detail = () => {

const [name, setName]  = useState("");
const [email, setEmail]  =useState("");
const [mobno, setmobno]  =useState("");
const [message, setMessage] =useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
    //     const [posts , setPosts]=useState(
    //         []);
    //     useEffect(() => {
         db.collection("Details")
    //         setPosts(snapshot.docs.map(doc=>.data() ))
    //     })
    //    }, [])

        .add({
            name:name,
            email:email,
            mobno:mobno,
            message:message,
        })
        .then(() => {
            alert("Detail has been submiteed");
        })
      
        .catch((error) =>{
            alert(error.message);
        });

       setName(" ");
        setEmail(" ");
        setmobno(" ");
        setMessage(" ");
    };
    return(

        <form className="form" onSubmit= {handleSubmit}>
            <h1>Student Detail Form</h1>
            
             <label> Student Name </label>
             <input type="text" placeholder="name"
               value={name}
               onChange={(e) => setName(e.target.value)}

             />
            
            
             <label> Email </label>
             <input type="text" placeholder="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
             
             
             <label> Phone No </label>
             <input type="text" placeholder="mob no" 
              value={mobno}
              onChange={(e) => setmobno(e.target.value)}
             />
        
            
             <label> message </label>
             <textarea type="text" placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
             />
            <button type="submit"> Submit </button>
        </form>
        
    )
}
export default Detail;