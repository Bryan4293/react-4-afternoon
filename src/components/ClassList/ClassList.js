import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state ={
      students: [],
    }
  }

  componentDidMount(){
    Axios
          .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
          .then(results =>{
            this.setState({students: results.data});
          });
  }

  render() {
    let studentName= this.state.students.map((student, index)=>(
      <Link to={`/student/${student.id}`} key={index}><h3>{student.first_name} {student.last_name}</h3></Link>
    ));
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentName}
      </div>
    )
  }
}