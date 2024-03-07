"use server";

export const createPayment = async (paymentData: {
  name: string;
  amount: number;
}) => {
  const { amount, name } = paymentData;

  const res = await fetch(
    "https://api.monobank.ua/api/merchant/invoice/create",
    {
      method: "POST",
      body: JSON.stringify({
        amount: 1,
        ccy: 840,
        merchantPaymInfo: {
          reference: "84d0070ee4e44667b31371d8f8813944",
          destination: "Платити щоб писати?",
          comment: "А ти кмітливий :)",
          basketOrder: [
            {
              name,
              qty: 1,
              sum: amount,
              unit: "послуга",
              icon: "string",
              code: "d21da1c47f3c45fca10a10c32518bdeb",
              barcode: "string",
              header: "string",
              footer: "string",
              uktzed: "string",
            },
          ],
        },
        redirectUrl: "http://localhost:3000",
        webHookUrl: "http://localhost:3000/api/mono",
      }),
      headers: {
        "X-Token": process.env.MONOAPI_X_TOKEN!,
      },
    },
  );

  const data = await res.json();

  return data.pageUrl;
};
