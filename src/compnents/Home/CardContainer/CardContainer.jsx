import CardNews from "./CardNews";
import './CardContainer.css';

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
