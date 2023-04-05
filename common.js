var validateString = (fieldName, data) => {
  let errors = [];
  if (typeof data !== "string") {
    errors.push(`${fieldName} - Field type must be string`);
  }
  if (!data?.length || data?.length < 3 || data?.length > 12) {
    errors.push(
      `${fieldName} - Length must be greater than 3 and less than 12`
    );
  }
  return { errors, data };
};

var validateEmail = (fieldName, data) => {
  let errors = [];
  if (!data?.length || data?.length < 5) {
    errors.push(`${fieldName} - Length must be greater than 5`);
  }
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!data?.match(mailformat)) {
    errors.push(`${fieldName} - Enter a valid email`);
  }

  return { errors, data };
};

var validateNumber = (fieldName, data) => {
  let errors = [];
  if (!data?.length || data?.length < 11 || data?.length > 11) {
    errors.push(`${fieldName} - Length must not be less or greater than 11`);
  }
  return { errors, data };
}