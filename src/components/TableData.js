
const TableData = (props) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Team Names</th>
                    <th>Result</th>
                </tr>
                <tr>
                   <td>{props.teamNameHome} vs. {props.teamNameAway}</td>
                   <td>{props.scoreHome}:{props.scoreAway}</td>
                </tr>
            </table>
        </div>
    );
}

export default TableData;