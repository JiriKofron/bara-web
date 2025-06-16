import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message, website, timestamp } = await request.json();

    // Check honeypot field
    if (website) {
      return new Response(JSON.stringify({ error: 'Invalid submission' }), { status: 400 });
    }

    // Check timestamp (reject if form was filled in less than 3 seconds)
    const formLoadTime = parseInt(timestamp as string, 10);
    const submissionTime = Date.now();
    const timeSpent = submissionTime - formLoadTime;

    if (timeSpent < 3000) {
      // 3 seconds
      return new Response(JSON.stringify({ error: 'Please take your time to fill out the form' }), {
        status: 400,
      });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Kontaktní formulář psenicova.cz <barbora@psenicova.cz>',
      to: email,
      subject: `Nová zpráva z kontaktního formuláře od ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to send email' }),
      { status: 500 }
    );
  }
};
