import cv from "../src/files/CV1.pdf";

const Cv = () => {
  return (
    <div className="cv">
      <h1>CV</h1>
      <embed src={cv} width="400px" height="600px" />
    </div>
  );
};

export default Cv;
