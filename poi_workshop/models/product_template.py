##############################################################################
#
#    Odoo
#    Copyright (C) 2017 CodUP (<http://codup.com>).
#
##############################################################################

from odoo import api, fields, models, tools, _


class ProductTemplate(models.Model):
    _name = "product.template"
    _inherit = "product.template"

    isParts = fields.Boolean('Can be Part')
    time_service = fields.Integer('Tiempo')

# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4: