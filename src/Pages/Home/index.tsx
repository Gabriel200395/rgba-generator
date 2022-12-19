import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { hours, minutes, dataFormat } from "../../helpers/functions_data";
import "./style.css";

type CorProps = {
  pink: number;
  green: number;
  blue: number;
};

const Home: React.FC = () => {
  const [cores, setCores] = useState<CorProps>({
    pink: 93,
    green: 121,
    blue: 184,
  });

  const [theme, setTheme] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCores({ ...cores, [event.target.name]: event.target.value });

  function schedule() {
    if (hours < 18) {
      setTheme(false);
    }
    if (hours >= 18 && minutes >= 0) {
      setTheme(true);
    }
  }

  useEffect(() => {
    schedule();
  }, [hours, minutes]);

  return (
    <div
      className={`${theme ? "theme-page" : "page-default"}`}
      data-testid="container-page"
    >
      <h2>Gerador RGB</h2>
      <div className="container-data">
        <div className="icon-lapis" />
        <p>{dataFormat}</p>
      </div>
      <div className="container-rgba">
        <div className="grid-input">
          <Input
            className="pink"
            name="pink"
            state={cores.pink}
            onChange={handleChange}
          />
          <Input
            className="green"
            name="green"
            state={cores.green}
            onChange={handleChange}
          />
          <Input
            className="blue"
            name="blue"
            state={cores.blue}
            onChange={handleChange}
          />
        </div>
        <div
          className="container-radius"
          style={{
            backgroundColor: `rgba(${cores.pink},${cores.green},${cores.blue})`,
          }}
        />
        <p>
          rgba({cores.pink}, {cores.green}, {cores.blue})
        </p>
      </div>
    </div>
  );
};

export default Home;
