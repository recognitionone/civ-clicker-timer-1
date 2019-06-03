{
	"$schema": "http://json-schema.org/draft-06/schema#",
  	"id": "http://json-schema.org/draft-06/schema#",
 	"title": "Images",
  	"description": "Images",
  	"type": "object",
  	"properties": {
    	"beforeButonimage": {
	      "description": "link as a string",
	      "type": ["string"],
	      "minimum": 1
	    },
	    "successButonimage": {
	      "description": "link as a string",
	      "type": ["string"],
	      "minimum": 1
	    },
	    "failedButonimage": {
	      "description": "link as a string",
	      "type": ["string"],
	      "minimum": 1
	    },
	    "timeLaps": {
	      "type": "array",
	      "minItems": 1,
	      "items": {
	      	"description": "link as a string",
	      	"type": ["string"],
	      }
	    }
}