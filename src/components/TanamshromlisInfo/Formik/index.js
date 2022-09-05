import * as yup from "yup";
const validation = yup.object({
  name: yup
    .string()
    .min(2, "მინიმუმ 2 სიმბოლო, ქართული ასოები")
    .required("მინიმუმ 2 სიმბოლო, ქართული ასოები")
    .matches(/[ა-ჰ]/g, "გამოიყენე ქართული ასოები"),
  surname: yup
    .string()
    .min(2, "მინიმუმ 2 სიმბოლო, ქართული ასოები")
    .required("მინიმუმ 2 სიმბოლო, ქართული ასოები")
    .matches(/[ა-ჰ]/g, "გამოიყენე ქართული ასოები"),
  team: yup.string().required("required"),
  position: yup.string().required("required"),
  email: yup
    .string()
    .email()
    .required()
    .matches(/@redberry.ge/g, "უნდა მთავრდებოდეს @redberry.ge-ით"),
  phone_number: yup
    .string()
    .min(13, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
    .max(13, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
    .required("უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
    .matches(/\S/g, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"),
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
};
export { validation, initialValues };
