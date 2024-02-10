
export const useFormValidator = () => {

      const isFormValid = (form: Record<string, string | string[]>) =>
        Object.entries(form).every(([key, value]) => {
            if (Array.isArray(value)) {
                if (key === 'url' || key === 'location' || key === 'description') {
                    return value.every((item) => typeof item === 'string' || item === '');
                } else {
                    return value.every((item) => typeof item === 'string' && item.trim() !== '');
                }
            } else if (key === 'url' || key === 'location' || key === 'description') {
                return typeof value === 'string' || value === '';
            } else {
                return typeof value === 'string' && value.trim() !== '';
            }
        });
    
    return {
      isFormValid
    }

}