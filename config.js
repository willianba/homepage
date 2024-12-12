const CONFIG = {
  // the category, name, key, url, search path and color for your commands
  // if none of the specified keys are matched, the '*' key is used
  commands: [
    [null, "DuckDuckGo", "*", "https://duckduckgo.com", "/?q={}", "#111"],
    ["Social", "Instagram", "i", "https://instagram.com", "/{}", "#e1306c"],
    ["Social", "Reddit", "r", "https://reddit.com", "/search?q={}", "#FF4500"],
    ["Social", "Twitch", "t", "https://twitch.tv", null, "#6441A4"],
    ["Social", "X", "x", "https://x.com", "/search?q={}", "#14171a"],
    [
      "Social",
      "YouTube",
      "y",
      "https://youtube.com",
      "/results?search_query={}",
      "#cd201f",
    ],
    [
      "Tools",
      "daily.dev",
      "d",
      "https://app.daily.dev",
      "/search?q={}",
      "#7147ed",
    ],
    ["Tools", "expenso", "e", "https://expenso.deno.dev", null, "#202234"],
    [
      "Tools",
      "GitHub",
      "g",
      "https://github.com",
      "/search?utf8=✓&q={}",
      "#333",
    ],
  ],

  // give suggestions as you type
  suggestions: true,

  // max amount of suggestions that will ever be displayed
  suggestionsLimit: 5,

  // the order and limit for each suggestion influencer
  // "Default" suggestions come from CONFIG.defaultSuggestions
  // "DuckDuckGo" suggestions come from the duck duck go search api
  // "History" suggestions come from your previously entered queries
  influencers: [
    { name: "Default", limit: 2 },
    { name: "History", limit: 3 },
    { name: "DuckDuckGo", limit: 5 },
  ],

  // default search suggestions for the specified queries
  defaultSuggestions: {
    g: [
      "g/willianba",
      "g/willianba?tab=repositories",
      "g/issues",
      "g/pulls",
      "gist.github.com",
    ],
    r: ["r/r/unixporn", "r/r/startpages", "r/r/webdev", "r/r/programming"],
  },

  // instantly redirect when a key is matched
  // put a space before any other queries to prevent unwanted redirects
  instantRedirect: false,

  // open queries in a new tab
  newTab: false,

  // dynamic background colors when command domains are matched
  colors: true,

  // the delimiter between the key and your search query
  // e.g. to search GitHub for potatoes you'd type "g:potatoes"
  searchDelimiter: ":",

  // the delimiter between the key and a path
  // e.g. type "r/r/unixporn" to go to "reddit.com/r/unixporn"
  pathDelimiter: "/",

  // the delimiter between the hours and minutes in the clock
  clockDelimiter: "&nbsp;",
  // note: you can pass in your search query via the q query param
  // e.g. going to file:///path/to/tilde/index.html?q=hamsters is equivalent
  // to typing "hamsters" and pressing enter
};
