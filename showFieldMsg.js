function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    // Show info message
    g_form.showFieldMsg('category', 'Category has been changed', 'info');

    // Make Short Description mandatory
    g_form.setMandatory('short_description', true);
}
