import { Link, type MetaFunction } from "react-router";
import { Button } from "../components/ui/button";
import { GatheringList } from "~/features/gathering/components/gatherings-list";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Dreampartners" }, { name: "description", content: "Welcome to Wemake" }];
};

export default function Home() {
  return (
    <div className="px-20 space-y-40">
      <div className="flex flex-col">
        <div className="py-10 ">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">독서 모임 보기</h2>
          <p className="text-xl font-light text-foreground">금주 모임 리스트</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/gatherings">전체 모임 &rarr;</Link>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <GatheringList
              key={`productId-${index}`}
              id={`productId-${index}`}
              name="모임 이름"
              description="정기 모임"
              commentsCount={7}
              viewsCount={7}
              votesCount={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
