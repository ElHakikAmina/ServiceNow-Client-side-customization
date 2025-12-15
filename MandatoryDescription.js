//Rus when a fields value changes
//If Priority is one,make short description mandatory

function onChange(control,oldValue,newValue, isLoading)
{
    if(isLoading || newValue=='')
    {
        return;
    }
    if(newValue =='1')
    {
        g_form.setMandatory('short_description',true);
    }else
    {
        g_form.setMandatory('short_description',false);
    }
}