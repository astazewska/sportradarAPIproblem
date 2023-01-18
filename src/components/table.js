import TableData from './TableData';

const Table = (props) => {
    return (
        <div>
            {props.scores.map((resultData) => (
                <TableData
                    teamNameHome={resultData.teamNameHome}
                    teamNameAway={resultData.teamNameAway}
                    scoreHome={resultData.scoreHome}
                    scoreAway={resultData.scoreAway} 
                />
            ))}
        </div>
    )
}

export default Table;