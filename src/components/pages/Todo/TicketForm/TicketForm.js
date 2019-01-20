import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import TIME from '~/src/utils/TIME'
import Category from '~/src/models/category/Category'

const styles = theme => ({
  field: {
    width: '95%',
    margin: theme.spacing.unit
  }
})

const TicketForm = (props) => {
  const {
    classes,
    isOpen,
    ticket,
    hasError,
    summaryError,
    deadlineError,
    closeTicketCreateDialog,
    editCreateTicket,
    createTicket
  } = props

  const handleSummary = (e) => {
    editCreateTicket(e.target.value, ticket.category, ticket.deadline)
  }

  const handleCategory = (e) => {
    editCreateTicket(ticket.summary, Category.codeOf(e.target.value, true), ticket.deadline)
  }

  const handleDeadline = (e) => {
    editCreateTicket(ticket.summary, ticket.category, TIME.fromFieldValue(e.target.value))
  }

  return (
    <Dialog
      open={isOpen}
      onClose={closeTicketCreateDialog}
    >
      { ticket && (
        <div>
          <DialogTitle>
            New Ticket
          </DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label='Summary'
                  className={classes.field}
                  error={summaryError}
                  value={ticket.summary}
                  onChange={handleSummary}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  className={classes.field}
                >
                  <InputLabel >
                    Category
                  </InputLabel>
                  <Select
                    name='Category'
                    displayEmpty
                    value={ticket.category ? ticket.category.code : 'none'}
                    onChange={handleCategory}
                  >
                    <MenuItem key={'none'} value={'none'}>
                      -
                    </MenuItem>
                    {
                      Category.CATEGORY_LIST.map(category => (
                        <MenuItem key={category.code} value={category.code}>
                          { category.name }
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="date"
                  label="Deadline"
                  type="date"
                  value={TIME.toFieldValue(ticket.deadline)}
                  onChange={handleDeadline}
                  error={deadlineError}
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.field}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={closeTicketCreateDialog}
            >
              Cancel
            </Button>
            <Button
              disabled={hasError}
              onClick={createTicket}
              color="primary">
              Create
            </Button>
          </DialogActions>
        </div>
      )}
    </Dialog>
  )
}

export default withStyles(styles)(TicketForm)
