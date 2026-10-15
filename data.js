const profile = {
  name: "Mayank Nagesh Koli",
  tagline: "Game Programmer From India",
  about: "I'm a game programmer, building solo and team projects in Unity and Godot. I've spent a lot of time on multiplayer, from ENet to Steam peer to peer. I usually end up leading programming. I'm actively looking for my next role.",
  email: "mayankkoli.dev@gmail.com",
  discord: "737328625350868992",
  links: [
    { label: "GitHub", url: "https://github.com/Mayankkoli18" },
    { label: "itch.io", url: "https://okiromori.itch.io/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mayank-koli-224580253/" }
  ]
}

const skills = {
  "Engines": ["Godot 4", "Unity"],
  "Languages": ["GDScript", "C#", "GDShader"],
  "Design": ["Game design", "Mechanics design"],
  "Multiplayer": ["ENet", "Steam multiplayer"],
  "3D and CAD": ["Blender", "AutoCAD", "Fusion 360"],
  "Art and audio": ["Krita", "GIMP", "Bosca Ceoil", "LMMS"]
}

const slides = [
  { title: "Nimi Pelille", folder: "nimi-pelille", link: "https://ankkalab.itch.io/nimi-pelille" },
  { title: "Food for Fairies", folder: "food-for-fairies", link: "https://store.steampowered.com/app/4579910/Food_for_Fairies/" },
  { title: "Saimapeli", folder: "saimapeli", link: "https://milk4ppl.itch.io/saimapeli" }
]

const role = "Lead programmer, game designer and project manager"

const projects = [
  {
    name: "Nimi Pelille",
    pitch: "A mini game collection where the game entity tries to trick you for its own amusement.",
    about: "Every mini game has a twist, and you shouldn't trust everything the game tells you. Art and voice by Milka, coding by me.",
    status: "Released",
    role: role,
    tools: "Godot",
    event: "Brackeys Game Jam 2026.2",
    result: "",
    timeline: "",
    link: "https://ankkalab.itch.io/nimi-pelille",
    linkLabel: "Play on itch.io",
    imgs: 3,
    vids: 0,
    problems: [],
    major: true
  },
  {
    name: "Food for Fairies",
    pitch: "A cozy point and click adventure where you play as fairy planning an end of summer feast.",
    about: "You play a tiny fairy gathering ingredients around the forest for an end of summer feast, talking to other fairies to find out what they like to eat.",
    status: "Releasing Oct 2026",
    role: "Game programmer",
    tools: "Godot",
    event: "",
    result: "",
    timeline: "",
    link: "https://store.steampowered.com/app/4579910/Food_for_Fairies/",
    linkLabel: "Wishlist on Steam",
    imgs: 4,
    vids: 0,
    problems: [],
    major: true
  },
  {
    name: "The Last Terminal",
    pitch: "Catch the train before he catches you.",
    about: "A story driven puzzle horror run. Find five heart shards, dodge a tentacle and make the run for last train.",
    status: "Released",
    role: role,
    tools: "Godot",
    event: "Godot India Community Game Jam 3",
    result: "Ranked 1st",
    timeline: "",
    link: "https://okiromori.itch.io/last-terminal",
    linkLabel: "Play on itch.io",
    imgs: 3,
    vids: 0,
    problems: [],
    major: true
  },
  {
    name: "Saimapeli",
    pitch: "A small interactive story about a girl named Saima and her friends.",
    about: "Quiet life in the outskirts of a suburb, shared with a close-knit group of friends. Art by Milka, programming by me.",
    status: "In progress",
    role: "Game programmer",
    tools: "Godot",
    event: "",
    result: "",
    timeline: "",
    link: "https://milk4ppl.itch.io/saimapeli",
    linkLabel: "View on itch.io",
    imgs: 3,
    vids: 0,
    problems: [],
    major: true
  },
  {
    name: "Apart",
    pitch: "An 80s style top-down shooter against gigantic monsters.",
    about: "A short adventure to take down the thing ruining the hero's life. I did the programming, art and music myself.",
    status: "Released",
    role: "Solo developer: programming, art and music",
    tools: "Godot",
    event: "Godot Wild Jam #95",
    result: "",
    timeline: "",
    link: "https://okiromori.itch.io/apart",
    linkLabel: "Play on itch.io",
    imgs: 3,
    vids: 0,
    problems: [],
    major: true
  },
  {
    name: "Snowcall",
    pitch: "Light thermal beacons across a frozen world to rescue your companion.",
    about: "A short low-poly 3D adventure where a radio guides you through a post-apocalyptic perma-frost. Available for Windows, macOS and Linux.",
    status: "Released",
    role: role,
    tools: "Godot",
    event: "Wasteland Jam 2",
    result: "Ranked 6th overall and 2nd in atmosphere",
    timeline: "",
    link: "https://ankkalab.itch.io/snowcall",
    linkLabel: "Download on itch.io",
    imgs: 3,
    vids: 0,
    problems: [],
    major: true
  },
  {
    name: "DRDS",
    pitch: "A multiplayer card game built on Steam peer to peer.",
    about: "Fight against other players in a UNO-like card game with power ups and poker patterns to help you clear out your cards fast and interrupt other players.",
    status: "Paused due to lack of resources",
    role: role,
    tools: "Godot",
    tech: "Steam peer to peer multiplayer",
    event: "",
    result: "",
    timeline: "",
    link: "",
    linkLabel: "",
    imgs: 2,
    vids: 2,
    problems: [],
    major: true
  },
  {
    name: "Cat Catch",
    pitch: "A multiplayer game built on Steam multiplayer.",
    about: "A multiplayer tag game based heavily on movement mechanics like b-hop and grappling",
    status: "In progress",
    role: role,
    tools: "Godot",
    tech: "Steam multiplayer",
    event: "",
    result: "",
    timeline: "",
    link: "",
    linkLabel: "",
    imgs: 2,
    vids: 1,
    problems: [],
    major: true
  },
  {
    name: "Tempus Tide",
    pitch: "2D pixel art island rescue game made for the Play Store, with AdMob integration.",
    tools: "Unity",
    status: "Released",
    event: "",
    result: "",
    major: false
  },
  {
    name: "Oculi-0",
    pitch: "A simulator that shows various types of color blindness using shaders.",
    tools: "Unity",
    status: "",
    event: "",
    result: "",
    major: false
  },
  {
    name: "Mobi-L",
    pitch: "Multiple games for the custom Mobi-L device, plus a new Bluetooth control system to talk to their machines.",
    tools: "Unity",
    status: "",
    event: "",
    result: "",
    major: false
  },
  {
    name: "Arohana",
    pitch: "Endless 2D jump up game made in 2 days.",
    tools: "Godot",
    status: "Released",
    event: "Kenney Jam",
    result: "",
    major: false
  },
  {
    name: "Sorrower's Labyrinth",
    pitch: "3D horror maze game.",
    tools: "Godot",
    status: "Released",
    event: "Godot India Community Game Jam 2",
    result: "Ranked 3rd",
    major: false
  }
]

const models = {
  folder: "models",
  imgs: 4,
  vids: 0,
  titles: []
}