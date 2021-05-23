import React,{useState,useEffect} from'react';
import {db} from"../Config/fire";

function App() {
    const [posts, setPosts]=useState(
        []);
        useEffect(() => {
          db.collection('Details').onSnapshot(snapshot =>{
              setPosts(snapshot.docs.map(doc=>doc.data()))
          })
        }, [])
    return(
        <div className="MainDiv">
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobno</th>
                    <th>Messsage</th>
                </tr>
            </thead>
            <tbody>
        <div className="App">
            {
                posts.map(
                    (vari)=>(
                    
                        <tr>     
                        <td>{vari.name }</td>
                        <td>{vari.email }</td>
                        <td>{vari.mobno}</td>
                        <td>{vari.message}</td>
                        </tr>
                        
                    )
                )
            }
        </div>
        </tbody>
        </table>
        </div>
        </div>
    )
}
export default App;