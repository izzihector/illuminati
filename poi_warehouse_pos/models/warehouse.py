##############################################################################
#
#    Poiesis Consulting, OpenERP Partner
#    Copyright (C) 2014 Poiesis Consulting (<http://www.poiesisconsulting.com>).
#    Developed by: Grover Menacho
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################

from odoo import models, fields, api, _

class stock_warehouse(models.Model):

    _inherit = "stock.warehouse"

    point_of_sale_ids = fields.Many2one('account.analytic.account', string='Cuenta Analitica')