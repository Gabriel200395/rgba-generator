import Input from "../../Components/Input/Input";
import { dataFormat } from "../../helpers/functions_data";
import "./style.css";
import useColors from "./useColors";

export default function PageColor() {
  const { theme, fields, colors } = useColors();

  return (
    <div className={`${true ? "theme-page" : "page-default"}`}>
      <h2>Gerador RGB</h2>
      <div className="container-data">
        <div className="icon-lapis" />
        <p>{dataFormat}</p>
      </div>
      <div className="container-rgba">
        <div className="grid-input">
          {fields.map((field, index) => {
            return (
              <Input
                key={index}
                className={field.classField}
                name={field.nameField}
                state={field.stateField}
                onChange={field.changeField}
              />
            );
          })}
        </div>
        <div
          className="container-radius"
          style={{
            backgroundColor: `rgba(${colors.pink},${colors.green},${colors.blue})`,
          }}
        />
        <p>
          rgba({colors.pink}, {colors.green}, {colors.blue})
        </p>
      </div>
    </div>
  );
}
