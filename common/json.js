export class JsonValidator {
	static isValidJson(json) {
	    try {
	        JSON.parse(json);
	        return true;
	    } catch (e) {
	    	// console.error(e);
	        return false;
	    }
	}

}