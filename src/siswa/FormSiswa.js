import React, { Component } from 'react';

import ListSiswa from './ListSiswa'

class FormSiswa extends Component {
    constructor(){
        super()
        this.state = {
            students : ['Dwi Warsono'],
            currentStudentName: ''
        }
    }


    tambahSiswa(){
        let currentStudents = this.state.students
        currentStudents.push(this.state.currentStudentName)
        this.setState({
            students: currentStudents
        })
    }

    render(){
        return(
            <div>
                <span> {this.state.currentStudentName} </span>
                <br/>
                <input type="text" placeholder="Masukan nama siswa" 
                onChange={(e) => this.setState({currentStudentName: e.target.value})}/>
              
                <input type="submit" value="Tambah Siswa" 
                onClick={ () => this.tambahSiswa() }
                />
                <h2>Siswa : </h2>
                <ListSiswa list_students={this.state.students}/>
               
            </div>
        )
    }
}

export default FormSiswa;