import { useEffect, useMemo, useState } from 'react';

// generic types
type keysOfGenericForm<FORMTYPE> = keyof FORMTYPE;

type typeOfKeysOfGeneriForm<FORMTYPE> = FORMTYPE[keysOfGenericForm<FORMTYPE>];

type genericFValidationType<FORMTYPE> = [
  (fieldToValidate: typeOfKeysOfGeneriForm<FORMTYPE>) => boolean,
  string
];

type genericFormValidationsType<FORMTYPE> = Record<
  keysOfGenericForm<FORMTYPE>,
  genericFValidationType<FORMTYPE>
>;

type genericCheckedFormFieldsObj<FORMTYPE> = {
  [key in keyof FORMTYPE]?: string | null;
};

// --------- definition ---------
export const useForm = <FORMTYPE>(
  initialForm: FORMTYPE,
  validationsObject: genericFormValidationsType<FORMTYPE>
) => {
  const [formState, setFormState] = useState(initialForm);

  const [checkedFormFields, setCheckedFormFields] = useState<
    genericCheckedFormFieldsObj<FORMTYPE>
  >({});

  useEffect(() => setFormState(initialForm), [initialForm]);

  useEffect(() => validateFormFields(), [formState]);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const validateFormFields = () => {
    let formCheckedValues: genericCheckedFormFieldsObj<FORMTYPE> = {};

    for (const formField of Object.keys(validationsObject) as Array<
      keysOfGenericForm<FORMTYPE>
    >) {
      const [fn, errorMessage] = validationsObject[formField];

      formCheckedValues[formField] = fn(formState[formField]) ? null : errorMessage;
    }

    setCheckedFormFields(formCheckedValues);
  };

  const isFormValid = useMemo(() => {
    for (const formFieldValid of Object.keys(checkedFormFields) as Array<
      keysOfGenericForm<FORMTYPE>
    >) {
      if (checkedFormFields[formFieldValid] !== null) return false;
    }

    return true;
  }, [checkedFormFields]);

  return {
    // props
    ...formState,
    formState,
    isFormValid,
    checkedFormFields,

    // funcs
    onInputChange,
  };
};
