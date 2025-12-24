function onChange(control, oldValue, newValue, isLoading) {

    // إذا كان الفورم مازال كيحمّل، خرج
    if (isLoading) {
        return;
    }

    // إذا كانت القيمة الجديدة فارغة، خرج
    if (!newValue) {
        return;
    }

    // إذا كانت Category = hardware
    if (newValue == 'hardware') {
        g_form.setVisible('serial_number', true);
        g_form.setMandatory('serial_number', true);
    } else {
        g_form.setVisible('serial_number', false);
        g_form.setMandatory('serial_number', false);
        g_form.clearValue('serial_number');
    }
}
