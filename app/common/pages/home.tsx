import { Link, type MetaFunction } from "react-router";
import { Button } from "../components/ui/button";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Dreampartners" }, { name: "description", content: "Welcome to Wemake" }];
};

export default function Home() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Dream Partners(가칭)</h2>
          <p className="text-xl font-light text-foreground">독서를 통해 꿈을 쫒는 사람들의 모임</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/gathering">Explore all products &rarr;</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
