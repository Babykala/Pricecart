import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import './pricecart.css';
import img from './image.png';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box, Typography, Grid, Stack, Rating, InputLabel, FormControl, Button } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from 'react-bootstrap';


const useStyles = makeStyles({
  grid: {
    border: 'solid 1px lightGrey',
    borderRadius: '5px',
    margin: '20px', height: '300px',
    width: '200px'
  },
});



export default function Cart() {
  const classes = useStyles();
  const [count, setCount] = React.useState(0);
const handleChange = (e) => {
    
    if (e.target.textContent === 'Add to cart') {
      setCount(count + 1);
      e.target.textContent = 'Remove from cart'
    }
    else if (e.target.textContent ==='Remove from cart'){
      setCount(count - 1);
      e.target.textContent = 'Add to cart';
    }
  }


  return (
    <div style={{ padding: '2px', width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ padding: '50px', minWidth: 100 }}>Start Bootstrap</Typography>
        <Typography sx={{ minWidth: 100 }}>Home</Typography>
        <Typography sx={{ minWidth: 100 }}>About</Typography>
        <MenuItem sx={{ minWidth: 120 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">Shop</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"

              label="Shop"

            >
              <MenuItem>All Products</MenuItem>
              <MenuItem>Popular Items</MenuItem>
              <MenuItem>New Arrivals</MenuItem>
            </Select>
          </FormControl>
        </MenuItem>

        <div style={{ marginLeft: '600px', padding: '5px', width: '120px', alignContent: 'center' }}><button type="button" class="btn btn-outline-dark">
          <ShoppingCartIcon />Cart <Badge pill bg="dark">{count}</Badge></button></div>



        <br />
      </Box>

      <div style={{ backgroundColor: 'rgb(38, 39, 39)', padding: '75px', textAlign: 'center', margin: '0' }}>
        <span style={{ color: 'white', fontSize: '60px', fontWeight: 'bold' }}>Shop in style</span> <br />
        <span style={{ color: 'Grey', fontSize: '20px' }}>With this shop hompeage template</span> <br />
      </div>


      {/* Grid */}
      <Grid container spacing={2} style={{ margin: '10px', paddingLeft: '50px', textAlign: 'center', display: 'flex', alignContent: 'space-around', justifyContent: 'center', width: '100%' }}>
        <Grid item xs={3}>
          <div className={classes.grid}>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px', margin: '0px' }}>Fancy Product</span> <br /> $40.00 - $80.00 <br /><br />
              <button type="button" class="btn btn-outline-dark">View Options</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={classes.grid} style={{ position: 'relative' }}>
            <div style={{ top: '0.5rem', right: '0.5rem', width: '50px', position: 'absolute', textAlign: 'center' }}><Badge bg="dark">Sale</Badge></div>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Special Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              <strike>$20.00</strike> $18.00 <br /><br />
              <button type="button" class="btn btn-outline-dark" id="1" onClick={handleChange}>Add to cart</button>

            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={classes.grid} style={{ position: 'relative' }}>
            <div style={{ top: '0.5rem', right: '0.5rem', width: '50px', position: 'absolute', textAlign: 'center' }}><Badge bg="dark">Sale</Badge></div>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Sale Item</span> <br /><strike>$50.00 </strike>$25.00 <br /><br /><br />
              <button type="button" class="btn btn-outline-dark" id="2" onClick={handleChange}>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={classes.grid}>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Popular Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              $40.00 <br /><br />
              <button type="button" class="btn btn-outline-dark" id="3" onClick={handleChange}>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <br />
        <Grid item xs={3}>
          <div className={classes.grid} style={{ position: 'relative' }}>
            <div style={{ top: '0.5rem', right: '0.5rem', width: '50px', position: 'absolute', textAlign: 'center' }}><Badge bg="dark">Sale</Badge></div>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Sale Item</span> <br /> <strike>$50.00</strike> $25.00 <br /><br /><br />
              <button type="button" class="btn btn-outline-dark" id="4" onClick={handleChange}>Add to cart</button>
            </Grid>
          </div>
        </Grid>


        <Grid item xs={3}>
          <div className={classes.grid}>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px', margin: '20px' }}>Fancy Product</span> <br /> $40.00 - $80.00 <br /><br /><br />
              <button type="button" class="btn btn-outline-dark">View Options</button>
            </Grid>
          </div>

        </Grid>


        <Grid item xs={3}>
          <div className={classes.grid} style={{ position: 'relative' }}>
            <div style={{ top: '0.5rem', right: '0.5rem', width: '50px', position: 'absolute', textAlign: 'center' }}><Badge bg="dark">Sale</Badge></div>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Special Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              <strike>$20.00</strike> $18.00 <br /><br />
              <button type="button" class="btn btn-outline-dark" id="5" onClick={handleChange}>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={classes.grid}>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Popular Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              $40.00 <br /><br />
              <button type="button" class="btn btn-outline-dark" id="6" onClick={handleChange}>Add to cart</button>
            </Grid>
          </div>
        </Grid>


      </Grid>
    </div>


  );
}
