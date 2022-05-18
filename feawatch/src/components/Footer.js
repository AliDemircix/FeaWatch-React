import gplay from '../img/googleplay.png';
export const Footer = () => {
  return (
    <footer>
      <div className="applications" id="applications">
        <img src={gplay} alt="applications"></img>
        <div className="copy-right" id="copy-right">
          <p>Designed by Ali Demirci @2022</p>
        </div>
      </div>
    </footer>
  );
};
