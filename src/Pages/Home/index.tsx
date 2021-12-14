import "./style.css";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../Components/Input/Input";

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

  const monName = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const data = new Date();
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const dia = data.getDate();
  const ano = data.getFullYear();
  const mes = monName[data.getMonth()];

  useEffect(() => {
    if (horas > 6 && horas <= 18) {
      setTema(false);
    }
    if (horas === 18 && minutos > 0) {
      setTema(true);
    }
  }, [horas]);

  return (
    <div className={`${tema ? "tema-escuro" : "home-p"}`}>
      <h2>Gerador RGB</h2>
      <div className="container-data">
        <div className="icon-lapis" />
        <p>
          {dia}/{mes}/{ano} - {horas > 0 && horas <= 9 ? "0" + horas : horas}:
          {minutos > 0 && minutos <= 9 ? "0" + minutos : minutos}
        </p>
        <p></p>
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
             backgroundColor: `rgba(${cores.rosa},${cores.verde},${cores.azul})` 
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
