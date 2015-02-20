define(function () {
    return {
        baseUrl: "http://personnel.29th.org",
        apiHost: "http://api.29th.org",
        coatDir: "http://new.29th.org/coats",
        forum: {
        	"Vanilla": {
        		"baseUrl": "http://forums.29th.org",
        		"signInPath": "/entry/signin",
        		"profilePath": "/profile/%s/%s",
        		"topicPath": "/discussion/%s",
        		"privateMessagePath": "/messages/add"
<<<<<<< HEAD
			    },
          "SMF": {
                "baseUrl": "http://29th.org/forums",
                "topicPath": "/?topic=%s.0"
          },  
        	"PHPBB": {
        		"baseUrl": "",
        		"profilePath": "%s",
        		"topicPath": "%s"
			    }
       },
=======
			},
            "SMF": {
                "baseUrl": "http://29th.org/forums",
                "topicPath": "/?topic=%s.0"
            }
        },
>>>>>>> 046243ba88e0668fb091f605ef87decff365f53b
        wikiUrl: "http://29th.org/wiki",
        vanillaCategoryEnlistments: 62
    };
});