const BirthdayScreen = ({ image, name, age }) => {
    return (
      <>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h3>{age}</h3>
      </>
    );
  };
  
  export default BirthdayScreen;