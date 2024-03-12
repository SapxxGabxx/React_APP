import "./Sezione.css";

export default function Sezione2({ titolo, testo, urlImage }) {
  return (
    <div>
      <div className="col">
        <div className="card1 h-100">
          <img src={urlImage} className="card-img-top" alt={{ titolo }}></img>
          <div className="card-body spazio">
            <h4 className="card-title mr-2 m-3">{titolo}</h4>
            <p className="card-text mr-2 m-3 ">{testo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
