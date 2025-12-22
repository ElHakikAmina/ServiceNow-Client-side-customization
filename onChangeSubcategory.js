function onChange(control, newValue, oldValue, isLoading)
{

    if(isLoading) return;
    // si le formulaire est en train de se charger ,on sort


    //si la nouvelle valeur est vide , on vide la sous categorie
    if(newValue)
    {
        g_form.clearValue("subcategory");
        return;
    }

// si la categorie est "software"
if(newValue ="Software")
{
    g_form.setValue("subcategory","email")
}
 // Si la catégorie est "hardware"
  else if (newValue == 'hardware') {

    g_form.setValue('subcategory', 'printer');

  }


}