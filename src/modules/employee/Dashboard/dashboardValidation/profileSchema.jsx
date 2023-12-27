import * as yup from "yup";

export const profileSchema = yup.object().shape({
  profilePhoto: yup
    .mixed()
    .test("fileType", "Invalid file format", (value) => {
      if (value) {
        const supportedFormats = ["image/jpeg", "image/png"];
        return supportedFormats.includes(value.type);
      }
      return true;
    })
    .required("required!"),
});
