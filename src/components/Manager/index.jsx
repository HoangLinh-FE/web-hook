import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Container, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Manager(props) {
    return (
        <Container>
        <h2 className='Admin__title'>List of report</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th></th>
      <th>Name Report</th>
      <th>User Name</th>
      <th>Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>The report 1</td>
      <td>User 1</td>
      <td><Link to='/'><FontAwesomeIcon icon={faDownload} /></Link></td>
    </tr>
    <tr>
      <td>2</td>
      <td>The report 2</td>
      <td>User 2</td>
      <td><Link to='/'><FontAwesomeIcon icon={faDownload} /></Link></td>    </tr>
    <tr>
      <td>3</td>
      <td>The report 3</td>
      <td>User 3</td>
      <td><Link to='/'><FontAwesomeIcon icon={faDownload} /></Link></td>    </tr>
  </tbody>
</Table>
        </Container>
    );
}

export default Manager;