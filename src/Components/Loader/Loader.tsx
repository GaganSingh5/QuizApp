import "./loader.scss";

const Loader = () => {
  return (
    <div className="row m-0 p-0 d-flex justify-content-center">
      <div className="col p-0 m-2 loader loader--dot--1"></div>
      <div className="col p-0 m-2 loader loader--dot--2"></div>
      <div className="col p-0 m-2 loader loader--dot--3"></div>
      <div className="col p-0 m-2 loader loader--dot--4"></div>
    </div>
  );
};

export default Loader;
