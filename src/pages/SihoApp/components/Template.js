import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {
    Grid,
    Button,
    TextField,
} from '@mui/material'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import Pagination from '@mui/material/Pagination'


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Template() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container sx={{mb:1}} justifyContent='space-between'>
            <Grid item>
                <Typography variant='h4'>Título</Typography>
            </Grid>
            <Grid item>
                <Button startIcon={<ImportExportIcon />} variant='outlined'>Exportar</Button>
            </Grid>
        </Grid>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        
        <Grid container sx={{mt:3}} justifyContent='flex-end'>
            <Grid item>
                <Pagination sx={{mb:2}} count={10} color="primary" />
            </Grid>
            <Grid item container justifyContent='flex-end' xs={12}>
                <Grid item sx={{mr:2}}>
                    <Button variant='text'>Cancelar</Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button fullWidth variant='contained'>Guardar</Button>
                </Grid>
            </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container sx={{mb:3}} columnSpacing={3}>
            <Grid container item xs={12} justifyContent='space-between'>
                <Grid item xs={12} sm>
                    <Typography variant='h4'>Título</Typography>
                </Grid>
                <Grid item xs={12} sm='auto'>
                    <Button startIcon={<ImportExportIcon />} variant='outlined'>Exportar</Button>
                </Grid>    
            </Grid>
            <Grid item xs={12} sm={4} sx={{'& > :not(style)':{my:2}}}>
                <TextField fullWidth id="outlined-basic" label="Nombre" variant="outlined" />
                <TextField fullWidth id="outlined-basi" label="Apellido" variant="outlined" />
                <TextField fullWidth id="outlined-bas" label="Otro" variant="outlined" />
                <TextField fullWidth id="outlined-bas" label="Otro 2" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4} sx={{'& > :not(style)':{my:2}}}>
                <TextField fullWidth id="outlined-basic" label="Dato 1" variant="outlined" />
                <TextField fullWidth id="outlined-basi" label="Dato 2" variant="outlined" />
                <TextField fullWidth id="outlined-bas" label="Dato 3" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4} sx={{mt:2}}>
                <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            </Grid>
            <Grid item container columnSpacing={3} justifyContent='flex-end' sx={{mt:3}} xs={12}>
                <Grid item sx={12} sm={4}>
                    <Button fullWidth variant='text'>Cancelar</Button>
                </Grid>
                <Grid item sx={12} sm={4}>
                    <Button fullWidth variant='contained'>Guardar</Button>
                </Grid>
            </Grid>
        </Grid>        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container columnSpacing={3}>
            <Grid item sx={12} sm={8}>
                <Typography sx={{mb:1}} variant='h4'>Título</Typography>
                <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography sx={{mb:1}} variant='h5'>Título</Typography>
                <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            </Grid>
        </Grid>
      </TabPanel>
    </Box>
  )
}
