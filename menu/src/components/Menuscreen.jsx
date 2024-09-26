const Menuscreen = ({ image, title, price, desc }) => {
    return (
      <>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{price}</h3>
        <h4>{desc}</h4>
      </>
    );
  };
  
  export default Menuscreen;