import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const tdLabel = "padding:10px 0;color:#A89870;font-size:10px;text-transform:uppercase;letter-spacing:2px;width:32%";
const tdValue = "padding:10px 0;color:#EDE5D0;font-size:13px";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { firstName, lastName, email, phone, interest, message } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const optionalRows = [
      phone ? `<tr><td style="${tdLabel}">Phone</td><td style="${tdValue}">${phone}</td></tr>` : "",
      interest ? `<tr><td style="${tdLabel}">Interest</td><td style="${tdValue}">${interest}</td></tr>` : "",
      message
        ? `<tr><td style="${tdLabel};vertical-align:top">Message</td><td style="${tdValue};line-height:1.6">${message.replace(/\n/g, "<br>")}</td></tr>`
        : "",
    ]
      .filter(Boolean)
      .join("");

    await resend.emails.send({
      from: "Monarch Group LV <concierge@send.monarchgrouplv.com>",
      to: "concierge@monarchgrouplv.com",
      replyTo: email,
      subject: "New Private Inquiry — Monarch Group LV",
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#080808;color:#EDE5D0;padding:40px;">
          <div style="border-bottom:1px solid #B8942A;padding-bottom:20px;margin-bottom:30px;">
            <h1 style="font-family:Georgia,serif;color:#B8942A;font-size:16px;letter-spacing:4px;margin:0;text-transform:uppercase;">
              MONARCH GROUP LV
            </h1>
            <p style="font-size:10px;color:#A89870;letter-spacing:3px;text-transform:uppercase;margin:6px 0 0;">
              New Private Inquiry
            </p>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="${tdLabel}">Name</td>
              <td style="${tdValue}">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="${tdLabel}">Email</td>
              <td style="${tdValue}">${email}</td>
            </tr>
            ${optionalRows}
          </table>
          <div style="border-top:1px solid rgba(184,148,42,0.3);margin-top:32px;padding-top:20px;">
            <p style="font-size:9px;color:#A89870;letter-spacing:2px;text-transform:uppercase;margin:0;">
              Monarch Group LV LLC · 6130 W Flamingo Rd, Suite 409 · Las Vegas, NV 89103
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }
}
