import './style.css';

const ListTruck = ({ truck, handleDelte, handleEdit }) => {
  return (
    <tr>
      {truck.map((item) => {
        return (
          <div key={item.idTruck}>
            <td> {item.enroll}</td>
            <td>{item.year}</td>
            <td>{item.tare}</td>
            <td>{item.batteryCapacity}</td>
            <td>
              <button onClick={handleDelte}
                className="edit"
              />
              <button onClick={handleEdit}
                className="delete"
              />
            </td>
          </div>
        )
      }
      )}
    </tr>
  )
}

export default ListTruck;