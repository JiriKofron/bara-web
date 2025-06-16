export async function POST(request: Request) {
  const { recaptcha } = await request.json();

  const recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
  const requestHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const requestBody = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY || '',
    response: recaptcha,
  });

  const response = await fetch(recaptchaUrl, {
    method: 'POST',
    headers: requestHeaders,
    body: requestBody.toString(),
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
