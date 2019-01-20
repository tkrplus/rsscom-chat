import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import TextField from '@material-ui/core/TextField'

import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import Category from '~/src/models/category/Category'

const styles = theme => ({
  addButton: {
    margin: theme.spacing.unit
  },
  SearchField: {
    margin: theme.spacing.unit
  },
  CategoryForm: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  }
})

const Tools = (props) => {
  const {
    classes,
    openTicketCreateDialog,
    searchText,
    searchCategories,
    editSearchText,
    editSearchCategories
  } = props

  const handleSearchTextChange = (e) => {
    editSearchText(e.target.value)
  }

  const handleSearchCateoriesChange = (e) => {
    const values = e.target.value
    const categories = values
      .map(val => Category.codeOf(val))
      .filter(category => !!category)
    editSearchCategories(categories)
  }

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={10}>
          <TextField
            label='Search'
            onChange={handleSearchTextChange}
            value={searchText}
            className={classes.SearchField}
          />
          <FormControl
            className={classes.CategoryForm}
          >
            <InputLabel htmlFor="select-multiple-chip">
              Categories
            </InputLabel>
            <Select
              multiple
              displayEmpty
              onChange={handleSearchCateoriesChange}
              value={searchCategories.map(category => category.code)}
              renderValue={codes => {
                return codes
                  .map(code => Category.codeOf(code))
                  .filter(category => !!category)
                  .map(category => category.name)
                  .join(',')
              }}
            >
              {Category.CATEGORY_LIST.map(category => (
                <MenuItem key={category.code} value={category.code} >
                  <Checkbox checked={searchCategories.some(c => c.code === category.code)} />
                  <ListItemText primary={category.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="fab"
            color="secondary"
            aria-label="Add"
            onClick={openTicketCreateDialog}
            className={classes.addButton} >
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;

`

export default withStyles(styles)(Tools)
