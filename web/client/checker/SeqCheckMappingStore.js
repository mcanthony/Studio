/*
 * File: SeqCheckMappingStore.js
 * Date: Fri Feb 04 2011 02:39:54 GMT-0800 (PST)
 * 
 * This file was generated by Ext Designer version xds-1.0.3.2.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

SeqCheckMappingStore = Ext.extend(Ext.data.ArrayStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        SeqCheckMappingStore.superclass.constructor.call(this, Ext.apply({
            storeId: 'seqCheckMappingStore',
            idIndex: 0,
            fields: [
                {
                    name: 'constructID',
                    type: 'string'
                },
                {
                    name: 'clone',
                    type: 'int'
                },
                {
                    name: 'well',
                    type: 'string',
                    allowBlank: false
                },
                {
                    name: 'traceFileName',
                    allowBlank: false,
                    type: 'string'
                }
            ]
        }, cfg));
    }
});
new SeqCheckMappingStore();