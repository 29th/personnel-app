define(function () {
    return {
        baseUrl: "http://personnel.29th.org",
        apiHost: "/personnel-api",
        coatDir: "/personnel-api/coats",
        forum: {
        	"Vanilla": {
        		"baseUrl": "/forums",
        		"signInPath": "/entry/signin",
        		"profilePath": "/profile/%s/%s",
        		"topicPath": "/discussion/%s",
        		"privateMessagePath": "/messages/add"
<<<<<<< HEAD
			    },
        	"SMF": {
        		"baseUrl": "http://29th.org",
        		"profilePath": "/personnel/file/?u=%s/%s",
        		"topicPath": "/forums/?topic=%s",
			    }
=======
			}
>>>>>>> 21b2c193937b2bd9b715512883af430323b7520f
        },
        wikiUrl: "http://29th.org/wiki",
        vanillaCategoryEnlistments: 62
    };
});