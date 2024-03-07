"use client";

import { Button } from "../ui/button";

import { createPayment } from "@/actions/payment";
import { useRouter } from "next/navigation";

type PaymentButtonProps = {
  amount: number;
  name: string;
};

const PaymentButton = ({ amount, name }: PaymentButtonProps) => {
  const router = useRouter();

  const onSubmit = async () => {
    const href = await createPayment({ amount, name });

    if (href) {
      router.push(href);
    }
  };

  return (
    <form action={onSubmit}>
      <Button className="cursor-pointer" type="submit">
        Buy
      </Button>
    </form>
  );
};

export default PaymentButton;
