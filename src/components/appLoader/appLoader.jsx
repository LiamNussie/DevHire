import "./appLoader.css";

const AppLoader = () => {
  return (
    <div className="apploader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default AppLoader;
