const ListTravel = (props) => {
    return props.travels.length > 0 ? (
        props.travels.map((travel, i) => {
            return (
                <tr key={i}>
                    <td>{travel.departureDate}</td>
                    <td>{travel.arrivalDate}</td>
                    <td>{travel.departureTime}</td>
                    <td>{travel.departureLocation}</td>
                    <td>{travel.arrivalLocation}</td>
                    <td>{travel.truck}</td>
                </tr>
            );
        })
    ) : (
        <tr>
            <td colSpan={4}>No travels found</td>
        </tr>
    );
};

export default ListTravel;
