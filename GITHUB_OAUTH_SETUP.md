# GitHub OAuth Setup Guide

This guide will help you set up GitHub OAuth authentication for your TechBlog application.

## Step 1: Create a GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name**: TechBlog (or any name you prefer)
   - **Homepage URL**: `http://localhost:3000`
   - **Application description**: A blog application with GitHub OAuth
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`

4. Click "Register application"
5. After registration, you'll see your app details page

## Step 2: Get Your Credentials

1. On your OAuth app page, you'll see:
   - **Client ID**: Copy this value
   - **Client Secret**: Click "Generate a new client secret" and copy the generated secret

⚠️ **Important**: Keep your Client Secret secure and never commit it to version control!

## Step 3: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
GITHUB_CLIENT_ID=your_actual_client_id_here
GITHUB_CLIENT_SECRET=your_actual_client_secret_here
```

Example:
```env
GITHUB_CLIENT_ID=Iv1.a629723c5e6b3f8d
GITHUB_CLIENT_SECRET=8f2a7b9c4d6e8f1a3b5c7d9e2f4a6b8c0d2e4f6a
```

## Step 4: Run Your Application

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. Click "Sign in with GitHub" to test the authentication

## Features Included

### ✅ GitHub OAuth Authentication
- Secure login/logout functionality
- User session management
- Automatic redirect handling

### ✅ User Profile Display
- GitHub profile picture
- Username and display name
- Email address (if public)
- Profile page at `/profile`

### ✅ Protected Content
- Authentication-aware components
- Conditional rendering based on login status
- Secure API routes

### ✅ Modern UI/UX
- Responsive design
- Dark mode support
- Loading states
- Smooth transitions

## File Structure

```
src/
├── app/
│   ├── api/auth/[...nextauth]/route.js    # NextAuth configuration
│   ├── auth/signin/page.js                # Custom sign-in page
│   ├── profile/page.js                    # User profile page
│   ├── layout.js                          # Root layout with AuthProvider
│   └── page.js                            # Home page with header
├── components/
│   ├── AuthProvider.js                    # Session provider wrapper
│   └── Header.js                          # Navigation with auth
└── ...
```

## Troubleshooting

### Common Issues:

1. **"Authorization callback URL mismatch"**
   - Ensure your GitHub OAuth app callback URL matches exactly: `http://localhost:3000/api/auth/callback/github`

2. **"Invalid client_id or client_secret"**
   - Double-check your credentials in `.env.local`
   - Make sure there are no extra spaces or quotes

3. **"NEXTAUTH_URL environment variable not set"**
   - Ensure `NEXTAUTH_URL=http://localhost:3000` is in your `.env.local`

4. **Session not persisting**
   - Check that `NEXTAUTH_SECRET` is set correctly
   - Clear your browser cookies and try again

### Production Deployment:

When deploying to production:

1. Update your GitHub OAuth app settings:
   - Homepage URL: `https://yourdomain.com`
   - Authorization callback URL: `https://yourdomain.com/api/auth/callback/github`

2. Update environment variables:
   - `NEXTAUTH_URL=https://yourdomain.com`
   - Keep the same `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`

## Security Best Practices

- ✅ Never commit `.env.local` to version control
- ✅ Use different OAuth apps for development and production
- ✅ Regularly rotate your client secrets
- ✅ Monitor your GitHub OAuth app usage

## Next Steps

Now that GitHub OAuth is set up, you can:

1. Add user roles and permissions
2. Create user-specific content
3. Implement commenting system
4. Add social features
5. Integrate with GitHub API for more features

Happy coding! 🚀
