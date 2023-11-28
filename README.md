<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/LostArrows27/aratamete-spotify">
    <img src="https://github.com/LostArrows27/aratamete-discord/assets/97510841/a8913c40-96c3-4bce-b688-ac28903757dd" alt="Logo" width="220" height="220">
  </a>
  <h3>Aratamete Discord</h3>
<div>A "minimal" version of Discord</div>
<div align="center">
    <a href="https://github.com/LostArrows27/aratamete-discord/issues">Report Bug</a>
    ·
    <a href="https://github.com/LostArrows27/aratamete-discord/pulls">Request Feature</a>
  </div>
</div>


## 💭 About the project

- A communicate platform that allows users to communicate with each other via text, voice chat and video call for multiple purposes such as gaming, learning, and many more. 
- This project has been developed in around 1 month.


## 🧑‍💻 Members - Roles

- **Nguyễn Thành Dũng - [LostArrows27](https://github.com/LostArrows27/)**
  - Authentication
  - Make database schema
  - Create server, invite to server
  - Manage server member, channel
  - Create text, voice, video channel

- **Nguyễn Nhật Minh - [Minhnhat0408](https://github.com/Minhnhat0408)**:
  - initial modal, server creation modal
  - Sidebar
  - Realtime message with socket.io
  - Video, audio chat with Livekit

## 🌐 Built With

[![My Skills](https://skillicons.dev/icons?i=nextjs,react,tailwind,prisma,typescript,mysql&perline=10)](https://skillicons.dev)
 <img width = "50" height ="50" alt="image" src="https://avatars.githubusercontent.com/u/69438833?s=200&v=4">
  <img width = "150" height ="50" alt="image" src="https://images.clerk.dev/uploaded/img_2P1JBLxZ0O7gcv16iXX0zjGIqHY.png">

- Front End: 
  - Framework: NextJS, ReactJs
  - Library: TailwindCSS, Typescript, Prisma, Livekit, Uploadthing
- Back End:
  - Authentication: ClerkJS 
  - Database: MySQL 
- Hosting:
  - Front End: Vercel
  - Back End: PlanetScale
  - File: UploadThing
  - Database: PlanetScale 

## 🖥️ Features 

- Login with Google, Discord or email using Clerk
- Create server, manage server, member and channel
- Chat group, chat directly with member
- Voice chat, video call with other
- Invite member to servers

## 🖼️ Preview UI

#### Demo website available at [Aratame Discord](https://aratamete-discord.vercel.app/)

<div align="center">
    <img src = "https://github.com/LostArrows27/aratamete-discord/assets/97510841/13abb645-d7eb-4e0a-805e-936c836ad999">
</div>

#### Voice chat UI 

<div align="center">
<img alt="image" src="https://github.com/LostArrows27/aratamete-discord/assets/97510841/8b8e4820-a970-4a28-9ad0-4ae8e34a84f7">
</div>


#### Video call UI

<div align="center">
  <img width="1280" alt="Screenshot 2023-11-27 154102" src="https://github.com/LostArrows27/aratamete-discord/assets/97510841/8c2a6ae7-eab4-4294-a0c1-1d7cd87f6c26">
</div>

  



## 💽 Set up and Local Development

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

## 🛂 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🪪 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## ☎️ Contact

Nguyễn Nhật Minh - [@Minhatt048](https://www.facebook.com/Minhatt048/) - kurominhnhat@gmail.com

Nguyễn Thành Dũng - [@LostArrows27](https://www.facebook.com/Romcomgasukidesu) - thelastofus2isnuts@gmail.com

Project Link: [https://github.com/LostArrows27/aratamete-discord](https://github.com/LostArrows27/aratamete-discord)

<p align="right">(<a href="#readme-top">back to top</a>)</p>