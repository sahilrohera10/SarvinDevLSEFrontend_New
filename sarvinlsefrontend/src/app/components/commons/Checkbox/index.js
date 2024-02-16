import { Checkbox, Label } from "flowbite-react";

function CheckBox({ label = null, id = null }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} />
      <Label htmlFor="remember">{label}</Label>
    </div>
  );
}

export default CheckBox;
