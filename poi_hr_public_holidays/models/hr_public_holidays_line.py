# ©  2011,2013 Michael Telahun Makonnen <mmakonnen@gmail.com>
# ©  2014 initOS GmbH & Co. KG <http://www.initos.com>
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

from odoo import fields, models, api
from odoo.exceptions import Warning as UserError


class HrPublicHolidaysLine(models.Model):
    _name = 'hr.holidays.public.line'
    _description = 'Public Holidays Lines'
    _order = "date, name desc"

    name = fields.Char(
        'Name',
        required=True,
    )
    date = fields.Date(
        'Date',
        required=True
    )
    year_id = fields.Many2one(
        'hr.holidays.public',
        'Calendar Year',
        required=True,
    )
    variable = fields.Boolean('Date may change')
    state_ids = fields.Many2many(
        'res.country.state',
        'hr_holiday_public_state_rel',
        'line_id',
        'state_id',
        'Related States'
    )

    @api.multi
    @api.constrains('date', 'state_ids')
    def _check_date_state(self):
        for s in self:
            if fields.Date.from_string(s.date).year != s.year_id.year:
                raise UserError(
                    'Dates of holidays should be the same year '
                    'as the calendar year they are being assigned to'
                )
            if s.state_ids:
                domain = [('date', '=', s.date),
                          ('year_id', '=', s.year_id.id),
                          ('state_ids', '!=', False),
                          ('id', '!=', s.id)]
                holidays = s.search(domain)
                for holiday in holidays:
                    if s.state_ids & holiday.state_ids:
                        raise UserError('You can\'t create duplicate public '
                                        'holiday per date %s and one of the '
                                        'country states.' % s.date)
            domain = [('date', '=', s.date),
                      ('year_id', '=', s.year_id.id),
                      ('state_ids', '=', False)]
            if s.search_count(domain) > 1:
                raise UserError('You can\'t create duplicate public holiday '
                                'per date %s.' % s.date)
        return True
