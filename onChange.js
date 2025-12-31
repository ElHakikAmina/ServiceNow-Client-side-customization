function onChange(control, oldValue, newValue, isLoading) {

    // 1️⃣ Ne rien faire au chargement du formulaire
    if (isLoading) {
        return;
    }

    // 2️⃣ Vider la liste des sous-catégories
    g_form.clearOptions('u_subcategory');

    // Ajouter une option par défaut
    g_form.addOption('u_subcategory', '', '-- Sélectionner --');

    // 3️⃣ Si aucune catégorie sélectionnée, arrêter
    if (!newValue) {
        return;
    }

    // 4️⃣ Appel du Script Include via GlideAjax
    var ga = new GlideAjax('GetSubcategoriesAjax');

    // Nom de la méthode à appeler
    ga.addParam('sysparm_name', 'getSubcategories');

    // Paramètre envoyé au serveur
    ga.addParam('sysparm_category_id', newValue);

    // 5️⃣ Récupérer la réponse du serveur
    ga.getXMLAnswer(function (response) {

        // 6️⃣ Convertir la réponse JSON en objet JavaScript
        var data = JSON.parse(response || '[]');

        // 7️⃣ Ajouter les options dans le champ
        data.forEach(function (item) {
            g_form.addOption(
                'u_subcategory',
                item.value,
                item.label
            );
        });
    });
}
