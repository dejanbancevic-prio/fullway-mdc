// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend();

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName, subject, country, message } = await req.json();

    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: "dejan.bancevic@prioritytire.com",
      subject: subject || "New Contact Message",
      text: `
        From: ${firstName} ${lastName}
        Email: ${email}
        Country: ${country}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
