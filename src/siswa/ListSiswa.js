import React, { Component} from 'react';



class ListSiswa extends Component {
   render(){
       return(
        <div>
            <ul>
           { this.props.list_students.map(student => {
               <li>{student}</li>
           })}
           </ul>
        </div>
        )
   }
}

export default ListSiswa;