import React from 'react'
import { Table } from 'reactstrap'
import PropTypes from 'prop-types';
import './roster.css'

// Running Roster - *Make changes here*

const Roster = (props) => {
    return (
        <div className="Roster-div">
        <h2 className="Roster-header">League Roster</h2>
        <h4>Champs Listed First</h4>
        <Table hover>
        <thead>
            <tr>
                <th>Championships</th>
                <th>Team</th>
                <th>Owner</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">3</th>
                <td>Stafford Rams Lutz</td>
                <td>Caleb Christensen</td>
            </tr>
            <tr>
            <th scope="row">2</th>
                <td>TDs Make My Vick Hard</td>
                <td>Branden Irvin</td>
            </tr>
            <tr>
                <th scope="row">1</th>
                <td>Quenton Quarantino</td>
                <td>Ryan Bogan</td>
            </tr>
            <tr>
            <th scope="row">1</th>
                <td>Take Mahomes Country Roads</td>
                <td>Jon Steele</td>
            </tr>
            <tr>
                <th scope="row"></th>
                <td>Minshews Mustache</td>
                <td>Nathan Bogan</td>
            </tr>
            <tr>
            <th scope="row"></th>
                <td>Cyka Blyat</td>
                <td>Alec Christensen</td>
            </tr>
            <tr>
            <th scope="row"></th>
                <td>Trust Me Im a Doctor</td>
                <td>Richard Christensen</td>
            </tr>
            <tr>
            <th scope="row"></th>
                <td>Krafts Korean Koochie</td>
                <td>Alex Decaudin</td>
            </tr>
            <tr>
            <th scope="row"></th>
                <td>Chubby Johnson</td>
                <td>Jay Jennings</td>
            </tr>
            <tr>
            <th scope="row"></th>
                <td>Browns Cumback Story</td>
                <td>Josh Petriko</td>
            </tr>
        </tbody>
        </Table>
        <br />
        <Table className="Roster-table">
        <thead>
            <tr>
                <th>Retirees</th>
            </tr>
        </thead>
        <tbody>
            <tr className="one">
                <td>Rob Clark</td>
            </tr>
            <tr>
                <td>Christian Morrison</td>
            </tr>
            <tr className="one">
                <td>Kyle Sanchez</td>
            </tr>
            <tr>
                <td>Kelly Williams</td>
            </tr>
        </tbody>
        </Table>

        <p className="Roster-text"></p>

        </div>
    )   
}

Table.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
    // Custom ref handler that will be assigned to the "ref" of the inner <table> element
    innerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.object
    ])
    };
export default Roster