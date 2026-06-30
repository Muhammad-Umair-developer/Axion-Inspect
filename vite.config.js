import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Resend } from 'resend'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-contact',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/contact' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', async () => {
              try {
                const payload = JSON.parse(body);
                const resend = new Resend(process.env.RESEND_API_KEY);
                const { data, error } = await resend.emails.send({
                  from: 'onboarding@resend.dev',
                  to: 'srmech.electinspection16@gmail.com',
                  subject: payload.subject || 'New Contact Form Submission',
                  html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${payload.name}</p>
                    <p><strong>Email:</strong> ${payload.email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${payload.message.replace(/\n/g, '<br/>')}</p>
                  `,
                });
                if (error) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: error.message }));
                } else {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, data }));
                }
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
  server: {
    port: 5173,
    open: true,
  },
})
