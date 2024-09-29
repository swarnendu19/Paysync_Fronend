import { CircleCheckBig } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useRecoilValue } from "recoil";
import { enteredAmout } from "../store/atom";

function Success() {
  const amount = useRecoilValue(enteredAmout);
  return (
    <div className="bg-gray-100 px-32 h-screen flex justify-center items-center">
      <Card className="w-fit px-10 py-20">
        <CardContent className="space-y-8">
          <div className="flex justify-center">
            <CircleCheckBig
              width={100}
              height={100}
              className="text-green-500"
            />
          </div>
          <div className="text-3xl font-semibold">
            Successfully paid <span className="text-blue-700 font-bold">{amount}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Success;
