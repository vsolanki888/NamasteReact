const Grocery = () => {
  setTimeout(() => {
    console.log("Grocery component rendered after 2 seconds");
  }, 3000);
  return <h1>Grocery online store with lot of child components</h1>;
};
export default Grocery;
