# Setup Guide: How to Activate Your Website Contact Form

This guide shows you how to connect your website's contact form to your email inbox. Follow these 2 simple steps:

---

### Step 1: Get Your API Key from Resend

1. Go to **[https://resend.com/](https://resend.com/)** and click **Sign In** (or **Sign Up**).
2. Log in using your email address: 
   👉 **`srmech.electinspection16@gmail.com`**
3. Once logged in, click **API Keys** on the left menu.
4. Click the blue **Create API Key** button.
   - Set the name to: `Axion Form`
   - Set permissions to: `Full Access`
5. Click **Create** (or **Add**).
6. **Copy the key** that is generated (it will look like `re_abc123...`). 
   *Note: Save this key immediately in a secure place. You cannot see it again once you close the window.*

---

### Step 2: Add the Key to Your `.env` File

1. Locate the website folder on your computer.
2. Find the file named **`.env`** and open it with any text editor (such as Notepad).
3. Paste your API Key after the equals sign (`=`), so it looks like this:
   ```env
   RESEND_API_KEY=re_your_copied_key_here
   ```
4. Save and close the file.

---

🎉 **You're Done!** 
Any new messages submitted via your website's contact form will now be sent straight to **`srmech.electinspection16@gmail.com`**.
