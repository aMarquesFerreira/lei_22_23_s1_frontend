const OptionsRoles = (props) => {
  return props.roles.length > 0 ? (
    props.roles.map((option, i) => {
      return (
        <option selected={true} key={i} value={option.idRole}>
          {option.name}
        </option>
      );
    })
  ) : (
    <>
        <>Logic</>
        <>MDG</>
    </>
  );
};

export default OptionsRoles;
