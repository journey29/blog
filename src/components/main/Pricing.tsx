import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Title } from "../ui/title";
import { ScrollArea } from "../ui/scroll-area";
import PaymentButton from "./PaymentButton";

import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mb-16 space-y-5 sm:mb-24">
      <Title title="Pricing" />
      <div className="flex flex-wrap items-center justify-center gap-10">
        <PricingItem
          title="Starter"
          price={9}
          features={["10 stories", "Change stories"]}
        />
        <PricingItem
          title="Growth"
          price={20}
          features={["30 stories", "Change stories"]}
        />
        <PricingItem
          title="Premium"
          price={40}
          features={["Infinite stories", "Change stories"]}
        />
      </div>
    </div>
  );
};

export default Pricing;

type PricingItemProps = {
  title: string;
  price: number;
  features: string[];
};

const PricingItem = ({ title, price, features }: PricingItemProps) => {
  return (
    <Card className="flex h-[330px] w-full max-w-[320px] flex-col border-none bg-secondary px-5 py-1 shadow-none">
      <CardHeader>
        <h4 className="text-xl font-bold">{title}</h4>
        <div className="mb-4">
          <span className="text-2xl font-bold">{price}$</span>
          <span className="text-gray-600">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[120px]">
          <ul className="space-y-2 overflow-y-auto">
            {features.map((feature, index) => (
              <li className="flex items-center gap-2" key={index}>
                <CheckCircle2 size={18} className="text-secondary-foreground" />
                <p className="text-sm">{feature}</p>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
      <CardFooter className="mt-auto">
        <PaymentButton amount={price * 100} name={title} />
      </CardFooter>
    </Card>
  );
};
