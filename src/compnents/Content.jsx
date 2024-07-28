import CardNews from "./presentational/CardNews";
import './Content.css';

export default function Content() {
  return (
    <>
      <div className="bg-white customShadowContent py-5 pt-10">
      <CardNews/>
      <CardNews/>
      <CardNews/>
      <CardNews/>
      </div>
    </>
  );
}
