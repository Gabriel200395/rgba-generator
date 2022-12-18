import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import { hours, minutes, dataFormat } from "../../helpers/functions_data";
import "./style.css";

type CorProps = {
  rosa: number;
  verde: number;
  azul: number;
};

const Home: React.FC = () => {
  const [cores, setCores] = useState<CorProps>({
    rosa: 93,
    verde: 121,
    azul: 184,
  });

  const [tema, setTema] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCores({ ...cores, [event.target.name]: event.target.value });

  useEffect(() => {
    if (hours < 18) {
      setTema(false);
    }
    if (hours >= 18 && minutes >= 0) {
      setTema(true);
    }
  }, [hours, minutes]);

  return (
    <div
      className={`${tema ? "tema-escuro" : "home-p"}`}
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
            className="rosa"
            name="rosa"
            state={cores.rosa}
            onChange={handleChange}
            data-testid="rosa"
          />
          <Input
            className="verde"
            name="verde"
            state={cores.verde}
            onChange={handleChange}
            data-testid="verde"
          />
          <Input
            className="azul"
            name="azul"
            state={cores.azul}
            onChange={handleChange}
            data-testid="azul"
          />
        </div>
        <div
          data-testid="container-rgba"
          className="container-radius"
          style={{
            backgroundColor: `rgba(${cores.rosa},${cores.verde},${cores.azul})`,
          }}
        />
        <p>
          rgba({cores.rosa}, {cores.verde}, {cores.azul})
        </p>
      </div>
    </div>
  );
};

export default Home;
