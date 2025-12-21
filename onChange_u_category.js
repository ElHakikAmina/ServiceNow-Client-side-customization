function onChange(control, oldValue, newValue, isLoading)
{
    // Cette fonction est appelé automatiquement quand la valeur  du champ change (client script onChange) 
    // Control : référence au champ (Objet HTML/ SeviceNow) qui a déclenché le changement
    // oldValue : acienne valeur du champ
    // newValue : nouvelle valeur sélectionnée/saisie
    // isLoading : true quand le formulaire est entrain de changer (donc on ne veut pas exécuter la logique)


    if(isLoading) return;
    //Si Le formulaire est en chargement , on quitte immédiatement(évite d'exécuter le scrit au chargement)


    //reset 
    g_form.clearOptions("u_subcategory");
    // Supprime toutes les options existantes d champ de type Choice/List : u_subcategory


    g_form.addOption("u_subcategory", "", "-- Select --");
  // Ajoute une option par défaut vide (value = ""), affichée comme "-- Select --"
  // Cela force l’utilisateur à choisir une sous-catégorie après le rechargement

    if (!newValue) return;
  // Si newValue est vide (ex: l’utilisateur a effacé la catégorie), on quitte
  // Car on ne peut pas charger des sous-catégories sans catégorie

  var ga = new GlideAjax("x_app_SubcategoryAjax");
  // Crée un appel AJAX vers un Script Include côté serveur (GlideAjax)
  // "x_app_SubcategoryAjax" = nom du Script Include (doit être "Client Callable")

   ga.addParam("sysparm_name", "getSubcategories");
  // Indique quelle méthode du Script Include appeler
  // sysparm_name est la convention GlideAjax pour appeler une fonction précise

  ga.addParam("sysparm_category", newValue);
  // Envoie un paramètre au serveur : la catégorie choisie (newValue)
  // Côté serveur, on le récupère souvent via this.getParameter('sysparm_category')

  ga.getXMLAnswer(function (answer) {
    // Exécute l’appel serveur, puis récupère la réponse sous forme de string "answer"
    // getXMLAnswer renvoie généralement une chaîne (souvent JSON si tu l’as codé comme ça côté serveur)

    // answer attendu: JSON string => [{value:"", label:""}...]
    // Commentaire : le serveur doit renvoyer une chaîne JSON représentant un tableau d’options

    try {
      var arr = JSON.parse(answer || "[]");
      // Convertit la string JSON en tableau JavaScript
      // Si answer est vide/null, on parse "[]" (tableau vide) pour éviter une erreur

      arr.forEach(function (opt) {
        // Parcourt chaque élément du tableau (chaque option)
        g_form.addOption("u_subcategory", opt.value, opt.label);
        // Ajoute une option au champ u_subcategory
        // opt.value = valeur stockée, opt.label = texte affiché
      });
    } catch (e) {
      // Si la réponse n’est pas un JSON valide, on tombe ici
      console.log("Failed to parse subcategories", e);
      // Log dans la console navigateur (utile pour debug)
    }
  });

}