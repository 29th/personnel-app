define(function () {
    return {
        baseUrl: "http://personnel.29th.org",
        apiHost: "http://api.29th.org",
        coatDir: "http://new.29th.org/coats",
        forum: {
        	"Vanilla": {
        		"baseUrl": "/forums",
        		"signInPath": "/entry/signin",
        		"profilePath": "/profile/%s/%s",
        		"topicPath": "/discussion/%s",
        		"privateMessagePath": "/messages/add"
			    },
        	"SMF": {
        		"baseUrl": "http://29th.org",
        		"profilePath": "/personnel/file/?u=%s/%s",
        		"topicPath": "/forums/?topic=%s"
			    },  
        	"PHPBB": {
        		"baseUrl": "",
        		"profilePath": "%s",
        		"topicPath": "%s"
			    }
        },
        wikiUrl: "http://29th.org/wiki",
        vanillaCategoryEnlistments: 62
    };
});