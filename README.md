<div align="center">
  <a href="https://github.com/LostArrows27/aratamete-spotify">
    <img src="https://github.com/LostArrows27/aratamete-discord/assets/97510841/a8913c40-96c3-4bce-b688-ac28903757dd" alt="Logo" width="220" height="220">
  </a>
  <h3>Aratamete Discord</h3>
<div>A "minimal" version of Discord</div>
</div>



## About the project

- This is a a SIMPLE chat application that allows users to communicate with each other via text, voice chat and video call.

## Members 

- **[LostArrows27](https://github.com/LostArrows27/)**

- **[Minhnhat0408](https://github.com/Minhnhat0408)**

## Built with

[![My Skills](https://skillicons.dev/icons?i=nextjs,react,tailwind,prisma,typescript,mysql&perline=10)](https://skillicons.dev)

- Project is built with NextJS, React, Typescript, TailwindCSS, Prisma, MySQL and Socket.IO

## Preview

### You guys can view demo website at [https://aratamete-spotify.vercel.app/](https://aratamete-spotify.vercel.app/)

<div align="center">
    <img src = "https://github.com/LostArrows27/aratamete-discord/assets/97510841/13abb645-d7eb-4e0a-805e-936c836ad999">
</div>

### Voice chat UI 

<div align="center">
<img alt="image" src="https://github.com/LostArrows27/aratamete-discord/assets/97510841/8b8e4820-a970-4a28-9ad0-4ae8e34a84f7">
</div>


### Video call UI

<div align="center">
  <img width="1280" alt="Screenshot 2023-11-27 154102" src="https://github.com/LostArrows27/aratamete-discord/assets/97510841/8c2a6ae7-eab4-4294-a0c1-1d7cd87f6c26">
</div>

  

## Features 

- Login with Google, Discord or email using Clerk
- Create server, manage server, member and channel
- Chat group, chat directly with member
- Voice chat, video call with other
- Invite member to servers

## Set up and Local Development

1. Fork this project
2. Create a new MySQL database on PlanetScale 
3. Create your application to authentication on Clerk
4. Create your application on UploadThing and LiveKit
5. Create the `.env.local` file and add these variables that missing below 

- Default the ```NEXT_PUBLIC_SITE_URL``` is ```http://localhost:3000```

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=s
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DATABASE_URL=
PLANETSCALE_USERNAME=
PLANETSCALE_PASSWORD=
PLANETSCALE_PASSWORD_HASH=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
NEXT_PUBLIC_SITE_URL=
```

4. Run these command and open `localhost:3000` in your browser

```bash
npm install ; npm run dev
```
