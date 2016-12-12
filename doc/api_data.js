define({ "api": [
  {
    "type": "get",
    "url": "/api/item_combinations",
    "title": "List",
    "name": "item_combinations_list",
    "group": "item_combinations",
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
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"combination_id\": 0,\n    \"item_ids\": \"28123055,28373205,28465042,28925031\"\n  },\n  {\n    \"combination_id\": 1,\n    \"item_ids\": \"28022065,28116045,28587031\"\n  },\n  {\n    \"combination_id\": 2,\n    \"item_ids\": \"28454064,28519044,28553065,28565055\"\n  },\n  {\n    \"combination_id\": 3,\n    \"item_ids\": \"28137045,28352089,28466024\"\n  },\n  {\n    \"combination_id\": 4,\n    \"item_ids\": \"28122055,28374065,28925031\"\n  }\n]",
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
    "filename": "../routes/api/item_combinations.js",
    "groupTitle": "item_combinations"
  },
  {
    "type": "get",
    "url": "/api/item_combinations",
    "title": "List",
    "name": "item_combinations_list",
    "group": "item_combinations",
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
          "content": " HTTP/1.1 200 OK\n[\n  {\n    \"id\": 34,\n    \"item_style_id\": 26329031,\n    \"combination_id\": 9,\n    \"category\": \"women\",\n    \"image\": \"http://s1.lativ.com.tw/i/28118/28118_L_07_0.jpg\",\n    \"created_at\": \"2016-12-12T08:38:28.000Z\",\n    \"updated_at\": \"2016-12-12T08:38:28.000Z\",\n    \"items\": {\n      \"id\": \"26329031\",\n      \"item_serial_no\": 26329,\n      \"image\": \"/i/26329/26329031/2632903_500.jpg\",\n      \"color\": \"藏青\",\n      \"size\": \"S\",\n      \"created_at\": \"2016-12-12T08:37:29.000Z\",\n      \"updated_at\": \"2016-12-12T08:37:29.000Z\"\n    }\n  },\n  {\n    \"id\": 37,\n    \"item_style_id\": 28926021,\n    \"combination_id\": 9,\n    \"category\": \"women\",\n    \"image\": \"http://s1.lativ.com.tw/i/28118/28118_L_07_0.jpg\",\n    \"created_at\": \"2016-12-12T08:38:28.000Z\",\n    \"updated_at\": \"2016-12-12T08:38:28.000Z\",\n    \"items\": {\n      \"id\": \"28926021\",\n      \"item_serial_no\": 28926,\n      \"image\": \"/i/28926/28926021/2892602_500.jpg\",\n      \"color\": \"鐵灰\",\n      \"size\": \"F\",\n      \"created_at\": \"2016-12-12T08:37:15.000Z\",\n      \"updated_at\": \"2016-12-12T08:37:15.000Z\"\n    }\n  },\n  {\n    \"id\": 35,\n    \"item_style_id\": 28118055,\n    \"combination_id\": 9,\n    \"category\": \"women\",\n    \"image\": \"http://s1.lativ.com.tw/i/28118/28118_L_07_0.jpg\",\n    \"created_at\": \"2016-12-12T08:38:28.000Z\",\n    \"updated_at\": \"2016-12-12T08:38:28.000Z\",\n    \"items\": null\n  },\n  {\n    \"id\": 36,\n    \"item_style_id\": 28588033,\n    \"combination_id\": 9,\n    \"category\": \"women\",\n    \"image\": \"http://s1.lativ.com.tw/i/28118/28118_L_07_0.jpg\",\n    \"created_at\": \"2016-12-12T08:38:28.000Z\",\n    \"updated_at\": \"2016-12-12T08:38:28.000Z\",\n    \"items\": null\n  }\n]",
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
    "filename": "../routes/api/item_combinations.js",
    "groupTitle": "item_combinations"
  },
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
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"name\": \"條紋窄裙內搭褲-女\",\n        \"image\": [\n            \"http://s3.lativ.com.tw/i/18653/18653_L_61_1.jpg\",\n            \"http://s4.lativ.com.tw/i/18653/18653_L_62_0.jpg\"\n        ],\n        \"category\": \"內衣&內褲&襪子\",\n        \"sub_category\": \"褲襪・內搭褲\",\n        \"price\": \"168\",\n        \"brand\": \"lativ\",\n        \"pattern\": \"假兩件\",\n        \"target\": \"women\",\n        \"size\": null,\n        \"serial_no\": \"18653\",\n        \"created_at\": \"2016-12-11T12:47:42.000Z\",\n        \"updated_at\": \"2016-12-11T12:47:43.000Z\"\n    },\n    {\n        \"name\": \"棉彈百搭褲-女\",\n        \"image\": [\n            \"http://s1.lativ.com.tw/i/18868/18868_L_61.jpg\",\n            \"http://s2.lativ.com.tw/i/18868/18868_L_62.jpg\"\n        ],\n        \"category\": \"褲裝&裙裝\",\n        \"sub_category\": \"長褲\",\n        \"price\": \"225\",\n        \"brand\": \"lativ\",\n        \"pattern\": \"緊身褲・窄管褲\",\n        \"target\": \"women\",\n        \"size\": null,\n        \"serial_no\": \"18868\",\n        \"created_at\": \"2016-12-11T12:47:42.000Z\",\n        \"updated_at\": \"2016-12-11T12:47:43.000Z\"\n    }\n]",
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
    "filename": "../routes/api/items.js",
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
          "content": "    HTTP/1.1 200 OK\n[\n  {\n    \"id\": 12,\n    \"name\": \"連帽風衣外套-男\",\n    \"image\": \"http://s3.lativ.com.tw/i/23047/23047_L_51.jpg,http://s4.lativ.com.tw/i/23047/23047_L_52.jpg\",\n    \"category\": \"外套類\",\n    \"sub_category\": \"外套・風衣・大衣\",\n    \"price\": \"225\",\n    \"brand\": \"lativ\",\n    \"pattern\": \"風衣．大衣\",\n    \"target\": \"men\",\n    \"size\": null,\n    \"serial_no\": \"23047\",\n    \"created_at\": \"2016-12-11T12:47:42.000Z\",\n    \"updated_at\": \"2016-12-11T12:47:43.000Z\"\n  },\n  {\n    \"id\": 13,\n    \"name\": \"連帽風衣外套-女\",\n    \"image\": \"http://s1.lativ.com.tw/i/23050/23050_L_60.jpg,http://s2.lativ.com.tw/i/23050/23050_L_61_0.jpg\",\n    \"category\": \"外套類\",\n    \"sub_category\": \"外套・風衣・大衣\",\n    \"price\": \"225\",\n    \"brand\": \"lativ\",\n    \"pattern\": \"風衣．大衣\",\n    \"target\": \"women\",\n    \"size\": null,\n    \"serial_no\": \"23050\",\n    \"created_at\": \"2016-12-11T12:47:42.000Z\",\n    \"updated_at\": \"2016-12-11T12:47:43.000Z\"\n  },\n  {\n    \"id\": 65,\n    \"name\": \"吸排抗UV連帽外套-女\",\n    \"image\": \"http://s3.lativ.com.tw/i/25234/25234_L_61.jpg,http://s4.lativ.com.tw/i/25234/25234_L_62.gif\",\n    \"category\": \"外套類\",\n    \"sub_category\": \"外套・風衣・大衣\",\n    \"price\": \"490\",\n    \"brand\": \"lativ\",\n    \"pattern\": \"休閒外套\",\n    \"target\": \"women\",\n    \"size\": null,\n    \"serial_no\": \"25234\",\n    \"created_at\": \"2016-12-11T12:47:42.000Z\",\n    \"updated_at\": \"2016-12-11T12:47:43.000Z\"\n  }\n]",
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
    "filename": "../routes/api/items.js",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"serial_no\": \"16469\",\n    \"name\": \"純棉經典帆布休閒鞋-女\",\n    \"image\": \"http://s3.lativ.com.tw/i/16469/16469_L_51.jpg,http://s4.lativ.com.tw/i/16469/16469_L_52.jpg\",\n    \"category\": \"家居服&配件\",\n    \"sub_category\": \"鞋類\",\n    \"price\": \"339\",\n    \"brand\": \"lativ\",\n    \"pattern\": \"帆布鞋\",\n    \"target\": \"women\",\n    \"created_at\": \"2016-12-11T19:04:17.000Z\",\n    \"updated_at\": \"2016-12-11T19:04:18.000Z\",\n    \"styles\": [\n        {\n            \"id\": \"16469022\",\n            \"image\": \"/i/16469/16469021/1646902_500.jpg\",\n            \"color\": \"水綠\",\n            \"size\": \"6,6.5,7\",\n            \"created_at\": \"2016-12-11T19:05:39.000Z\",\n            \"updated_at\": \"2016-12-11T19:05:39.000Z\"\n        },\n        {\n            \"id\": \"16469053\",\n            \"image\": \"/i/16469/16469051/1646905_500.jpg\",\n            \"color\": \"紅色\",\n            \"size\": \"6.5,7,7.5\",\n            \"created_at\": \"2016-12-11T19:05:39.000Z\",\n            \"updated_at\": \"2016-12-11T19:05:39.000Z\"\n        },\n        {\n            \"id\": \"16469062\",\n            \"image\": \"/i/16469/16469061/1646906_500.jpg\",\n            \"color\": \"酒紅\",\n            \"size\": \"6,6.5,7\",\n            \"created_at\": \"2016-12-11T19:05:39.000Z\",\n            \"updated_at\": \"2016-12-11T19:05:39.000Z\"\n        },\n        {\n            \"id\": \"16469072\",\n            \"image\": \"/i/16469/16469071/1646907_500.jpg\",\n            \"color\": \"寶藍\",\n            \"size\": \"6,6.5,7,7.5\",\n            \"created_at\": \"2016-12-11T19:05:39.000Z\",\n            \"updated_at\": \"2016-12-11T19:05:39.000Z\"\n        },\n        {\n            \"id\": \"16469080\",\n            \"image\": \"/i/16469/16469081/1646908_500.jpg\",\n            \"color\": \"灰紫\",\n            \"size\": \"5,6,6.5,7\",\n            \"created_at\": \"2016-12-11T19:05:39.000Z\",\n            \"updated_at\": \"2016-12-11T19:05:39.000Z\"\n        },\n        {\n            \"id\": \"16469090\",\n            \"image\": \"/i/16469/16469091/1646909_500.jpg\",\n            \"color\": \"白色\",\n            \"size\": \"5,5.5,6,6.5,7,7.5,8,8.5\",\n            \"created_at\": \"2016-12-11T19:05:39.000Z\",\n            \"updated_at\": \"2016-12-11T19:05:39.000Z\"\n        },\n        {\n            \"id\": \"16469100\",\n            \"image\": \"/i/16469/16469101/1646910_500.jpg\",\n            \"color\": \"黑色\",\n            \"size\": \"5,5.5,6,6.5,7,7.5,8,8.5\",\n            \"created_at\": \"2016-12-11T19:05:39.000Z\",\n            \"updated_at\": \"2016-12-11T19:05:39.000Z\"\n        },\n        {\n            \"id\": \"16469131\",\n            \"image\": \"/i/16469/16469131/1646913_500.jpg\",\n            \"color\": \"藏青\",\n            \"size\": \"5.5,6,6.5,7,7.5,8,8.5\",\n            \"created_at\": \"2016-12-11T19:05:39.000Z\",\n            \"updated_at\": \"2016-12-11T19:05:39.000Z\"\n        }\n    ]\n}",
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
    "filename": "../routes/api/items.js",
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
    "filename": "../routes/api/members.js",
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
    "filename": "../routes/api/members.js",
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
    "filename": "../routes/api/members.js",
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
    "filename": "../routes/api/members.js",
    "groupTitle": "members"
  }
] });
