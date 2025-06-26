import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Dreampartners" }, { name: "description", content: "Welcome to Dreampartners" }];
};

export default function Impromptu() {
  return <div>즉흥 모임 페이지</div>;
}
