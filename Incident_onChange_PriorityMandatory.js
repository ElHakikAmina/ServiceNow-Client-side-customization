function onChange(control, oldValue, newValue, isLoading) {

    // Stop script when the form is loading
    if (isLoading) {
        return;
    }

    // If the field is empty, do nothing
    if (newValue == '') {
        return;
    }

    // If Priority is High
    if (newValue == '1') {

        // Show an info message on the form
        g_form.addInfoMessage('⚠️ Priority is High. Please fill the Description.');

        // Make Description mandatory
        g_form.setMandatory('description', true);

    } else {

        // If Priority is not High, remove mandatory
        g_form.setMandatory('description', false);
    }
}
