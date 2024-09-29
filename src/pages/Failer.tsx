import { Card, CardContent } from "../components/ui/card";


function Failer() {
  
  return (
    <div className="bg-gray-100 px-32 h-screen flex justify-center items-center">
      <Card className="w-fit px-10 py-16">
        <CardContent className="space-y-8">
          <div className="flex justify-center text-red-700 text-5xl font-bold">
            x
          </div>
          <div className="font-bold text-3xl">
            Payment Failed
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Failer;
