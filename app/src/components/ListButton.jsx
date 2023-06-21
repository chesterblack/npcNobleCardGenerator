import Link from "next/link";
import CoatOfArms from "./CoatOfArms";

export default function ListButton({ href, house, children }) {
  let additionalStyle = {};
  let arms = '';
  let classes = 'list-button';

  if (house) {
    additionalStyle = {
      '--house-color': house.color
    };

    arms = <CoatOfArms house={house} />;

    classes += ' has-arms';
  }

  return (
    <Link
      className={classes}
      href={href}
      style={additionalStyle}
    >
      {arms}
      {children}
    </Link>
  );
}