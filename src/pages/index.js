// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/tables/Table'
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'
import { Box, Button } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import { useState } from 'react'

const Dashboard = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = newOpen => {
    setOpen(newOpen)
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Button variant='contained' color='primary' onClick={() => toggleDrawer(true)}>
            Add
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
      <Drawer anchor='right' open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 600, padding: 10 }}>
          <FormLayoutsIcons />
        </Box>
      </Drawer>
    </ApexChartWrapper>
  )
}

export default Dashboard
