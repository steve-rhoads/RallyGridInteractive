Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    launch: function() {
        console.log("RallyGridInteractive-Launched");
        this._loadStore();
    },
    _loadStore: function(){
        console.log("Creating Store");
        var myStore = Ext.create("Rally.data.wsapi.Store",{
            model: 'Defect',
            autoLoad: true,
            listeners: {
                scope: this,
                load: function(store, data, success){
                    console.log("Loading store");
                    this._bindGrid(myStore);
                }
            },
            fetch: ['FormattedID','Name','ScheduleState']
        });
    },
	
    _bindGrid: function(myStore){
        console.log("Binding the grid");
        var myGrid = Ext.create("Rally.ui.grid.Grid",{
            store: myStore,
            columnCfgs: ['FormattedID','Name']
        });
        this.add(myGrid);
    }
});
