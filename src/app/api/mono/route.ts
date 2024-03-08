import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    invoiceId,
    status,
    failureReason,
    errCode,
    amount,
    ccy,
    finalAmount,
    createdDate,
    modifiedDate,
    reference,
  }: any = req.body;

  if (status === "created") {
    const existingInvoice = await db.invoice.create({
      data: {
        amount,
        ccy,
        createdDate,
        errCode,
        failureReason,
        finalAmount,
        modifiedDate,
        reference,
        status,
        id: invoiceId,
      },
    });

    if (existingInvoice) {
      return NextResponse.json({ error: "Invoice already exist!" });
    }
  }

  return NextResponse.json({ message: "Invoice created!" });
}
