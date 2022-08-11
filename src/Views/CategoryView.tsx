import Category from "Components/Category/Category";
import Footer from "Components/Footer/Footer";
import Nav from "Components/Navbar/Nav";

const CategoryView = () => {
  return (
    <>
      <Nav />
      <Category setCategory={() => null} />
      <Footer />
    </>
  );
};

export default CategoryView;
