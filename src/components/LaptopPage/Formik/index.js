import * as yup from "yup";
const validation = yup.object({
  laptop_image: yup.string().required(),
  laptop_name: yup
    .string()
    .required("ლათინური ასოები, ციფრები, !@#$%^&*()_+= "),
  laptop_brand_id: yup.number().required(),
  laptop_cpu: yup.string().required(),
  laptop_cpu_cores: yup.string().required("მხოლოდ ციფრები"),
  laptop_cpu_threads: yup.string().required("მხოლოდ ციფრები"),
  laptop_ram: yup.string().required("მხოლოდ ციფრები"),
  laptop_hard_drive_type: yup.string().required(),
  laptop_state: yup.string().required(),
  laptop_price: yup.number().required("მხოლოდ რიცხვები"),
});
const initialValues = {
  laptop_name: "",
  laptop_brand_id: "",
  laptop_ram: "",
  laptop_hard_drive_type: "",
  laptop_cpu: "",
  laptop_cpu_cores: "",
  laptop_cpu_threads: "",
  laptop_state: "",
  laptop_price: "",
  laptop_purchase_date: "",
  name: "",
  surname: "",
  team: "",
  position: "",
  email: "",
  phone_number: "",
};
export { validation, initialValues };
