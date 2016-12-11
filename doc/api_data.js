define({ "api": [
  {
    "type": "get",
    "url": "/api/items",
    "title": "List",
    "name": "items_list",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "success",
            "description": "<p>success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 6,\n        \"name\": \"條紋窄裙內搭褲-女\",\n        \"image\": [\n        \"http://s3.lativ.com.tw/i/18653/18653_L_61_1.jpg\",\n        \"http://s4.lativ.com.tw/i/18653/18653_L_62_0.jpg\"\n        ],\n        \"category\": \"內衣&內褲&襪子\",\n        \"sub_category\": \"褲襪・內搭褲\",\n        \"price\": \"168\",\n        \"brand\": \"lativ\",\n        \"pattern\": \"假兩件\",\n        \"target\": \"women\",\n        \"size\": null,\n        \"serial_no\": \"18653\",\n        \"created_at\": \"2016-12-11T12:47:42.000Z\",\n        \"updated_at\": \"2016-12-11T12:47:43.000Z\"\n    },\n    {\n        \"id\": 7,\n        \"name\": \"棉彈百搭褲-女\",\n        \"image\": [\n        \"http://s1.lativ.com.tw/i/18868/18868_L_61.jpg\",\n        \"http://s2.lativ.com.tw/i/18868/18868_L_62.jpg\"\n        ],\n        \"category\": \"褲裝&裙裝\",\n        \"sub_category\": \"長褲\",\n        \"price\": \"225\",\n        \"brand\": \"lativ\",\n        \"pattern\": \"緊身褲・窄管褲\",\n        \"target\": \"women\",\n        \"size\": null,\n        \"serial_no\": \"18868\",\n        \"created_at\": \"2016-12-11T12:47:42.000Z\",\n        \"updated_at\": \"2016-12-11T12:47:43.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>server internal error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 error\n{\n  \"error\": err_object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../Clothet-API/routes/api/items.js",
    "groupTitle": "items"
  },
  {
    "type": "get",
    "url": "/api/items/search",
    "title": "Search",
    "name": "items_search",
    "group": "items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "category",
            "description": "<p>分類</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sub_category",
            "description": "<p>次分類</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "success",
            "description": "<p>success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>server internal error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 error\n{\n  \"error\": err_object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../Clothet-API/routes/api/items.js",
    "groupTitle": "items"
  },
  {
    "type": "get",
    "url": "/api/items/:id",
    "title": "Show",
    "name": "items_show",
    "group": "items",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "success",
            "description": "<p>success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"id\": 7,\n        \"name\": \"棉彈百搭褲-女\",\n        \"image\": [\n        \"http://s1.lativ.com.tw/i/18868/18868_L_61.jpg\",\n        \"http://s2.lativ.com.tw/i/18868/18868_L_62.jpg\"\n        ],\n        \"category\": \"褲裝&裙裝\",\n        \"sub_category\": \"長褲\",\n        \"price\": \"225\",\n        \"brand\": \"lativ\",\n        \"pattern\": \"緊身褲・窄管褲\",\n        \"target\": \"women\",\n        \"size\": null,\n        \"serial_no\": \"18868\",\n        \"created_at\": \"2016-12-11T12:47:42.000Z\",\n        \"updated_at\": \"2016-12-11T12:47:43.000Z\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>server internal error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 error\n{\n  \"error\": err_object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../Clothet-API/routes/api/items.js",
    "groupTitle": "items"
  },
  {
    "type": "post",
    "url": "/api/members/login",
    "title": "Login",
    "name": "members_login",
    "group": "members",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>member's account(email).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>member's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "memberObject",
            "description": "<p>details of member data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"id\": 9,\n    \"user\": \"aswe@gmail.com\",\n    \"username\": \"req.body.username\",\n    \"photo\": null,\n    \"facebookId\": null,\n  },\n  \"isLogin\": true,\n  \"isValidate\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Account/password not match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 error\n{\n  \"isLogin\": false,\n  \"msg\": \"帳號與密碼組合錯誤\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../Clothet-API/routes/api/members.js",
    "groupTitle": "members"
  },
  {
    "type": "post",
    "url": "/api/members/logout",
    "title": "Logout",
    "name": "members_logout",
    "group": "members",
    "permission": [
      {
        "name": "Login"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "isLogin",
            "defaultValue": "false",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": false,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>not login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"error\": true,\n  \"msg\": \"請登入\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../Clothet-API/routes/api/members.js",
    "groupTitle": "members"
  },
  {
    "type": "post",
    "url": "/api/members/signup",
    "title": "Signup",
    "name": "members_signup",
    "group": "members",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>member unique email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>member password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>user name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "success",
            "description": "<p>success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>server internal error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 error\n{\n  \"error\": err_object\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../Clothet-API/routes/api/members.js",
    "groupTitle": "members"
  },
  {
    "type": "get",
    "url": "/api/members/status",
    "title": "member status",
    "name": "members_status",
    "group": "members",
    "permission": [
      {
        "name": "Login"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "memberObject",
            "description": "<p>details of &quot;current session&quot; member data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\": true,\n  \"fb_login\": {\n    \"status\": false\n  },\n  \"user\": {\n    \"username\": \"req.body.username\",\n    \"user\": \"aswe@gmail.com\",\n    \"image\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>not login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"error\": true,\n  \"msg\": \"請登入\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../Clothet-API/routes/api/members.js",
    "groupTitle": "members"
  }
] });
