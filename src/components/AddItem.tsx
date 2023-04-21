import * as React from "react";
import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useAddTableItemMutation } from "../store/features/apiSlice";

const validationSchema = yup.object({
  amount: yup
    .number().min(0, 'Manfiy son mumkin emas!')
    .max(100, 'Qiymat 100 dan oshmasin')
    .required("Midor kiritish majburiy!"),
  comment: yup.string().required("Izoh majburiy!").max(50, 'Izoh 50 belgidan oshmasin!'),
  type_trans: yup.number().required("Tolov turi majburiy!"),
});

const initialValues = {
  amount: "",
  comment: "",
  type_trans: "",
};

const AddItem = ({type_info, setIsOpen}:{type_info: Boolean, setIsOpen: Function}) => {
  const [submitting, setSubmitting] = useState(false);
  const [addTableItem] = useAddTableItemMutation();

  const handleSubmit = (values: {
    amount: Number | String;
    comment: String;
    type_trans: String;
  }) => {
    if(submitting){
      return
    }
    setSubmitting(true);
    addTableItem({
      id: new Date().getTime(),
      date: new Date(),
      amount: `€${values.amount}`,
      full_name: "Fedora Balaisot",
      type: type_info,
      comment: values.comment,
      transfer_type: +values.type_trans,
    }).then(() => {
      setIsOpen(false)
    }).catch(() => console.log("error"))
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form>
          <TextField
            sx={{ width: "100%" }}
            label="Miqdor"
            type="number"
            name="amount"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Box sx={{ color: "red" }}>
            <ErrorMessage name="amount" />
          </Box>

          <TextField
            sx={{ width: "100%", marginTop: 2 }}
            label="Sabab"
            name="comment"
            multiline
            onChange={handleChange}
            rows={2}
          />
          <Box sx={{ color: "red" }}>
            <ErrorMessage name="comment" />
          </Box>

          <Box sx={{ width: "100%", marginTop: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">To'lov turi</InputLabel>
              <Select
                sx={{ width: "100%" }}
                id="demo-simple-select"
                labelId="demo-simple-select-label"
                name="type_trans"
                label="To'lov turi"
                onChange={handleChange}
                value={values.type_trans}
              >
                <MenuItem value={"1"}>Naqd</MenuItem>
                <MenuItem value={"2"}>Karta</MenuItem>
                <MenuItem value={"3"}>Click</MenuItem>
                <MenuItem value={"4"}>Payme</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ color: "red" }}>
            <ErrorMessage name="type_trans" />
          </Box>

          <Button
            sx={{ marginTop: 3 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddItem;
