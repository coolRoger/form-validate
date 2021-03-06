const { successOutPut } = require("./resultOutPut");

function resultCheck(results) {
    let errorList = [];
    results.forEach(result => {
        for (let prop in result.outcome) {
            let outcome = result.outcome[prop];
            if (outcome.status === false) {
                let errObj = Object.assign(
                    { field: result.field, type: prop },
                    outcome
                );
                errorList.push(errObj);
            }
        }
    });

    if (errorList.length === 0) {
        return successOutPut();
    } else {
        return {
            summary: errorList[0],
            detail: errorList
        }
    }
}

module.exports = resultCheck;
