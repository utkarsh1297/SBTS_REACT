// import React,{ db, auth} from 'react';
// import fire from './fire';
// class Data extends React.Component {
//     state = {
//         Details: null
//     }
        
//       componentDidMount() {
         
//        console.log('mounted')
//         db.collection('Details')
//         .get()
//         .then( snapshot => {
//            const Details = [] 
//            snapshot.forEach( doc => {
//                const data = doc.data()
//                Details.push(data)
//            })
//            this.setState({ Details: Details})
//             console.log(snapshot)
//        })
      
//        .catch( error => console.log(error))
//      }
      
//       render(){
//       return (
//         <div className="MainDiv">
//           <div class="jumbotron text-center bg-sky">
//               <h3>Student Detail</h3>
//           </div>
        
//           <div className="container">
//               <table id="example" class="display table">
//                 <thead class="thead-dark">
//                     <tr>
//                         <th>Student Name</th>
//                         <th>Email</th>
//                         <th>Mob no</th>
//                         <th>Message</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {
//                 this.state.Details &&
//                 this.state.Details.map(data => {
//                     return (
//                         <tr>     
//                         <td>{data.name}</td>
//                         <td>{data.email}</td>
//                         <td>{data.mobno}</td>
//                         <td>{data.message}</td>
//                         </tr>
                        
//                     );
                   
//                     })}
            
                   
//                 </tbody>
                
//              </table>
              
//          </div>
//         </div>
//       );
//     }
//     }

//     export default Data;