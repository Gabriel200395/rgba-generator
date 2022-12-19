import { ChangeEvent, useEffect, useState } from "react";
import { hours, minutes } from "../../helpers/functions_data";

type colorsInstance = {
  pink: number;
  green: number;
  blue: number;
};

type fieldsInstance = {
  classField: string;
  nameField: string;
  stateField: number;
  changeField: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function useColors() {
  const [colors, setColors] = useState<colorsInstance>({
    pink: 93,
    green: 121,
    blue: 184,
  });

  const [theme, setTheme] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setColors({ ...colors, [event.target.name]: event.target.value });

  function schedule() {
    if ((hours >= 18 && minutes >= 0) || (hours <= 6 && minutes <= 59)) {
      setTheme(true);
    }
  }

  useEffect(() => {
    schedule();
  }, [hours, minutes]);

  const fields: fieldsInstance[] = [
    {
      classField: "pink",
      nameField: "pink",
      stateField: colors.pink,
      changeField: handleChange,
    },
    {
      classField: "green",
      nameField: "green",
      stateField: colors.green,
      changeField: handleChange,
    },
    {
      classField: "blue",
      nameField: "blue",
      stateField: colors.blue,
      changeField: handleChange,
    },
  ];

  return {
    fields,
    theme,
    colors,
  };
}
