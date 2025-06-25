import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Dreampartners" }, { name: "description", content: "Welcome to Dreampartners" }];
};

export default function Gathering() {
  return <div>Gathering</div>;
}
