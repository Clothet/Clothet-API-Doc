define({ "api": [
  {
    "type": "post",
    "url": "/api/member/login",
    "title": "Login",
    "name": "member_login",
    "group": "member",
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
    "groupTitle": "member"
  },
  {
    "type": "post",
    "url": "/api/member/logout",
    "title": "Logout",
    "name": "member_logout",
    "group": "member",
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
    "groupTitle": "member"
  },
  {
    "type": "post",
    "url": "/api/member/signup",
    "title": "Signup",
    "name": "member_signup",
    "group": "member",
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
    "groupTitle": "member"
  },
  {
    "type": "get",
    "url": "/api/member/status",
    "title": "member status",
    "name": "member_status",
    "group": "member",
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
    "groupTitle": "member"
  }
] });
