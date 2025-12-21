//run when user click sublit
//Prevent submission  if short description empty

function onSubmit ()
{
    var shortDesc = g_form.getValue('short_description');
    if(!shortDesc)
    {
        alert("short description is mandatory");
        retyrn false;
    }
return true;

}