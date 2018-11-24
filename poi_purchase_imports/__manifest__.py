# © 2017 Miguel Angel Callisaya Mamani
# License AGPL-3 - See http://www.gnu.org/licenses/agpl-3

{
    'name': 'Importaciones',
    'version': '11.0.1.0.0',
    "author": "PoiesisConsulting"
              " Miguel Angel Callisaya Mamani",
    'category': 'Purchase',
    'website': 'http://www.poiesisconsulting.com',
    'summary': 'Importaciones Bolivia',
    'depends': [
        'poi_bol_base',
        'stock',
        'stock_account',
        'purchase',
        'stock_landed_costs',
        #'poi_auth_base',
        #'poi_bol_ufv',
        'account',
        'poi_stock_account_consolidate',
    ],
    'data': [
        #'wizard/picking_import_wizard_view.xml',
        #'wizard/import_invoice_line_wizard_view.xml',
        #'wizard/quant_lot_view.xml',
        #'wizard/import_landed_cost_pickings_wizard_view.xml',
        #'wizard/landed_cost_report_view.xml',
        'views/account_invoice_view.xml',
        #'views/purchase_imports_view.xml',
        'views/purchase_order_view.xml',
        'views/stock_picking_view.xml',
        #'views/purchase_imports_menu_view.xml',
        #'views/invoice_imports_menu_view.xml',
        #'data/purchase_imports_sequence.xml',
        #'data/poi_auth_circuit.xml',
        #'data/poi_auth_auth.xml',
        'data/purchase_sequence.xml',
        'views/stock_landed_costs_view.xml',
        'report/purchase_imports_report_view.xml',
        #'report/stock_landed_cost_report_view.xml',
        #'views/report_purchaseimports.xml',
        'views/imports_stage_views.xml',
        'views/asset.xml',
        'views/imports_kanban_stage_view.xml',
        'views/product_view.xml',
        #'purchase_imports_report.xml',
        #'report/lcv_data.xml',
        'security/ir.model.access.csv',

    ],
    'installable': True,
    'images': [
        '/static/description/images/purchase_order_expense_main.png',
        '/static/description/images/purchase_order_expense_line.png',
        '/static/description/images/expenses_types.png',
    ],
}