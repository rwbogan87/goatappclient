import React from 'react'
import './roster.css'

// Running Roster - *Make changes here*

const Roster = (props) => {
    return (
        <div className="Roster-div">
        <h2 className="Roster-header">League Roster</h2>
        <table className="Roster-table">
        <tbody>
            <tr>
                <th>Team</th>
                <th>Owner</th>
            </tr>
            <tr className="one">
                <td>Minshews Mustache</td>
                <td>Nathan Bogan</td>
            </tr>
            <tr>
                <td>Quenton Quarantino</td>
                <td>Ryan Bogan</td>
            </tr>
            <tr className="one">
                <td>Cyka Blyat</td>
                <td>Alec Christensen</td>
            </tr>
            <tr>
                <td>Stafford Rams Lutz</td>
                <td>Caleb Christensen</td>
            </tr>
            <tr className="one">
                <td>Trust Me Im a Doctor</td>
                <td>Richard Christensen</td>
            </tr>
            <tr>
                <td>Krafts Korean Koochie</td>
                <td>Alex Decaudin</td>
            </tr>
            <tr className="one">
                <td>TDs Make My Vick Hard</td>
                <td>Branden Irvin</td>
            </tr>
            <tr>
                <td>Chubby Johnson</td>
                <td>Jay Jennings</td>
            </tr>
            <tr className="one">
                <td>Browns Cumback Story</td>
                <td>Josh Petriko</td>
            </tr>
            <tr>
                <td>Take Mahomes Country Roads</td>
                <td>Jon Steele</td>
            </tr>
        </tbody>
        </table>
        <br />
        <table className="Roster-table">
        <tbody>
            <tr>
                <th>Retiree</th>
            </tr>
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
        </table>

        <p className="Roster-text"></p>

        </div>
    )   
}
 
export default Roster