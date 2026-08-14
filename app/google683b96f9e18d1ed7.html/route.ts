export async function GET() {
  return new Response('google-site-verification: google683b96f9e18d1ed7.html', {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
