import Avatar from "./Avatar";

export default function Membership({ title, img }) {
  return (
    <div className="item">
      <Avatar img={img} />
      <div className="item-content">
        <div className="title">{title}</div>
      </div>
    </div>
  );
}
