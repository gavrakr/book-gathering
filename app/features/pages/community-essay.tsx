import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Dreampartners" }, { name: "description", content: "Welcome to Dreampartners" }];
};

export default function Essay() {
  return <div>에세이 커뮤니티 페이지</div>;
}
