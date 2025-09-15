# GreenTrack Deployment Checklist

## Pre-Deployment Steps

### 1. Add Required Images
Place these images in `assets/images/` folder:
- hero-waste-truck.avif (or .jpg)
- household-sorting.jpg
- commercial-bins.jpg
- recycling-center.avif (or .jpg)
- ewaste.jpg
- sorting-guide.jpg
- community-cleanup.jpg

### 2. Update Contact Information
- Replace placeholder phone number `+254 700 000 000` in contact.html
- Update social media links in all page footers:
  - LinkedIn: https://www.linkedin.com/
  - X/Twitter: https://twitter.com/
  - Facebook: https://facebook.com/
  - WhatsApp: https://wa.me/254700000000

### 3. Test Locally
- Open index.html in browser
- Check all pages load correctly
- Verify navigation works
- Test contact form validation
- Ensure responsive design works on mobile

## Netlify Deployment Options

### Option A: Drag & Drop
1. Go to netlify.com and sign up/login
2. Drag the entire "Week 8 Assignment" folder to deploy area
3. Get your live URL

### Option B: Git Integration
1. Create GitHub repository
2. Upload files to repository  
3. Connect repository to Netlify
4. Auto-deploy on every Git push

## Post-Deployment
- [ ] Test live site functionality
- [ ] Verify all images load
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Set up form notifications (see below)
- [ ] Update README with live URL

## Email Setup for Contact Form

### Configure Netlify Form Notifications
1. Go to your Netlify site dashboard
2. Navigate to: Site settings → Forms → Form notifications
3. Click "Add notification" → "Email notification"
4. Set:
   - **Email to notify**: nelsonmaranda2@gmail.com
   - **Form**: contact (auto-detected)
   - **Subject**: New GreenTrack Contact Form Submission
5. Save the notification

### Form Features Included:
- ✅ Client-side validation (immediate feedback)
- ✅ Spam protection (honeypot field)
- ✅ Thank you page redirect
- ✅ Email notifications to nelsonmaranda2@gmail.com
- ✅ Form submissions stored in Netlify dashboard

### Testing the Form:
1. Deploy to Netlify first
2. Fill out and submit the contact form on live site
3. Check nelsonmaranda2@gmail.com for notification email
4. Verify submission appears in Netlify dashboard under Forms

## Custom Domain (Optional)
- Purchase domain from registrar
- In Netlify: Site settings → Domain management → Add custom domain
- Update DNS records as instructed

## Notes
- Site will have a random Netlify URL initially
- You can change the site name in Netlify settings
- HTTPS is automatically enabled
- Site rebuilds automatically with Git integration
