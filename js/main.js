

//validate.js para validar el formulario
var constraints = {
    nombre: {
        presence: true,
        //it must be between 3 and 20 characters long
        length: {
        minimum: 3,
        maximum: 20
        },
        format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[a-z]+",
        // but we don't care if the username is uppercase or lowercase
        flags: "i",
        message: "Debe ser un nombre real"
        }
    },
    email: {
        presence: true,
        email: true
    },
    rut: {

        presence: true,

    },
    City: {

        presence: true,

    },
    textarea: {
        presence: true,
        length: {
            minimum: 50
        }
    }
    };

var form = document.querySelector("form#formulario");
form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    handleFormSubmit(form);
});

var inputs = document.querySelectorAll("input, textarea, select")
for (var i = 0; i < inputs.length; ++i) {
    inputs.item(i).addEventListener("change", function(ev) {
    var errors = validate(form, constraints) || {};
    showErrorsForInput(this, errors[this.name])
    });
}

function handleFormSubmit(form, input) {
  // validate the form against the constraints

    var errors = validate(form, constraints);
  // then we update the form to reflect the results
    showErrors(form, errors || {});
    if (!errors) {
    showSuccess();
    }
}

function showErrorsForInput(input, errors) {
    // This is the root of the input
    var formGroup = closestParent(input.parentNode, "form-group")
      // Find where the error messages will be insert into
    , messages = formGroup.querySelector(".messages");
    // First we remove any old messages and resets the classes
    resetFormGroup(formGroup);
    // If we have errors
    if (errors) {
    // we first mark the group has having errors
    formGroup.classList.add("has-error");
    // then we append all the errors
    _.each(errors, function(error) {
        addError(messages, error);
    });
    } else {
    // otherwise we simply mark it as success
    formGroup.classList.add("has-success");
    }
}
