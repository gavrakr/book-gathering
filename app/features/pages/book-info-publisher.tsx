import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Dreampartners" }, { name: "description", content: "Welcome to Dreampartners" }];
};

export default function Publishers() {
  return <div>출판사 모임 페이지</div>;
}
