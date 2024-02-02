
export const useFormValidator = () => {

  const isFormValid = (form:{}) =>
    Object.values(form).every((value) => {
      if (Array.isArray(value)) {
        return value.every((item) => typeof item === 'string' && item.trim() !== '');
      }
      return typeof value === 'string' && value.trim() !== '';
  });
    
    return {
      isFormValid
    }

}