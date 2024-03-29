module.exports = {
    baseUrl: process.env.BASE_URL,
    apiHost: process.env.API_HOST,
    coatDir: process.env.COAT_DIR,
    defaultForumId: "Discourse",
    forum: {
    	"Vanilla": {
    		"baseUrl": process.env.FORUM_VANILLA_BASE_URL,
    		"signInPath": "/entry/signin",
    		"profilePath": "/profile/%s/%s",
    		"topicPath": "/discussion/%s",
    		"privateMessagePath": "/messages/add",
            "apiPath" : "/api",
            "categories": {
                "enlistments": 62,
            }
		  },
      "SMF": {
          "baseUrl": process.env.FORUM_SMF_BASE_URL,
          "topicPath": "/?topic=%s.0"
      },
      "Discourse": {
          "baseUrl": process.env.FORUM_DISCOURSE_BASE_URL,
          "signInPath": "/login",
          "topicPath": "/t/%s",
          "profilePath": "/user-by-id/%s/summary",
          "groupPath": "/g/%s"
      }
    },
    sigUrl: process.env.SIG_URL,
    wikiUrl: process.env.WIKI_URL,
    v3Url: process.env.PERSONNEL_V3_URL
};
