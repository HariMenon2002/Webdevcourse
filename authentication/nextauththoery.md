## Next auth

Nextauth is a library that lets you do authentication in Next.js. Authentication can be done mainly via providers. There are 3 main types of providers.  
1. OAuth(Login with Google)
2. Email(Passwordless Email login via email OTP)
3. Credentials(Your own stratergy ie it could be email+password, phone number, lgin with metamask etc.)

What is Session Data?
Session data is information about a user that is stored while they are interacting with your website. It usually includes things like the user's login status, their name, or any other data that needs to be remembered during their visit.
What is a Session Provider?
The session provider is like a "manager" that keeps track of this session data across your website. It makes sure that wherever you go on the website, the information about who you are (e.g., whether you're logged in) is available.
What is Authentication State?
Authentication state refers to whether a user is logged in or not. It tells the website, "This user is recognized and has access to certain things" or "This user is not logged in and might need to log in."
What is Session State?
Session state is just another way to describe the current condition of the user's session. It includes the authentication state and any other data stored for that session.
Example in Practice
Imagine you're shopping online. You log in, and the website needs to remember who you are while you browse products. The session provider keeps track of your session data (like your login status and shopping cart) and makes sure this information is available as you move from page to page.
So, in Next.js, a Session Provider is a tool that ensures your app knows who the user is (or if they’re logged in) on every page of your site. It is typically used in user authentication and session management. The session provider makes session data available throughout your application, ensuring that user authentication state is accessible wherever needed. You generally wrap your entire application in a SessionProvider component in the _app.js file. This provider manages the session state and re-renders components when the session data changes.

The session provider manages user sessions, which can include handling JWT tokens, cookies, or other session data.
It also makes functions like signIn, signOut, and getSession available through hooks like useSession provided by NextAuth.js. You can access the session data in any component using the useSession hook.
