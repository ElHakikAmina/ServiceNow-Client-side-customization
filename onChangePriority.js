function onChange(control, oldValue, newValue, isLoading) {
    // عند تحميل الفورم، لا تنفّذ الكود
    if (isLoading) {
        return;
    }

    // إذا كانت القيمة الجديدة فارغة، لا تفعل شيئًا
    if (newValue == '') {
        return;
    }

    // إذا كانت الأولوية High
    if (newValue == '1') {
        g_form.showFieldMsg(
            'priority',
            '⚠️ انتبه: هذه أولوية عالية',
            'warning'
        );
    }
}
