import axios from 'axios';
import "./UserList.css";
import { Component } from 'react';

export default class UserList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://dummyjson.com/users`)
      .then(res => {
        const persons = res.data.users;
        // console.log(typeof(persons));
        // console.log(persons);
        // console.log(persons.users);
        this.setState({ persons });
      })
  }

  render() {
    return (
      // <ul>
      //   {
      //     this.state.persons
      //       .map(person =>
      //         <li key={person.id}>{person.firstName}</li>
      //       )
      //   }
      // </ul>
      <table>
        <th>Sno</th>
        <th>Profile Pic</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>E-mail</th>
        <th>Username</th>
        <th>Domain</th>
        <th>IP</th>
        <th>University</th>
        {this.state.persons
          .map(person =>
            <tr key={person.id}>
              <td>{person.id}</td>
              <td><img src={person.image} alt="profile_pic"></img></td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.gender}</td>
              <td>{person.email}</td>
              <td>{person.username}</td>
              <td>{person.domain}</td>
              <td>{person.ip}</td>
              <td>{person.university}</td>
            </tr>
          )}
      </table>
    )
  }
}