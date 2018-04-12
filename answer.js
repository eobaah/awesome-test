/**
 * Write your solution in this file.
 *
 * You can execute and test your answer by either pressing 'Try Answer' in the
 * side panel, or by running `node test_answer.js <test_case_path>` on the
 * command line.
 * For example:
 *      node test_answer.js inputs/one_bot_accesses.json
 *
 * You can organize your code as you wish (eg, use auxiliary files) as long as
 * `test_answer.js` produces the expected output.
 */

module.exports = {
    /**
     * Implement your solution here.
     *
     * @param input_file_path - path to the file with log information
     * @return list of bot names sorted alphabetically
     */
     

    
    bot_detection: function(input_file_path) {
        const fs = require('fs')
        let arrayOfRawData = []
        let newData = []
        
        //constraints
        let maxOccurences = 10
        let maxDuration = 4
        let minRepeatedActions = 5
        let infoStorageObj = {}
        
        function convertToMilli(mins) {
            return mins * 60000
        }
        
        function objectChecker(obj) {
            let {user} = obj
            
            if(infoStorageObj.hasOwnProperty(user)) {
                infoStorageObj[obj.user].push(obj)
            } else {
                infoStorageObj[obj.user] = [obj]
            }
        }
        
        function convertToJSON(arr) {
            let newArr = []
            arr.forEach( obj => {
                let objJSON = JSON.parse(obj)
                objectChecker(objJSON)
                newArr.push(objJSON)
            })
            return newArr
        } 
        
        fs.readFile(input_file_path,'utf8', function(err, rawData) {
            arrayOfRawData = rawData.split("\n")
            arrayOfRawData.pop()
            newData = convertToJSON(arrayOfRawData)
            console.log(infoStorageObj['sarahjeong'])

        })
        
        return infoStorageObj;
    },
};
