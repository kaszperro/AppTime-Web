export function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function createNonFieldErrors(error, form) {
    if (!error.non_field_errors) return
    var nonFieldErrors = error.non_field_errors;

    var errDiv = document.createElement("div");
    errDiv.className = "alert alert-danger created";
    errDiv.setAttribute("role", "alert");
    for (var i in nonFieldErrors) {
        var err = nonFieldErrors[i]

        var div = document.createElement("div")
        div.className = "created"
        div.innerText = err
        errDiv.append(div)

    }
    form.insertBefore(errDiv, form.firstChild)
}

function createFieldErrors(error, form) {
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; ++i) {
        var input = inputs[i]
        var myErrors = error[input.name]
        input.classList.remove('is-valid')
        input.classList.remove('is-invalid')

        if (!myErrors) {
            input.className += " is-valid"
        } else {
            input.className += " is-invalid"
            for (var j in myErrors) {
                var myError = myErrors[j]
                var errDiv = document.createElement("div");
                errDiv.className = "invalid-feedback created";
                errDiv.innerText = myError;
                input.parentElement.append(errDiv)
            }
        }
    }

}

export function makeFormErrors(error, form) {
    removeElementsByClass("created")
    createNonFieldErrors(error, form);
    createFieldErrors(error, form);   
}