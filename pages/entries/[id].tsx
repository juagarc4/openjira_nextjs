import React from 'react'
import { Layout } from 'components/layouts'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
const EntryPage = () => {
  return (
    <Layout title='....'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title='Entry:' subheader={'Created: .... minutes ago'} />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='New Entry'
                autoFocus
                multiline
                label='New Entry'
              />
              {/* RADIO */}
            </CardContent>
            <CardActions>
              <Button startIcon={<SaveOutlinedIcon />} variant='contained' fullWidth>
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default EntryPage
