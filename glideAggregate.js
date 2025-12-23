var tableGR = new GlideAggregate('idea');
tableGR.addAggregate("COUNT");
tableGR.addQuery('state','1');
tableGR.addNullQuery('assigned_to');
tableGR.query();

if(table$.hasNext)
{
    gs.info(tableGR.getAggregate('COUNT'));
}