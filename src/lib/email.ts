import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// --- EMAIL 1: REGISTRATION CONFIRMATION (FORMAL) ---
export async function sendRegistrationEmail(
  email: string, 
  name: string, 
  phone: string, 
  department: string
) {
  const mailOptions = {
    from: '"IEEE Jadavpur University" <jaduniv.ieee@gmail.com>',
    to: email,
    subject: "Registration Confirmation: Hello IEEE 2026",
    html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #e0e0e0; background-color: #ffffff;">
        <h2 style="color: #003366; border-bottom: 2px solid #003366; padding-bottom: 10px; margin-bottom: 30px;">Registration Confirmed</h2>
        
        <p style="font-size: 16px; color: #333;">Dear <strong>${name}</strong>,</p>
        
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          We are pleased to confirm your registration for Hello 2026 organized by IEEE JUSB. Your details have been recorded in our system.
        </p>
        
        <div style="background-color: #f8f9fa; border-left: 4px solid #003366; padding: 20px; margin: 30px 0;">
          <h3 style="margin-top: 0; color: #003366; font-size: 18px; margin-bottom: 15px;">Participant Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 5px 0; color: #555; width: 120px;"><strong>Name:</strong></td>
              <td style="padding: 5px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 5px 0; color: #555;"><strong>Email:</strong></td>
              <td style="padding: 5px 0; color: #333;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 5px 0; color: #555;"><strong>Phone:</strong></td>
              <td style="padding: 5px 0; color: #333;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 5px 0; color: #555;"><strong>Department:</strong></td>
              <td style="padding: 5px 0; color: #333;">${department}</td>
            </tr>
          </table>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Please retain this email for your records. Further instructions regarding the event schedule will be communicated shortly.
        </p>
        
        <br/>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 14px; color: #666;">
          Kind regards,<br/>
          <strong>IEEE JUSB</strong>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Registration email sent to ${email}`);
    return true;
  } catch (error) {
    console.error("Error sending registration email:", error);
    return false;
  }
}

// --- EMAIL 2: ATTENDANCE & LUNCH COUPON (FORMAL) ---
export async function sendAttendanceEmail(
  email: string, 
  name: string, 
  phone: string
) {
  const mailOptions = {
    from: '"IEEE Jadavpur University" <jaduniv.ieee@gmail.com>',
    to: email,
    subject: "Attendance Recorded & Lunch Voucher",
    html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #e0e0e0; background-color: #ffffff;">
        <h2 style="color: #28a745; border-bottom: 2px solid #28a745; padding-bottom: 10px; margin-bottom: 30px;">Attendance Recorded</h2>
        
        <p style="font-size: 16px; color: #333;">Dear <strong>${name}</strong>,</p>
        
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          This email confirms that your attendance for the event has been successfully marked.
        </p>
        
        <div style="border: 2px dashed #555; background-color: #fcfcfc; padding: 25px; margin: 30px 0; text-align: center;">
          <h3 style="margin-top: 0; color: #333; font-size: 20px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">OFFICIAL LUNCH VOUCHER</h3>
          <p style="color: #666; font-size: 14px; margin-bottom: 20px;">Please present this digital voucher at the designated counter to claim your meal.</p>
          
          <div style="text-align: left; max-width: 300px; margin: 0 auto; border-top: 1px solid #ddd; padding-top: 15px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 8px 0; font-size: 12px; color: #888;">Attendance Recorded on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>

        <p style="font-size: 14px; color: #cc0000; font-weight: bold; text-align: center; background-color: #fff0f0; padding: 10px; border-radius: 4px;">
          Note: Please keep this email safe. It serves as your verification for lunch distribution.
        </p>
        
        <br/>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 14px; color: #666;">
          Kind regards,<br/>
          <strong>IEEE JUSB</strong>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Attendance email sent to ${email}`);
    return true;
  } catch (error) {
    console.error("Error sending attendance email:", error);
    return false;
  }
}
