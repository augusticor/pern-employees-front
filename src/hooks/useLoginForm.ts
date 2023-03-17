import { useEffect, useMemo, useState } from 'react';
import {
  formValidationsObjectType,
  iFormCheckedValues,
  keysOfLoginOrRegister,
  LoginUser,
} from '../types';

export const useLoginForm = (
  initialForm: LoginUser,
  formValidations: formValidationsObjectType
) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState<iFormCheckedValues>({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => setFormState(initialForm), [initialForm]);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation) as Array<keysOfLoginOrRegister>) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation]);

  const createValidators = () => {
    const formCheckedValues: iFormCheckedValues = {};

    for (const formField of Object.keys(formValidations) as Array<keysOfLoginOrRegister>) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    // attributes
    ...formState,
    ...formValidation,
    formState,
    formValidation,

    // methods
    onInputChange,
    isFormValid,
  };
};
