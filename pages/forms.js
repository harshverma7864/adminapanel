import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";


import { useState , useRouter } from "react";
import BaseCard from "../src/components/baseCard/BaseCard";

const Forms = () => {

const [form , setForm] = useState({})

const onChange = (e)=>{
        setForm({
          ...form,
          [e.target.name] : e.target.value
        })
        console.log(form)
}

const [ide, setIde] = useState('');

const  handleclick = async (e)=>{
  e.preventDefault()
  let res = await fetch('http://localhost:3000/api/insertdata',{
    method: 'POST',
    
    
    headers: {
      'Content-Type': 'application/json',
               
    },
    body: JSON.stringify(form)
  });
  let response = await res.json()
  if(typeof window != "undefined"){
    window.location = "http://localhost:3000/imag/" + response.id
  }
}



  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add Product">
          <Stack spacing={3}>
            <TextField
              id="name-basic"
              label="Product Name"
              variant="outlined"
              name="pname"
              value={form.pname? form.pname:""}
              onChange={onChange}
            />
            <TextField
              id="price"
              label="Price"
              type="number"
              variant="outlined"
              name="price"
              value={form.price? form.price:""}
              onChange={onChange}
            />
            <TextField
              id="category"
              label="Category"
              variant="outlined"
              name="category"
              value={form.category? form.category:""}
              onChange={onChange}
            />
            <TextField
              id="subcat"
              label="Sub Category"
              name="subcat"
              variant="outlined"
              value={form.subcat? form.subcat:""}
              onChange={onChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              name="desc"
              value={form.desc? form.desc:""}
              onChange={onChange}
              multiline
              rows={4}
            />
            <TextField
              id="qty"
              label="Qty Available"
              variant="outlined"
              name="qty"
              type="number"
              value={form.qty? form.qty:""}
              onChange={onChange}
            />
            <TextField
              id="Type"
              label="Type"
              variant="outlined"
              name="type"
              value={form.type? form.type:""}
              onChange={onChange}
            />
            {/* <TextField
              id="Deliverable States"
              label="Product Name"
              variant="outlined"
              defaultValue="Nirav Joshi"
            /> */}
            <TextField
              id="dis"
              label="Discount % (if any)"
              variant="outlined"
              name="dis"
              value={form.dis? form.dis:""}
              onChange={onChange}
            />
            <TextField
              id="brand"
              label="Brand Name"
              variant="outlined"
              name="brand"
              value={form.bname? form.bname:""}
              onChange={onChange}
            />
            <TextField
              id="Seller"
              label="Seller"
              name="seller"
              variant="outlined"
              value={form.seller? form.seller:""}
              onChange={onChange}
            />
            {/* <TextField
              error
              id="er-basic"
              label="Error"
              defaultValue="ad1avi"
              variant="outlined"
            /> */}
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Terms & Condition"
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Disabled"
              />
            </FormGroup>
            {/* <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                value="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl> */}
          </Stack>
          <br />
          <Button onClick={handleclick} variant="contained" mt={2}>
            Submit
          </Button>
        </BaseCard>
      </Grid>

      {/* <Grid item xs={12} lg={12}>
        <BaseCard title="Form Design Type">
          <Stack spacing={3} direction="row">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </Stack>
        </BaseCard>
      </Grid> */}
    </Grid>
  );
};

export default Forms;
